// Cloud Function backing the Pattaya Rent a Bike contact form.
// Triggered via the /api/contact Hosting rewrite (see firebase.json).
//
// On each submission it:
//   1. Writes the enquiry to the shared "bookings" Firestore collection,
//      using the same field shape the marketing site's enquiries use, so
//      it shows up alongside car rental enquiries (e.g. in LiveEnquiries).
//   2. Emails a notification to info@pattayarentacar.com via Gmail SMTP,
//      using the existing "gmail-app-password" Secret Manager secret.

const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const gmailAppPassword = defineSecret("gmail-app-password");
const NOTIFY_EMAIL = "info@pattayarentacar.com";
const GMAIL_USER = process.env.GMAIL_USER || NOTIFY_EMAIL;

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

exports.contactForm = onRequest(
  { region: "asia-southeast1", secrets: [gmailAppPassword], cors: true },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }

    const body = req.body || {};
    const {
      name,
      email,
      phone,
      rentalStart,
      rentalEnd,
      bikePreference,
      message,
      website, // honeypot field - real users never fill this in
    } = body;

    // Silently accept (but drop) anything that fills the honeypot field.
    if (website) {
      console.log("[BikeContact] Honeypot triggered, dropping submission.");
      res.status(200).json({ success: true });
      return;
    }

    if (!name || !email || !phone) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const nowIso = new Date().toISOString();
    const firestore = admin.firestore();

    try {
      await firestore.collection("bookings").add({
        customerName: name,
        email: String(email).toLowerCase().trim(),
        mobileNumber: phone,
        notes: message || "",
        requestedCarType: bikePreference || "Bike Rental Enquiry",
        carId: "",
        status: "Enquiry",
        source: "bike-rental-site",
        startDate: rentalStart || nowIso,
        endDate: rentalEnd || nowIso,
        amount: 0,
        deposit: 0,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    } catch (err) {
      // Don't block the email on a Firestore write failure - log and continue.
      console.error("[BikeContact] Firestore write failed:", err.message);
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: GMAIL_USER,
          pass: gmailAppPassword.value(),
        },
      });

      await transporter.sendMail({
        from: `"Pattaya Rent a Bike" <${GMAIL_USER}>`,
        to: NOTIFY_EMAIL,
        replyTo: email,
        subject: `New Bike Rental Enquiry - ${name}`,
        html: [
          "<h2>New Bike Rental Enquiry</h2>",
          `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
          `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
          `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>`,
          `<p><strong>Rental Start:</strong> ${escapeHtml(rentalStart || "-")}</p>`,
          `<p><strong>Rental End:</strong> ${escapeHtml(rentalEnd || "-")}</p>`,
          `<p><strong>Bike Preference:</strong> ${escapeHtml(bikePreference || "-")}</p>`,
          `<p><strong>Message:</strong><br>${escapeHtml(message || "-")}</p>`,
        ].join("\n"),
      });
    } catch (err) {
      console.error("[BikeContact] Email send failed:", err.message);
      res.status(500).json({ error: "Failed to send email" });
      return;
    }

    res.status(200).json({ success: true });
  }
);

// Site content for Pattaya Rent a Bike.
// Verified against the live pattayarentabike.com homepage on 2026-08-08.

export const site = {
  name: "Pattaya Rent a Bike",
  domain: "pattayarentabike.com",
  contact: {
    email: "info@pattayarentacar.com",
    phone: "+66 83 077 6928",
    whatsapp: "https://wa.me/66830776928",
    lineId: "@pattayarentacar",
  },
  office: {
    label: "Central Pattaya Office",
    address: "359/119 Moo 12 Nongprue, Pattaya City, Chon Buri 20150",
    hours: "9am - 5pm, 365 days a year",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62222.2495336179!2d100.7947462216797!3d12.91475260000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310296426421aecf%3A0x359024d542f838e5!2sPattaya%20Rent%20a%20Car!5e0!3m2!1sen!2sth!4v1778382551513!5m2!1sen!2sth",
  },
  carRentalUrl: "https://www.pattayarentacar.com",
  logo: {
    main: "https://firebasestorage.googleapis.com/v0/b/pattaya-rent-a-car-rebuild.firebasestorage.app/o/PRAB-Logo-1-optimized.png?alt=media&token=0ac67e65-3590-4a16-a884-2e1a2415cb07",
    square:
      "https://firebasestorage.googleapis.com/v0/b/pattaya-rent-a-car-rebuild.firebasestorage.app/o/PRAB-Logo-2.jpg?alt=media&token=9f7e5372-55d9-4eaf-a909-5f8e35d141bf",
  },
};

export const fleet = [
  {
    name: "Yamaha GT 125",
    slug: "yamaha-gt-125",
    engine: "125cc",
    transmission: "Auto",
    daily: 200,
    monthly: 2500,
    image:
      "https://firebasestorage.googleapis.com/v0/b/pattaya-rent-a-car-rebuild.firebasestorage.app/o/bikes%2Fgt125.png?alt=media&token=dedd1e41-1af9-411f-853b-aefc8f42a86a",
  },
  {
    name: "Yamaha Nmax",
    slug: "yamaha-nmax",
    engine: "155cc",
    transmission: "Auto",
    daily: 300,
    monthly: 4000,
    image:
      "https://firebasestorage.googleapis.com/v0/b/pattaya-rent-a-car-rebuild.firebasestorage.app/o/bikes%2Fnmax.png?alt=media&token=4ef6c22c-3467-4c35-a51e-0650bfe41234",
  },
  {
    name: "Honda PCX",
    slug: "honda-pcx",
    engine: "150cc",
    transmission: "Auto",
    daily: 300,
    monthly: 4000,
    image: "https://firebasestorage.googleapis.com/v0/b/pattaya-rent-a-car-rebuild.firebasestorage.app/o/bikes%2Fpcx.png?alt=media&token=237afcdb-1e04-4b2f-9428-6526566d89fe",
  },
  {
    name: "Yamaha Aerox",
    slug: "yamaha-aerox",
    engine: "155cc",
    transmission: "Auto",
    daily: 300,
    monthly: 4000,
    image:
      "https://firebasestorage.googleapis.com/v0/b/pattaya-rent-a-car-rebuild.firebasestorage.app/o/bikes%2Faerox.png?alt=media&token=cb19420f-5c66-4e7e-b3e0-736cd32252f0",
  },
];

export const faqs = [
  {
    q: "Can I book in advance?",
    a: "Yes, and we recommend it, especially during high season. You can reserve your specific bike online to ensure it is ready for you when you arrive.",
  },
  {
    q: "Do you deliver to hotels?",
    a: "We do not offer delivery services. All customers must come to our central Pattaya office to pick up and return their bikes. This allows us to ensure the bike is perfectly adjusted for you and all paperwork is handled correctly.",
  },
  {
    q: "What documents do I need to rent?",
    a: "You will need your original passport and a valid driving license. We also require a 1000 baht cash deposit.",
  },
  {
    q: "Is insurance included?",
    a: "All our bikes come with the compulsory government insurance (Po Lo Bo), which covers basic medical costs.",
  },
  {
    q: "What bikes do you have?",
    a: "Yamaha GT 125, Yamaha Nmax, Honda PCX and Yamaha Aerox. All our bikes are regularly serviced and well-maintained.",
  },
  {
    q: "What happens if there's a breakdown?",
    a: "If your bike breaks down, call or WhatsApp us during office hours (9am - 5pm, 365 days a year) and we'll arrange a technician or a replacement bike as quickly as possible.",
  },
];

export const reviews = [
  {
    name: "James R.",
    location: "UK",
    text: "Excellent service! The bike was brand new and riding it around Pattaya was a joy. Highly recommend Pattaya Rent a Bike.",
    stars: 5,
  },
  {
    name: "Sarah M.",
    location: "Australia",
    text: "Very professional and friendly staff. The booking process was smooth and the prices are the best in town.",
    stars: 5,
  },
  {
    name: "Lukas K.",
    location: "Germany",
    text: "I've tried many rental shops in Pattaya, and this is by far the best. Reliable bikes and great support.",
    stars: 5,
  },
];

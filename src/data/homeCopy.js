// Homepage copy, English + Thai. home.ejs renders from this so /th/ is a real
// Thai homepage rather than a 404. Strings marked (html) are output unescaped
// because they contain markup or entities; everything else is escaped.
// Facts must match site.js and topics/prac-rental-policies (Pratumnak office,
// no delivery, passport shown but not kept, 1,000 THB cash deposit, Po Lo Bo).

export const homeCopy = {
  en: {
    meta: {
      title: "Motorbike & Scooter Rental in Pattaya",
      description:
        "Motorbike and scooter rental in Pattaya since 2009. Yamaha and Honda automatics, government insurance and two helmets included. Book online or via WhatsApp.",
    },
    badgeGroup: "PART OF PATTAYA RENT A CAR &middot; 1,200+ GOOGLE REVIEWS", // (html)
    badgeReply: "FAST REPLIES ON WHATSAPP",
    h1: 'Motorbike &amp; Scooter <br>\n          Rental in <span class="text-primary">Pattaya</span>', // (html)
    intro:
      "Motorbike &amp; scooter rental from our Pratumnak office since 2009. Well-maintained Yamaha and Honda automatics, helmets included, and we don't keep your passport.", // (html)
    chips: ["16+ Years in Pattaya", "10,000+ Happy Customers", "Helmets Included"],
    trust: ["Since 2009", "1,200+ Google Reviews (Group)", "Insured Bikes"],
    fleet: {
      eyebrow: "Our Fleet",
      heading: "Available Motorbikes",
      sub: "Well-maintained, reliable bikes for your Pattaya adventure.",
      transmission: "Transmission",
      book: "Book Now",
      compareLink: "Not sure which scooter to pick? Compare the Nmax vs the PCX &rarr;", // (html)
      monthlyLink: "Staying a month or longer? See monthly rental rates &rarr;", // (html)
    },
    reviews: {
      heading: "What Our Clients Say",
      sub: "Join thousands of happy travelers who trust us in Pattaya.",
    },
    why: {
      eyebrow: "Our Service",
      heading: "Why riders choose <br> Pattaya Rent a Bike", // (html)
      cards: [
        ["Open Daily", null], // null = office hours
        ["Insurance Included", "Every bike comes with compulsory government insurance (Po Lo Bo), covering basic medical costs."],
        ["Office Pickup", "Easy pickup and return at our Pratumnak office, between Pattaya and Jomtien."],
        ["Best Fleet", "Modern, well-maintained bikes only. No old stock."],
        ["Unlimited Mileage", "No hidden restrictions on how far you ride."],
        ["Trusted Since 2009", "Part of Pattaya Rent a Car, with 1,200+ Google reviews from travellers around the world."],
      ],
    },
    requirements: {
      eyebrow: "Before You Book",
      heading: "Rental Requirements &amp; Policy", // (html)
      sub: "Everything you need to know before picking up your bike.",
      cards: [
        ["Documents Required", "Show your original passport and a valid driving licence at pickup. We don't keep your passport."],
        ["Security Deposit", "A 1,000 THB cash deposit is required at pickup, refunded on return."],
        ["Insurance Included", "Every bike comes with compulsory government insurance (Po Lo Bo), covering basic medical costs."],
        ["Helmets Included", "Two helmets are provided with every rental at no extra cost."],
        ["Pickup &amp; Return Only", "All rentals are collected and returned at our Pratumnak office &mdash; we don't offer hotel delivery."], // (html)
        ["Well-Maintained Fleet", "Every bike is regularly serviced and checked before it goes out."],
      ],
    },
    faq: {
      eyebrow: "Information",
      heading: "Common Questions",
      guideLink: "Want the full breakdown of what our insurance covers? Read our motorbike insurance guide &rarr;", // (html)
      guideHref: "/guides/motorbike-insurance-in-thailand/",
    },
    links: { compare: "/guides/nmax-vs-pcx/", monthly: "/monthly-rental/", bikePrefix: "/bikes/", search: "/#search-bikes" },
    picker: null,
  },

  th: {
    meta: {
      title: "เช่ามอเตอร์ไซค์ พัทยา สกู๊ตเตอร์ออโต้ Yamaha และ Honda",
      description:
        "เช่ามอเตอร์ไซค์และสกู๊ตเตอร์ในพัทยา ตั้งแต่ปี 2009 Yamaha และ Honda เกียร์ออโต้ รวมประกันภัยภาคบังคับ (พ.ร.บ.) และหมวกกันน็อค 2 ใบ จองออนไลน์หรือทาง WhatsApp",
    },
    badgeGroup: "ในเครือ PATTAYA RENT A CAR &middot; รีวิว GOOGLE 1,200+", // (html)
    badgeReply: "ตอบไวทาง WHATSAPP",
    h1: 'เช่ามอเตอร์ไซค์ <br>\n          และสกู๊ตเตอร์ใน<span class="text-primary">พัทยา</span>', // (html)
    intro:
      "บริการเช่ามอเตอร์ไซค์และสกู๊ตเตอร์จากสำนักงานของเราที่พระตำหนัก ตั้งแต่ปี 2009 รถ Yamaha และ Honda เกียร์ออโต้ ดูแลอย่างดี มีหมวกกันน็อคให้ และเราไม่ยึดพาสปอร์ตของคุณ",
    chips: ["ให้บริการในพัทยา 16 ปี+", "ลูกค้ากว่า 10,000 ราย", "มีหมวกกันน็อคให้"],
    trust: ["ตั้งแต่ปี 2009", "รีวิว Google 1,200+ (ในเครือ)", "รถมีประกันทุกคัน"],
    fleet: {
      eyebrow: "รถของเรา",
      heading: "มอเตอร์ไซค์ที่มีให้เช่า",
      sub: "รถดูแลอย่างดี เชื่อถือได้ สำหรับการเที่ยวพัทยาของคุณ",
      transmission: "เกียร์",
      book: "จองเลย",
      compareLink: "ยังเลือกไม่ได้? เปรียบเทียบ Nmax กับ PCX &rarr;", // (html)
      monthlyLink: null, // monthly page is English only
    },
    reviews: {
      heading: "รีวิวจากลูกค้า",
      sub: "นักท่องเที่ยวหลายพันคนไว้วางใจเราในพัทยา (รีวิวต้นฉบับภาษาอังกฤษ)",
    },
    why: {
      eyebrow: "บริการของเรา",
      heading: "ทำไมต้องเช่ากับ <br> Pattaya Rent a Bike", // (html)
      cards: [
        ["เปิดทุกวัน", "9:00 - 17:00 น. ตลอด 365 วัน"],
        ["รวมประกันภัย", "รถทุกคันมีประกันภัยภาคบังคับ (พ.ร.บ.) คุ้มครองค่ารักษาพยาบาลเบื้องต้น"],
        ["รับรถที่สำนักงาน", "รับและคืนรถได้สะดวกที่สำนักงานพระตำหนัก ระหว่างพัทยากับจอมเทียน"],
        ["รถคุณภาพ", "รถรุ่นใหม่ ดูแลอย่างดีเท่านั้น ไม่มีรถเก่า"],
        ["ไม่จำกัดระยะทาง", "ขับได้ไกลเท่าที่ต้องการ ไม่มีข้อจำกัดแอบแฝง"],
        ["ไว้วางใจได้ตั้งแต่ปี 2009", "ในเครือ Pattaya Rent a Car มีรีวิว Google กว่า 1,200 รีวิวจากนักท่องเที่ยวทั่วโลก"],
      ],
    },
    requirements: {
      eyebrow: "ก่อนจอง",
      heading: "เงื่อนไขและเอกสารการเช่า", // (html)
      sub: "ทุกอย่างที่ควรรู้ก่อนมารับรถ",
      cards: [
        ["เอกสารที่ต้องใช้", "แสดงพาสปอร์ตตัวจริงและใบขับขี่ที่ยังไม่หมดอายุตอนรับรถ เราไม่ยึดพาสปอร์ตของคุณ"],
        ["เงินมัดจำ", "มัดจำเงินสด 1,000 บาทตอนรับรถ คืนให้เมื่อคืนรถ"],
        ["รวมประกันภัย", "รถทุกคันมีประกันภัยภาคบังคับ (พ.ร.บ.) คุ้มครองค่ารักษาพยาบาลเบื้องต้น"],
        ["มีหมวกกันน็อคให้", "หมวกกันน็อค 2 ใบกับทุกการเช่า ไม่มีค่าใช้จ่ายเพิ่ม"],
        ["รับและคืนที่สำนักงานเท่านั้น", "รับและคืนรถที่สำนักงานพระตำหนักเท่านั้น ไม่มีบริการส่งรถถึงโรงแรม"],
        ["รถได้รับการดูแล", "รถทุกคันเข้ารับบริการตามรอบและตรวจเช็คก่อนส่งมอบ"],
      ],
    },
    faq: {
      eyebrow: "ข้อมูล",
      heading: "คำถามที่พบบ่อย",
      guideLink: null, // insurance guide is English only
      guideHref: null,
    },
    faqs: [
      { q: "จองล่วงหน้าได้ไหม?", a: "ได้ และแนะนำให้จองล่วงหน้า โดยเฉพาะช่วงไฮซีซั่น คุณสามารถเช็คคิวว่างและจองออนไลน์ได้ เพื่อให้รถพร้อมเมื่อคุณมาถึง" },
      { q: "มีบริการส่งรถถึงโรงแรมไหม?", a: "ไม่มีบริการส่งรถ ลูกค้าทุกท่านต้องมารับและคืนรถที่สำนักงานของเราที่พระตำหนัก เพื่อให้เราปรับรถให้เหมาะกับคุณและจัดการเอกสารให้ถูกต้อง" },
      { q: "ต้องใช้เอกสารอะไรบ้าง?", a: "แสดงพาสปอร์ตตัวจริงและใบขับขี่ที่ยังไม่หมดอายุ พร้อมเงินมัดจำเงินสด 1,000 บาท เราไม่ยึดพาสปอร์ตของคุณ" },
      { q: "รวมประกันภัยไหม?", a: "รถทุกคันมีประกันภัยภาคบังคับ (พ.ร.บ.) ซึ่งคุ้มครองค่ารักษาพยาบาลเบื้องต้น แต่ไม่คุ้มครองความเสียหายของตัวรถ" },
      { q: "มีรถรุ่นไหนบ้าง?", a: "Yamaha GT 125, Yamaha Nmax, Honda PCX และ Yamaha Aerox รถทุกคันเข้ารับบริการตามรอบและดูแลอย่างดี" },
      { q: "ถ้ารถเสียระหว่างทางทำอย่างไร?", a: "โทรหรือ WhatsApp หาเราในเวลาทำการ (9:00 - 17:00 น. ตลอด 365 วัน) เราจะส่งช่างหรือรถคันใหม่ให้เร็วที่สุด" },
      { q: "มีเช่ารายเดือนไหม?", a: "มี เช่ารายเดือนได้ทุกรุ่นตามคิวว่าง ราคาถูกกว่าเช่ารายวัน ติดต่อทาง WhatsApp หรือโทรเพื่อสอบถามราคาและคิวว่าง" },
    ],
    links: { compare: "/th/guides/nmax-vs-pcx/", monthly: null, bikePrefix: "/th/bikes/", search: "/th/#search-bikes" },
    picker: {
      heading: "เช็คคิวว่าง",
      pickup: "วันและเวลารับรถ",
      ret: "วันและเวลาคืนรถ",
      select: "เลือกวันที่",
      search: "ค้นหารถว่าง",
      note: "จองก่อน ชำระทีหลัง",
    },
  },
};

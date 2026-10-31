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
      from: "From",
      perDay: "/day",
      pricesLink: "See all prices &rarr;", // (html)
      compareLink: "Not sure which scooter to pick? Compare the Nmax vs the PCX &rarr;", // (html)
      monthlyLink: "Staying a month or longer? See monthly rental rates &rarr;", // (html)
    },
    reviews: {
      heading: "What Our Clients Say",
      sub: "Join thousands of happy travelers who trust us in Pattaya.",
    },
    // Rental at a glance (components/rental-glance.ejs). Replaced the why/requirements card grids.
    glance: {
      eyebrow: "Before You Book",
      heading: "Your rental at a glance",
      sub: "No surprises: what comes with the bike, what to bring, and how pickup works.",
      included: {
        title: "Included with every bike",
        items: [
          ["helmet", "Two helmets", "For you and a passenger, at no extra cost."],
          ["shield", "Government insurance", "Compulsory Po Lo Bo cover for basic medical costs."],
          ["road", "Unlimited mileage", "No limits on how far you ride."],
          ["wrench", "Breakdown help", "Call or WhatsApp us, 9am - 5pm, 365 days a year."],
        ],
      },
      bring: {
        title: "Bring to pickup",
        items: [
          ["Your original passport", "We look at it. We don't keep it."],
          ["A valid driving licence", "Shown at pickup."],
          ["1,000 THB cash deposit", "Refunded when you return the bike."],
        ],
      },
      steps: {
        title: "How it works",
        items: [
          ["Get your price", "Choose a bike and dates above, then book online."],
          ["Pick up in Pratumnak", "Collect your bike at our Pratumnak Office, between Pattaya and Jomtien. We don't deliver to hotels."],
          ["Ride, then return", "Bring it back to the same office at the end of your rental."],
        ],
      },
      cta: "Get my price",
      directions: "Get directions &rarr;", // (html)
    },
    faq: {
      eyebrow: "Information",
      heading: "Common Questions",
      guideLink: "Want the full breakdown of what our insurance covers? Read our motorbike insurance guide &rarr;", // (html)
      guideHref: "/guides/motorbike-insurance-in-thailand/",
    },
    links: { compare: "/guides/nmax-vs-pcx/", monthly: "/monthly-rental/", bikePrefix: "/bikes/", search: "/#search-bikes" },
    picker: null,
    // Instant-quote card (components/quote-builder.ejs). js strings are used by assets/js/quote.js.
    quote: {
      heading: "Instant Price",
      step1: "1. Choose your bike",
      step2: "2. Your dates",
      total: "Total",
      cta: "Check Availability",
      barCta: "Get my price", // bike pages' sticky mobile bar
      js: {
        cta: "Book the {bike}",
        day: "day",
        days: "days",
        perDay: "/day",
        loading: "Getting live price...",
        approx: "About",
        confirmNext: "Price confirmed on the next step",
        monthly: "30+ days? See our monthly rates",
        nudge: "Ride <b>{days} days</b> for <b>{rate}/day</b>: only <b>{extra}</b> more for {more} extra days.",
        nudgeCta: "Make it {days} days",
      },
    },
    // Bike finder (components/bike-finder.ejs): each answer adds points to bikes (see SCORES there).
    finder: {
      eyebrow: "Bike Finder",
      heading: "Which bike is right for you?",
      sub: "Three taps. We'll match you with the right bike from our fleet.",
      questions: [
        { key: "who", label: "Who's riding?", options: [["solo", "Just me"], ["two", "Two of us"]] },
        { key: "where", label: "Where are you going?", options: [["town", "Around town &amp; beaches"], ["trips", "Day trips further out"]] },
        { key: "want", label: "What matters most?", options: [["easy", "Easy &amp; affordable"], ["comfort", "Comfort &amp; legroom"], ["sporty", "Sporty look"]] },
      ],
      match: "Your match",
      perDay: "/day",
      cta: "Get my price",
      more: "More about this bike &rarr;", // (html)
    },
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
      from: "เริ่มต้น",
      perDay: "/วัน",
      pricesLink: "ดูราคาทั้งหมด (ภาษาอังกฤษ) &rarr;", // (html)
      compareLink: "ยังเลือกไม่ได้? เปรียบเทียบ Nmax กับ PCX &rarr;", // (html)
      monthlyLink: null, // monthly page is English only
    },
    reviews: {
      heading: "รีวิวจากลูกค้า",
      sub: "นักท่องเที่ยวหลายพันคนไว้วางใจเราในพัทยา (รีวิวต้นฉบับภาษาอังกฤษ)",
    },
    glance: {
      eyebrow: "ก่อนจอง",
      heading: "สรุปการเช่าในหน้าเดียว",
      sub: "ไม่มีเซอร์ไพรส์ สิ่งที่ได้พร้อมรถ เอกสารที่ต้องนำมา และขั้นตอนการรับรถ",
      included: {
        title: "ได้พร้อมรถทุกคัน",
        items: [
          ["helmet", "หมวกกันน็อค 2 ใบ", "สำหรับคนขับและคนซ้อน ไม่มีค่าใช้จ่ายเพิ่ม"],
          ["shield", "ประกันภัยภาคบังคับ", "พ.ร.บ. คุ้มครองค่ารักษาพยาบาลเบื้องต้น"],
          ["road", "ไม่จำกัดระยะทาง", "ขับได้ไกลเท่าที่ต้องการ"],
          ["wrench", "ช่วยเหลือเมื่อรถเสีย", "โทรหรือ WhatsApp 9:00 - 17:00 น. ทุกวัน"],
        ],
      },
      bring: {
        title: "สิ่งที่ต้องนำมาตอนรับรถ",
        items: [
          ["พาสปอร์ตตัวจริง", "แสดงให้ดูเท่านั้น เราไม่ยึดพาสปอร์ต"],
          ["ใบขับขี่ที่ยังไม่หมดอายุ", "แสดงตอนรับรถ"],
          ["เงินมัดจำสด 1,000 บาท", "คืนให้เมื่อคืนรถ"],
        ],
      },
      steps: {
        title: "ขั้นตอนการเช่า",
        items: [
          ["เช็คราคา", "เลือกรถและวันที่ด้านบน แล้วจองออนไลน์"],
          ["รับรถที่พระตำหนัก", "รับรถที่สำนักงานพระตำหนัก ระหว่างพัทยากับจอมเทียน ไม่มีบริการส่งรถถึงโรงแรม"],
          ["ขับเที่ยว แล้วคืนรถ", "นำรถมาคืนที่สำนักงานเดิมเมื่อครบกำหนด"],
        ],
      },
      cta: "เช็คราคา",
      directions: "ดูเส้นทาง &rarr;", // (html)
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
    quote: {
      heading: "เช็คราคาทันที",
      step1: "1. เลือกรถ",
      step2: "2. วันที่เช่า",
      total: "รวม",
      cta: "เช็คคิวว่าง",
      barCta: "เช็คราคา",
      js: {
        cta: "จอง {bike}",
        day: "วัน",
        days: "วัน",
        perDay: "/วัน",
        loading: "กำลังเช็คราคา...",
        approx: "ประมาณ",
        confirmNext: "ยืนยันราคาในขั้นตอนถัดไป",
        monthly: "เช่า 30 วันขึ้นไป? ดูราคารายเดือน",
        nudge: "เช่า <b>{days} วัน</b> เหลือ <b>{rate}/วัน</b> จ่ายเพิ่มเพียง <b>{extra}</b> ได้อีก {more} วัน",
        nudgeCta: "เปลี่ยนเป็น {days} วัน",
      },
    },
    finder: {
      eyebrow: "ตัวช่วยเลือกรถ",
      heading: "รถคันไหนเหมาะกับคุณ?",
      sub: "แตะแค่ 3 ครั้ง เราจะแนะนำรถที่เหมาะกับคุณที่สุด",
      questions: [
        { key: "who", label: "ใครขับบ้าง?", options: [["solo", "ขับคนเดียว"], ["two", "ซ้อนสอง"]] },
        { key: "where", label: "จะไปที่ไหน?", options: [["town", "ในเมืองและชายหาด"], ["trips", "เที่ยวไกลนอกเมือง"]] },
        { key: "want", label: "อะไรสำคัญที่สุด?", options: [["easy", "ขับง่าย ราคาประหยัด"], ["comfort", "นั่งสบาย ที่วางขากว้าง"], ["sporty", "ดีไซน์สปอร์ต"]] },
      ],
      match: "รถที่เหมาะกับคุณ",
      perDay: "/วัน",
      cta: "เช็คราคา",
      more: "ดูรายละเอียดรถรุ่นนี้ &rarr;", // (html)
    },
  },
};

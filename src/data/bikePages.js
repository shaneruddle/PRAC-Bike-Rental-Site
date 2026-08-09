// Bike-model pages + comparison guide content for Pattaya Rent a Bike.
// English + Thai. Facts kept consistent with src/data/site.js (faqs, office, policies):
// pickup-only (no delivery), passport + license + 1000 THB deposit, Po Lo Bo compulsory
// insurance, no 24/7 roadside (office hours 9am-5pm, 365 days/year), helmets included.

export const bikeSlugs = ["yamaha-gt-125", "yamaha-nmax", "honda-pcx", "yamaha-aerox"];

// Shared UI strings for the new bilingual pages (bike-detail.ejs, comparison.ejs).
// Kept here - never typed directly into a template - because this file is the
// only place Thai text enters the repo through the safe Cloud Shell Upload path.
export const uiLabels = {
  en: {
    home: "Home",
    perDay: "/ day",
    perMonth: "/ month",
    checkAvailability: "Check Availability",
    bestFor: "Best For",
    faqHeading: "Frequently Asked Questions",
    readInEnglish: "Read this page in English",
    readInThai: "Read this page in Thai",
    viewAllBikes: "View all bikes",
    compareGuideLink: "Compare Nmax vs PCX",
    verdictHeading: "Our Verdict",
    tableSpecHeading: "Side-by-Side Comparison"
  },
  th: {
    home: "หน้าแรก",
    perDay: "/ วัน",
    perMonth: "/ เดือน",
    checkAvailability: "เช็คคิวว่าง",
    bestFor: "เหมาะสำหรับ",
    faqHeading: "คำถามที่พบบ่อย",
    readInEnglish: "อ่านหน้านี้เป็นภาษาอังกฤษ",
    readInThai: "อ่านหน้านี้เป็นภาษาไทย",
    viewAllBikes: "ดูรถทั้งหมด",
    compareGuideLink: "เปรียบเทียบ Nmax vs PCX",
    verdictHeading: "สรุปผลการเปรียบเทียบ",
    tableSpecHeading: "เปรียบเทียบข้อมูลจำเพาะ"
  }
};

export const bikePages = {
  "yamaha-gt-125": {
    fleetIndex: 0,
    en: {
      title: "Yamaha GT 125 Rental in Pattaya | From THB 200/Day",
      description: "Rent the Yamaha GT 125 in Pattaya from THB 200/day. Light, automatic and easy to ride - ideal for beginners and short trips around town. Book online with Pattaya Rent a Bike.",
      h1: "Yamaha GT 125 Rental in Pattaya",
      tagline: "The easiest, most affordable way to get around Pattaya.",
      intro: "The Yamaha GT 125 is the lightest and most affordable bike in our fleet, and it's the one we recommend most often to first-time riders in Thailand. It's a fully automatic scooter - no clutch, no gears, just twist and go - which makes it simple to handle from the moment you pick it up.",
      bestFor: "Best for solo riders, short trips around central Pattaya, quick runs to the beach or 7-Eleven, and anyone renting a scooter in Thailand for the first time.",
      body: [
        "At 125cc, the GT 125 has plenty of power for getting around town, weaving through traffic and finding parking, without the extra weight and bulk of a bigger scooter. It's an easy bike to feel confident on within the first few minutes of riding.",
        "Like every bike in our fleet, the GT 125 comes with a helmet and the compulsory government insurance (Po Lo Bo), which covers basic medical costs. To rent it you'll need your original passport, a valid driving license and a 1000 baht cash deposit - the same requirement across our whole fleet.",
        "All bikes are picked up and returned at our central Pattaya office - we don't offer delivery, which lets us make sure your bike is properly adjusted and all the paperwork is handled correctly before you ride off."
      ],
      faqs: [
        { q: "Is the GT 125 good for a first-time rider in Thailand?", a: "Yes - it's the lightest, easiest bike in our fleet and a common first choice. It's still a good idea to take it slow for your first few minutes in Pattaya traffic, even if you've ridden scooters before." },
        { q: "How does the GT 125 compare to the Nmax or PCX?", a: "The GT 125 has a smaller 125cc engine and is lighter overall, which makes it cheaper and easier to handle - best for solo riders or short trips. The Nmax and PCX have larger 150-155cc engines, better suited to two-up riding or longer trips outside central Pattaya." },
        { q: "Can I book the GT 125 in advance?", a: "Yes, and we recommend it during high season to make sure your specific bike is ready when you arrive." }
      ]
    },
    th: {
      title: "เช่ามอเตอร์ไซค์ Yamaha GT 125 พัทยา เริ่มต้น 200 บาท/วัน",
      description: "เช่า Yamaha GT 125 ในพัทยา เริ่มต้นเพียง 200 บาทต่อวัน เกียร์ออโต้ น้ำหนักเบา ขับง่าย เหมาะสำหรับมือใหม่และทริประยะสั้นในเมือง จองออนไลน์กับ Pattaya Rent a Bike",
      h1: "เช่ามอเตอร์ไซค์ Yamaha GT 125 ในพัทยา",
      tagline: "วิธีที่ง่ายและคุ้มค่าที่สุดในการเที่ยวพัทยา",
      intro: "Yamaha GT 125 เป็นรถในฝูงบินของเราที่มีน้ำหนักเบาที่สุดและราคาประหยัดที่สุด เป็นรุ่นที่เราแนะนำให้กับนักท่องเที่ยวที่ขับมอเตอร์ไซค์ในประเทศไทยเป็นครั้งแรกมากที่สุด เป็นสกู๊ตเตอร์เกียร์ออโต้เต็มรูปแบบ ไม่ต้องพับครัช ไม่ต้องเปลี่ยนเกียร์ บิดแล้วไปได้เลย ทำให้ขับง่ายตั้งแต่นาทีแรกที่รับรถ",
      bestFor: "เหมาะสำหรับผู้ขับขี่คนเดียว ทริประยะสั้นในเขตพัทยากลาง ไปทะเลหรือร้านสะดวกซื้อ และผู้ที่เช่ามอเตอร์ไซค์ในประเทศไทยเป็นครั้งแรก",
      body: [
        "ด้วยเครื่องยนต์ขนาด 125cc รถรุ่นนี้มีกำลังเพียงพอสำหรับการขับขี่ในเมือง แทรกตัวในสภาพจราจร และหาที่จอดได้สะดวก โดยไม่ต้องแบกน้ำหนักและขนาดตัวถังที่ใหญ่เหมือนสกู๊ตเตอร์รุ่นใหญ่ เป็นรถที่ทำให้คุณมั่นใจได้ตั้งแต่ไม่กี่นาทีแรกที่ขับ",
        "เช่นเดียวกับรถทุกคันในฝูงบินของเรา GT 125 มาพร้อมหมวกกันน็อคและประกันภัยภาคบังคับ (พ.ร.บ.) ซึ่งครอบคลุมค่ารักษาพยาบาลเบื้องต้น ในการเช่าคุณต้องใช้พาสปอร์ตตัวจริง ใบขับขี่ที่ยังไม่หมดอายุ และเงินมัดจำสด 1000 บาท เหมือนกับรถทุกคันในฝูงบินของเรา",
        "รถทุกคันรับและคืนที่สำนักงานของเราในพัทยากลางเท่านั้น เราไม่มีบริการส่งรถถึงที่พัก เพื่อให้แน่ใจว่ารถถูกปรับตั้งอย่างเหมาะสมและเอกสารทุกอย่างถูกต้องก่อนที่คุณจะออกเดินทาง"
      ],
      faqs: [
        { q: "GT 125 เหมาะกับผู้ที่ขับมอเตอร์ไซค์ในไทยเป็นครั้งแรกหรือไม่?", a: "เหมาะมาก เป็นรถที่เบาที่สุดและขับง่ายที่สุดในฝูงบินของเรา และเป็นตัวเลือกแรกที่ลูกค้าหลายคนเลือก แนะนำให้ขับช้าๆ ในช่วงไม่กี่นาทีแรกที่เจอสภาพจราจรพัทยา แม้จะเคยขับสกู๊ตเตอร์มาก่อนก็ตาม" },
        { q: "GT 125 ต่างจาก Nmax หรือ PCX อย่างไร?", a: "GT 125 มีเครื่องยนต์ขนาดเล็กกว่าที่ 125cc และมีน้ำหนักเบากว่าโดยรวม ทำให้ราคาถูกกว่าและขับง่ายกว่า เหมาะกับผู้ขับขี่คนเดียวหรือทริประยะสั้น ส่วน Nmax และ PCX มีเครื่องยนต์ใหญ่กว่าที่ 150-155cc เหมาะกับการซ้อนสองหรือทริประยะไกลนอกเขตพัทยากลางมากกว่า" },
        { q: "จองรถ GT 125 ล่วงหน้าได้หรือไม่?", a: "ได้ และเราแนะนำให้จองล่วงหน้าโดยเฉพาะในช่วงไฮซีซั่น เพื่อให้แน่ใจว่ารถคันที่คุณต้องการพร้อมใช้งานเมื่อคุณมาถึง" }
      ]
    }
  },

  "yamaha-nmax": {
    fleetIndex: 1,
    en: {
      title: "Yamaha Nmax Rental in Pattaya | From THB 300/Day",
      description: "Rent the Yamaha Nmax in Pattaya from THB 300/day. A 155cc automatic scooter with room for two, great for longer rides beyond central Pattaya. Book online today.",
      h1: "Yamaha Nmax Rental in Pattaya",
      tagline: "More power, more comfort - built for two.",
      intro: "The Yamaha Nmax is one of our two most popular scooters, alongside the Honda PCX. With a 155cc automatic engine, it has noticeably more power than the GT 125 and is a comfortable choice for two adults riding together.",
      bestFor: "Best for two-up riding, longer trips beyond central Pattaya, and riders who want a bit more power and presence than an entry-level scooter.",
      body: [
        "The extra engine capacity over the GT 125 makes a real difference on longer rides - out to Jomtien, Na Jomtien, or further afield for a day trip - and the Nmax's maxi-scooter build gives a comfortable, stable ride with useful under-seat storage.",
        "Every Nmax comes with a helmet and the compulsory government insurance (Po Lo Bo), covering basic medical costs. You'll need your original passport, a valid driving license and a 1000 baht cash deposit to rent, the same as every bike in our fleet.",
        "Trying to decide between the Nmax and the Honda PCX? They're priced the same and sit in the same class - see our full comparison guide for the differences that actually matter."
      ],
      faqs: [
        { q: "Is the Nmax good for two people?", a: "Yes - the 155cc engine and maxi-scooter frame are built with two-up riding in mind, and it handles well with a passenger on board." },
        { q: "Nmax vs Honda PCX - what's the real difference?", a: "Both are 150-155cc automatics at the same price. The main differences come down to riding feel and styling rather than raw capability - read our full Nmax vs PCX comparison guide for details." },
        { q: "What documents do I need to rent the Nmax?", a: "Your original passport, a valid driving license, and a 1000 baht cash deposit - the same requirement for every bike in our fleet." }
      ]
    },
    th: {
      title: "เช่ามอเตอร์ไซค์ Yamaha Nmax พัทยา เริ่มต้น 300 บาท/วัน",
      description: "เช่า Yamaha Nmax ในพัทยา เริ่มต้นเพียง 300 บาทต่อวัน สกู๊ตเตอร์เกียร์ออโต้ 155cc นั่งได้สองคนสบาย เหมาะกับทริประยะไกลนอกเขตพัทยากลาง จองออนไลน์วันนี้",
      h1: "เช่ามอเตอร์ไซค์ Yamaha Nmax ในพัทยา",
      tagline: "แรงกว่า นั่งสบายกว่า ออกแบบมาเพื่อสองคน",
      intro: "Yamaha Nmax เป็นหนึ่งในสกู๊ตเตอร์ยอดนิยมที่สุดของเรา คู่กับ Honda PCX ด้วยเครื่องยนต์ออโต้ขนาด 155cc ทำให้มีกำลังมากกว่า GT 125 อย่างเห็นได้ชัด และเป็นตัวเลือกที่นั่งสบายสำหรับผู้ใหญ่สองคน",
      bestFor: "เหมาะสำหรับการซ้อนสอง ทริประยะไกลนอกเขตพัทยากลาง และผู้ที่ต้องการกำลังเครื่องยนต์และความมั่นใจมากกว่าสกู๊ตเตอร์รุ่นเริ่มต้น",
      body: [
        "ความจุเครื่องยนต์ที่มากกว่า GT 125 สร้างความแตกต่างได้จริงในทริประยะไกล ไม่ว่าจะเป็นจอมเทียน นาจอมเทียน หรือไปเที่ยวไกลขึ้นในหนึ่งวัน และโครงสร้างแบบแม็กซี่สกู๊ตเตอร์ของ Nmax ให้การขับขี่ที่นุ่มนวล มั่นคง พร้อมช่องเก็บของใต้เบาะที่มีประโยชน์",
        "Nmax ทุกคันมาพร้อมหมวกกันน็อคและประกันภัยภาคบังคับ (พ.ร.บ.) ครอบคลุมค่ารักษาพยาบาลเบื้องต้น ในการเช่าคุณต้องใช้พาสปอร์ตตัวจริง ใบขับขี่ที่ยังไม่หมดอายุ และเงินมัดจำสด 1000 บาท เหมือนกับรถทุกคันในฝูงบินของเรา",
        "กำลังตัดสินใจระหว่าง Nmax กับ Honda PCX อยู่ใช่ไหม? ราคาเท่ากันและอยู่ในคลาสเดียวกัน ดูคู่มือเปรียบเทียบฉบับเต็มของเราเพื่อดูความแตกต่างที่สำคัญจริงๆ"
      ],
      faqs: [
        { q: "Nmax เหมาะกับการซ้อนสองหรือไม่?", a: "เหมาะมาก เครื่องยนต์ 155cc และโครงสร้างแบบแม็กซี่สกู๊ตเตอร์ถูกออกแบบมาเพื่อรองรับผู้โดยสาร และควบคุมได้ดีแม้มีคนซ้อนท้าย" },
        { q: "Nmax กับ Honda PCX ต่างกันตรงไหนจริงๆ?", a: "ทั้งสองรุ่นเป็นเกียร์ออโต้ขนาด 150-155cc ราคาเท่ากัน ความแตกต่างหลักอยู่ที่ความรู้สึกในการขับขี่และสไตล์มากกว่าสมรรถนะ อ่านคู่มือเปรียบเทียบ Nmax vs PCX ฉบับเต็มของเราสำหรับรายละเอียด" },
        { q: "เช่า Nmax ต้องใช้เอกสารอะไรบ้าง?", a: "พาสปอร์ตตัวจริง ใบขับขี่ที่ยังไม่หมดอายุ และเงินมัดจำสด 1000 บาท เหมือนกับรถทุกคันในฝูงบินของเรา" }
      ]
    }
  },

  "honda-pcx": {
    fleetIndex: 2,
    en: {
      title: "Honda PCX Rental in Pattaya | From THB 300/Day",
      description: "Rent the Honda PCX in Pattaya from THB 300/day. A smooth, spacious 150cc automatic scooter, one of our two most popular models. Book online with Pattaya Rent a Bike.",
      h1: "Honda PCX Rental in Pattaya",
      tagline: "Smooth, spacious, and dependable.",
      intro: "The Honda PCX is our other most popular scooter alongside the Yamaha Nmax. It's a 150cc automatic known for a smooth ride and a genuinely spacious floorboard, which makes it comfortable for taller riders or anyone carrying a bag or shopping.",
      bestFor: "Best for riders who want a proven, comfortable scooter for getting around Pattaya and nearby areas, with extra legroom and a smooth, confident feel.",
      body: [
        "Honda has built a strong reputation for the PCX over years of use across Thailand, and it shows in how refined the ride feels - smooth acceleration, a comfortable seat and enough power for both city streets and longer stretches of road.",
        "Every PCX comes with a helmet and the compulsory government insurance (Po Lo Bo), covering basic medical costs. To rent it you'll need your original passport, a valid driving license and a 1000 baht cash deposit, the same as every bike in our fleet.",
        "Not sure whether the PCX or the Nmax suits you better? They're the same price and same class - our Nmax vs PCX comparison guide breaks down the real differences."
      ],
      faqs: [
        { q: "Honda PCX vs Yamaha Nmax - which should I rent?", a: "Both are 150-155cc automatics at the same price, so it often comes down to preference. Read our full Nmax vs PCX comparison guide for a side-by-side look." },
        { q: "Is the PCX easy to ride for a beginner?", a: "It's a fully automatic twist-and-go scooter, but it's a bit larger and more powerful than our Yamaha GT 125. If you're completely new to scooters, the GT 125 may be the gentler starting point." },
        { q: "Does the PCX come with insurance?", a: "Yes - every bike in our fleet, including the PCX, comes with the compulsory government insurance (Po Lo Bo), which covers basic medical costs." }
      ]
    },
    th: {
      title: "เช่ามอเตอร์ไซค์ Honda PCX พัทยา เริ่มต้น 300 บาท/วัน",
      description: "เช่า Honda PCX ในพัทยา เริ่มต้นเพียง 300 บาทต่อวัน สกู๊ตเตอร์เกียร์ออโต้ 150cc ขับนุ่มนวล พื้นวางเท้ากว้างขวาง หนึ่งในรุ่นยอดนิยมที่สุดของเรา จองออนไลน์กับ Pattaya Rent a Bike",
      h1: "เช่ามอเตอร์ไซค์ Honda PCX ในพัทยา",
      tagline: "ขับนุ่มนวล กว้างขวาง เชื่อถือได้",
      intro: "Honda PCX เป็นสกู๊ตเตอร์ยอดนิยมอีกรุ่นหนึ่งของเรา คู่กับ Yamaha Nmax เป็นเกียร์ออโต้ขนาด 150cc ที่ขึ้นชื่อเรื่องการขับขี่ที่นุ่มนวลและพื้นวางเท้าที่กว้างขวางจริงๆ ทำให้นั่งสบายสำหรับผู้ขับขี่ตัวสูงหรือผู้ที่ถือกระเป๋าหรือของซื้อของ",
      bestFor: "เหมาะสำหรับผู้ที่ต้องการสกู๊ตเตอร์ที่ได้รับความไว้วางใจและนั่งสบายสำหรับการเดินทางในพัทยาและพื้นที่ใกล้เคียง พร้อมพื้นที่วางขาที่กว้างขึ้นและความรู้สึกมั่นใจในการขับขี่",
      body: [
        "Honda สร้างชื่อเสียงที่แข็งแกร่งให้กับ PCX มาหลายปีจากการใช้งานจริงทั่วประเทศไทย และเห็นได้จากความประณีตของการขับขี่ ทั้งการเร่งที่นุ่มนวล เบาะนั่งที่สบาย และกำลังที่เพียงพอทั้งในถนนเมืองและถนนสายยาว",
        "PCX ทุกคันมาพร้อมหมวกกันน็อคและประกันภัยภาคบังคับ (พ.ร.บ.) ครอบคลุมค่ารักษาพยาบาลเบื้องต้น ในการเช่าคุณต้องใช้พาสปอร์ตตัวจริง ใบขับขี่ที่ยังไม่หมดอายุ และเงินมัดจำสด 1000 บาท เหมือนกับรถทุกคันในฝูงบินของเรา",
        "ยังไม่แน่ใจว่า PCX หรือ Nmax เหมาะกับคุณมากกว่ากัน? ทั้งสองรุ่นราคาเท่ากันและอยู่ในคลาสเดียวกัน คู่มือเปรียบเทียบ Nmax vs PCX ของเราอธิบายความแตกต่างที่สำคัญจริงๆ"
      ],
      faqs: [
        { q: "Honda PCX กับ Yamaha Nmax ควรเช่ารุ่นไหนดี?", a: "ทั้งสองรุ่นเป็นเกียร์ออโต้ขนาด 150-155cc ราคาเท่ากัน ดังนั้นมักขึ้นอยู่กับความชอบส่วนตัว อ่านคู่มือเปรียบเทียบ Nmax vs PCX ฉบับเต็มของเราเพื่อดูการเปรียบเทียบแบบเคียงข้างกัน" },
        { q: "PCX เหมาะกับมือใหม่หรือไม่?", a: "เป็นสกู๊ตเตอร์เกียร์ออโต้แบบบิดแล้วไป แต่มีขนาดใหญ่และแรงกว่า Yamaha GT 125 ของเราเล็กน้อย หากคุณไม่เคยขับสกู๊ตเตอร์มาก่อนเลย GT 125 อาจเป็นจุดเริ่มต้นที่เบากว่า" },
        { q: "PCX มีประกันภัยหรือไม่?", a: "มี รถทุกคันในฝูงบินของเรารวมถึง PCX มาพร้อมประกันภัยภาคบังคับ (พ.ร.บ.) ซึ่งครอบคลุมค่ารักษาพยาบาลเบื้องต้น" }
      ]
    }
  },

  "yamaha-aerox": {
    fleetIndex: 3,
    en: {
      title: "Yamaha Aerox Rental in Pattaya | From THB 300/Day",
      description: "Rent the Yamaha Aerox in Pattaya from THB 300/day. A sporty-styled 155cc automatic scooter with the same performance as the Nmax. Book online with Pattaya Rent a Bike.",
      h1: "Yamaha Aerox Rental in Pattaya",
      tagline: "The same great performance, with a sportier look.",
      intro: "The Yamaha Aerox shares its 155cc automatic engine, transmission and price with the Nmax - the real difference is styling. The Aerox has a sharper, sportier design, aimed at riders who want that look and riding position without giving up any performance.",
      bestFor: "Best for riders who want the same power and comfort as the Nmax, with a sportier design and riding position.",
      body: [
        "Because the Aerox and Nmax share the same engine and price, choosing between them really comes down to which style you prefer - the Aerox leans sportier and more aggressive, while the Nmax has more of a classic maxi-scooter look.",
        "Every Aerox comes with a helmet and the compulsory government insurance (Po Lo Bo), covering basic medical costs. You'll need your original passport, a valid driving license and a 1000 baht cash deposit to rent, the same as every bike in our fleet.",
        "The Aerox handles two-up riding and longer trips beyond central Pattaya just as well as the Nmax, thanks to the identical 155cc engine underneath."
      ],
      faqs: [
        { q: "What's the difference between the Aerox and the Nmax?", a: "Same engine size, same transmission, same price - the difference is purely styling and riding position. The Aerox has a sportier look; the Nmax leans toward classic maxi-scooter comfort. Pick whichever look you prefer." },
        { q: "Is the Aerox good for two people or longer rides?", a: "Yes - it shares the same 155cc engine as the Nmax, so it's just as comfortable for two-up riding and trips beyond central Pattaya." },
        { q: "What do I need to rent the Aerox?", a: "Your original passport, a valid driving license, and a 1000 baht cash deposit - the same requirement for every bike in our fleet." }
      ]
    },
    th: {
      title: "เช่ามอเตอร์ไซค์ Yamaha Aerox พัทยา เริ่มต้น 300 บาท/วัน",
      description: "เช่า Yamaha Aerox ในพัทยา เริ่มต้นเพียง 300 บาทต่อวัน สกู๊ตเตอร์เกียร์ออโต้ 155cc ทรงสปอร์ต สมรรถนะเทียบเท่า Nmax จองออนไลน์กับ Pattaya Rent a Bike",
      h1: "เช่ามอเตอร์ไซค์ Yamaha Aerox ในพัทยา",
      tagline: "สมรรถนะเดิมที่คุณมั่นใจได้ ในดีไซน์ที่สปอร์ตกว่า",
      intro: "Yamaha Aerox ใช้เครื่องยนต์ออโต้ขนาด 155cc เกียร์ และราคาเดียวกันกับ Nmax ความแตกต่างที่แท้จริงอยู่ที่ดีไซน์ Aerox มีรูปทรงที่คมและสปอร์ตกว่า เหมาะกับผู้ที่ต้องการลุคและท่านั่งขับแบบนี้โดยไม่ต้องเสียสมรรถนะใดๆ",
      bestFor: "เหมาะสำหรับผู้ที่ต้องการกำลังและความสบายเทียบเท่า Nmax แต่ในดีไซน์และท่านั่งขับที่สปอร์ตกว่า",
      body: [
        "เนื่องจาก Aerox และ Nmax ใช้เครื่องยนต์และราคาเดียวกัน การเลือกระหว่างสองรุ่นนี้จึงขึ้นอยู่กับสไตล์ที่คุณชอบจริงๆ Aerox จะเน้นความสปอร์ตและดุดันมากกว่า ในขณะที่ Nmax จะมีลุคแม็กซี่สกู๊ตเตอร์แบบคลาสสิกมากกว่า",
        "Aerox ทุกคันมาพร้อมหมวกกันน็อคและประกันภัยภาคบังคับ (พ.ร.บ.) ครอบคลุมค่ารักษาพยาบาลเบื้องต้น ในการเช่าคุณต้องใช้พาสปอร์ตตัวจริง ใบขับขี่ที่ยังไม่หมดอายุ และเงินมัดจำสด 1000 บาท เหมือนกับรถทุกคันในฝูงบินของเรา",
        "Aerox รองรับการซ้อนสองและทริประยะไกลนอกเขตพัทยากลางได้ดีเทียบเท่า Nmax เพราะใช้เครื่องยนต์ 155cc เดียวกัน"
      ],
      faqs: [
        { q: "Aerox กับ Nmax ต่างกันตรงไหน?", a: "เครื่องยนต์ขนาดเดียวกัน เกียร์เดียวกัน ราคาเดียวกัน ความแตกต่างอยู่ที่ดีไซน์และท่านั่งขับเท่านั้น Aerox มีลุคสปอร์ตกว่า ส่วน Nmax เน้นความสบายแบบแม็กซี่สกู๊ตเตอร์คลาสสิก เลือกตามสไตล์ที่คุณชอบได้เลย" },
        { q: "Aerox เหมาะกับการซ้อนสองหรือทริประยะไกลหรือไม่?", a: "เหมาะมาก เพราะใช้เครื่องยนต์ 155cc เดียวกันกับ Nmax จึงนั่งสบายสำหรับการซ้อนสองและทริปนอกเขตพัทยากลางเช่นเดียวกัน" },
        { q: "เช่า Aerox ต้องใช้อะไรบ้าง?", a: "พาสปอร์ตตัวจริง ใบขับขี่ที่ยังไม่หมดอายุ และเงินมัดจำสด 1000 บาท เหมือนกับรถทุกคันในฝูงบินของเรา" }
      ]
    }
  }
};

export const comparisonGuide = {
  slug: "nmax-vs-pcx",
  en: {
    title: "Yamaha Nmax vs Honda PCX: Which Scooter Should You Rent in Pattaya?",
    description: "Yamaha Nmax vs Honda PCX - both THB 300/day. We compare engine, comfort and styling to help you choose the right scooter to rent in Pattaya.",
    h1: "Yamaha Nmax vs Honda PCX: Which One Should You Rent?",
    intro: "The Nmax and PCX are our two most popular scooters, and for good reason - they're both comfortable, capable 150-155cc automatics at the same THB 300/day price. If you're trying to decide between them, here's an honest, practical comparison.",
    table: {
      headers: ["", "Yamaha Nmax", "Honda PCX"],
      rows: [
        ["Engine", "155cc, Automatic", "150cc, Automatic"],
        ["Daily rate", "THB 300/day", "THB 300/day"],
        ["Monthly rate", "THB 4,000/month", "THB 4,000/month"],
        ["Riding character", "Sporty, maxi-scooter comfort", "Smooth, spacious floorboard"],
        ["Best for", "Two-up riding, longer trips", "Comfort, extra legroom"]
      ]
    },
    body: [
      "On paper, there's barely anything between them - a 5cc difference in engine size that you won't notice in everyday riding, and identical daily and monthly rates. Both handle two-up riding comfortably and both have enough power for trips beyond central Pattaya, out to Jomtien or further afield.",
      "Where they differ is character. The Honda PCX has a reputation built over years of use across Thailand for a smooth, refined ride and a genuinely spacious floorboard - useful if you're taller or riding with a bag or shopping. The Yamaha Nmax leans slightly sportier in its handling and styling, with useful under-seat storage of its own.",
      "If you want a third option, our Yamaha Aerox shares the Nmax's exact engine and price but with a sharper, sportier design - worth a look if styling matters most to you. And if you're after something lighter and cheaper for solo riding around town, the Yamaha GT 125 (THB 200/day) is our most affordable option.",
      "Whichever you choose, every bike in our fleet comes with a helmet and the compulsory government insurance (Po Lo Bo). You'll need your original passport, a valid driving license and a 1000 baht cash deposit to rent, and all bikes are picked up and returned at our central Pattaya office."
    ],
    verdict: "There's no wrong choice here - if you want the smoothest, most spacious ride, go with the PCX; if you want a slightly sportier feel, go with the Nmax. In practice it often comes down to which one's available for your dates.",
    faqs: [
      { q: "Which is more fuel efficient, the Nmax or the PCX?", a: "Both are efficient 150-155cc automatics with similar real-world fuel economy for typical Pattaya riding - the difference in practice is marginal." },
      { q: "Can two adults ride on the Nmax or PCX?", a: "Yes, both are built to comfortably carry two adults, which is one reason they're our two most popular models." },
      { q: "What do I need to rent either bike?", a: "Your original passport, a valid driving license, and a 1000 baht cash deposit - the same requirement across our whole fleet." }
    ]
  },
  th: {
    title: "Yamaha Nmax vs Honda PCX: เช่าสกู๊ตเตอร์รุ่นไหนดีในพัทยา",
    description: "เปรียบเทียบ Yamaha Nmax กับ Honda PCX ราคา 300 บาทต่อวันเท่ากัน ทั้งเครื่องยนต์ ความสบาย และดีไซน์ ช่วยให้คุณเลือกเช่าสกู๊ตเตอร์ที่ใช่ในพัทยา",
    h1: "Yamaha Nmax vs Honda PCX: เลือกเช่ารุ่นไหนดี?",
    intro: "Nmax และ PCX เป็นสกู๊ตเตอร์ยอดนิยมที่สุดสองรุ่นของเรา ด้วยเหตุผลที่ดี ทั้งคู่เป็นเกียร์ออโต้ขนาด 150-155cc ที่นั่งสบายและมีสมรรถนะดี ในราคา 300 บาทต่อวันเท่ากัน หากคุณกำลังตัดสินใจระหว่างสองรุ่นนี้ นี่คือการเปรียบเทียบที่ตรงไปตรงมาและใช้งานได้จริง",
    table: {
      headers: ["", "Yamaha Nmax", "Honda PCX"],
      rows: [
        ["เครื่องยนต์", "155cc เกียร์ออโต้", "150cc เกียร์ออโต้"],
        ["ราคาต่อวัน", "300 บาท/วัน", "300 บาท/วัน"],
        ["ราคาต่อเดือน", "4,000 บาท/เดือน", "4,000 บาท/เดือน"],
        ["บุคลิกการขับขี่", "สปอร์ต สบายแบบแม็กซี่สกู๊ตเตอร์", "นุ่มนวล พื้นวางเท้ากว้างขวาง"],
        ["เหมาะกับ", "ซ้อนสอง ทริประยะไกล", "ความสบาย พื้นที่วางขาเพิ่มเติม"]
      ]
    },
    body: [
      "ในทางทฤษฎีแทบไม่มีความแตกต่างระหว่างสองรุ่นนี้เลย เครื่องยนต์ต่างกันเพียง 5cc ซึ่งคุณแทบไม่รู้สึกได้ในการขับขี่ประจำวัน และราคาต่อวันกับต่อเดือนก็เท่ากันทุกประการ ทั้งสองรุ่นซ้อนสองได้สบายและมีกำลังเพียงพอสำหรับทริปนอกเขตพัทยากลาง ไม่ว่าจะเป็นจอมเทียนหรือไกลกว่านั้น",
      "ความแตกต่างที่แท้จริงอยู่ที่บุคลิก Honda PCX สร้างชื่อเสียงมาหลายปีจากการใช้งานจริงทั่วประเทศไทยในเรื่องการขับขี่ที่นุ่มนวลและพื้นวางเท้าที่กว้างขวางจริงๆ ซึ่งมีประโยชน์หากคุณตัวสูงหรือขับพร้อมกระเป๋าหรือของซื้อของ ส่วน Yamaha Nmax จะเน้นความสปอร์ตในการควบคุมและดีไซน์มากกว่าเล็กน้อย พร้อมช่องเก็บของใต้เบาะที่มีประโยชน์เช่นกัน",
      "หากต้องการตัวเลือกที่สาม Yamaha Aerox ของเราใช้เครื่องยนต์และราคาเดียวกันกับ Nmax แต่มาในดีไซน์ที่คมและสปอร์ตกว่า น่าสนใจหากดีไซน์เป็นเรื่องสำคัญที่สุดสำหรับคุณ และหากต้องการรถที่เบากว่าและราคาประหยัดกว่าสำหรับขับคนเดียวในเมือง Yamaha GT 125 (200 บาท/วัน) คือตัวเลือกที่คุ้มค่าที่สุดของเรา",
      "ไม่ว่าคุณจะเลือกรุ่นไหน รถทุกคันในฝูงบินของเรามาพร้อมหมวกกันน็อคและประกันภัยภาคบังคับ (พ.ร.บ.) ในการเช่าคุณต้องใช้พาสปอร์ตตัวจริง ใบขับขี่ที่ยังไม่หมดอายุ และเงินมัดจำสด 1000 บาท และรถทุกคันรับและคืนที่สำนักงานของเราในพัทยากลาง"
    ],
    verdict: "ไม่มีตัวเลือกไหนผิด หากต้องการการขับขี่ที่นุ่มนวลและกว้างขวางที่สุด เลือก PCX หากต้องการความรู้สึกสปอร์ตขึ้นอีกนิด เลือก Nmax ในทางปฏิบัติมักขึ้นอยู่กับว่ารุ่นไหนว่างในวันที่คุณต้องการ",
    faqs: [
      { q: "Nmax หรือ PCX ประหยัดน้ำมันกว่ากัน?", a: "ทั้งสองรุ่นเป็นเกียร์ออโต้ขนาด 150-155cc ที่ประหยัดน้ำมันใกล้เคียงกันในการขับขี่จริงในพัทยา ความแตกต่างในทางปฏิบัติมีเพียงเล็กน้อย" },
      { q: "Nmax หรือ PCX ซ้อนสองผู้ใหญ่ได้หรือไม่?", a: "ได้ ทั้งสองรุ่นออกแบบมาให้นั่งสบายสำหรับผู้ใหญ่สองคน ซึ่งเป็นหนึ่งในเหตุผลที่ทั้งคู่เป็นรุ่นยอดนิยมที่สุดของเรา" },
      { q: "เช่ารถทั้งสองรุ่นต้องใช้อะไรบ้าง?", a: "พาสปอร์ตตัวจริง ใบขับขี่ที่ยังไม่หมดอายุ และเงินมัดจำสด 1000 บาท เหมือนกับรถทุกคันในฝูงบินของเรา" }
    ]
  }
};

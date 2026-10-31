// Area landing pages (rendered by article.ejs with the instant-price card).
// Same shape as jomtienPage in guides.js. Facts must match site.js and the FAQs:
// Pratumnak office pickup only (no delivery), passport shown not kept, licence,
// 1,000 THB cash deposit, Po Lo Bo insurance, two helmets, open 9am - 5pm daily.
// No prices here: they come from the pricing engine (quote card, /prices/).

const DOCS_FAQ = {
  q: "What do I need to rent a scooter?",
  a: "Your original passport and a valid driving licence to show at pickup, plus a 1,000 baht cash deposit refunded on return. We don't keep your passport.",
};
const INSURANCE_FAQ = {
  q: "Is insurance included?",
  a: "Every bike comes with the compulsory government insurance (Po Lo Bo), which covers basic medical costs. It doesn't cover damage to the bike, so we recommend travel insurance that covers motorbike riding.",
};
const BIKES_LIST = (gt, big, aerox) => [
  `Yamaha GT 125 - ${gt}`,
  `Yamaha Nmax and Honda PCX - ${big}`,
  `Yamaha Aerox - ${aerox}`,
];
const LICENCE_TIP =
  "Make sure your licence covers motorcycles and always wear a helmet - Pattaya police run regular roadside checkpoints. Our motorbike licence guide explains what you need.";

export const areaPages = [
  {
    slug: "pratumnak",
    path: "/motorbike-rental-pratumnak/",
    title: "Motorbike & Scooter Rental Pratumnak | Walk-in Office",
    description:
      "Scooter rental on Pratumnak Hill, from our own Pratumnak office. Yamaha and Honda automatics, two helmets and Po Lo Bo insurance included, passport not kept.",
    eyebrow: "Pratumnak",
    breadcrumb: "Motorbike rental Pratumnak",
    h1: "Motorbike & Scooter Rental on Pratumnak",
    intro:
      "Our office is on Pratumnak, so if you're staying on the hill you're already in the right place. Pick up a scooter close to your condo or hotel and you're minutes from both Pattaya and Jomtien.",
    sections: [
      {
        h2: "Why a scooter makes sense on Pratumnak",
        paras: [
          "Pratumnak is quieter and greener than the rest of Pattaya, which is why so many long-stay visitors choose it. The trade-off is that it's hilly and baht buses don't run up and down every soi, so getting to the shops, the beach or a restaurant in town usually means waiting for a Bolt or Grab.",
          "A scooter fixes that. Central Pattaya is just over the hill to the north, Jomtien Beach is down Thappraya Road to the south, and Cosy Beach is at the bottom of the hill.",
        ],
      },
      {
        h2: "Picking up from our office",
        paras: [
          "Because we're on Pratumnak, most guests staying on the hill can reach us with a short walk or a quick ride. We don't deliver bikes, so all rentals are collected and returned at the office.",
          "Bring your original passport and a valid driving licence to show us, plus the 1,000 baht cash deposit. We don't keep your passport. We'll check the bike over with you, adjust the mirrors and seat, and you'll ride away with two helmets and the compulsory government insurance (Po Lo Bo) included.",
          "We're open 9am - 5pm every day, including weekends and public holidays.",
        ],
      },
      {
        h2: "Which bike suits Pratumnak",
        list: BIKES_LIST(
          "light and easy to handle on the hill roads and in tight condo car parks. A good first scooter in Thailand.",
          "more power for the climbs and more comfortable for two people. Our most popular choice with long-stay riders on the hill.",
          "155cc like the Nmax, with sportier styling."
        ),
      },
      {
        h2: "Where to ride from Pratumnak",
        list: [
          "Wat Phra Yai (Big Buddha) - the golden Buddha on top of the hill, a few minutes away.",
          "Pattaya viewpoint - the classic view over Pattaya Bay, also on the hill.",
          "Cosy Beach - a small beach at the foot of Pratumnak.",
          "Jomtien Beach - south along Thappraya Road.",
          "Walking Street and South Pattaya - just over the hill to the north.",
        ],
      },
      {
        h2: "Riding tips for Pratumnak",
        paras: [
          "The hill roads are steep in places and some sois are narrow, so take corners slowly and use the rear brake gently on the way down. Thappraya Road gets busy in the evening, especially near the Jomtien end.",
          LICENCE_TIP,
        ],
      },
    ],
    ctaHeading: "Staying on Pratumnak?",
    ctaText: "Message us with your dates and we'll confirm which bikes are available before you walk over.",
    faqs: [
      { q: "Where is your office?", a: "Our office is on Pratumnak, the hill between Pattaya and Jomtien: 359/119 Moo 12 Nongprue. Use the Get directions link on our homepage to open it in Google Maps." },
      { q: "Do you deliver scooters on Pratumnak?", a: "No - we don't offer delivery. All bikes are collected and returned at our Pratumnak office, which is close to most condos and hotels on the hill." },
      DOCS_FAQ,
      { q: "Can I rent a scooter by the month?", a: "Yes. Monthly rentals are available across our fleet, subject to availability, at a lower rate than paying daily. WhatsApp or call us for current monthly pricing." },
      INSURANCE_FAQ,
    ],
    nearby: ["jomtien", "south-pattaya", "central-pattaya"],
  },
  {
    slug: "central-pattaya",
    path: "/motorbike-rental-central-pattaya/",
    title: "Motorbike & Scooter Rental Central Pattaya | Beach Road",
    description:
      "Staying near Beach Road or Second Road? Rent a Yamaha or Honda scooter from our Pratumnak office, just south of Central Pattaya. Helmets and Po Lo Bo included.",
    eyebrow: "Central Pattaya",
    breadcrumb: "Motorbike rental Central Pattaya",
    h1: "Motorbike & Scooter Rental for Central Pattaya",
    intro:
      "Central Pattaya is where most visitors stay: Beach Road, Second Road, Soi Buakhao and everything in between. Our office is just south of the centre on Pratumnak, so picking up a scooter is a short trip.",
    sections: [
      {
        h2: "Why a scooter makes sense in Central Pattaya",
        paras: [
          "Baht buses loop Beach Road and Second Road all day, which works well if you're only going up and down the seafront. The moment you want Soi Buakhao, the shopping centres on Sukhumvit, Jomtien or anywhere out of town, you're changing buses or paying for a ride.",
          "With a scooter you go straight there, park close to the door and leave when you want. That's why so many people staying in the centre rent one for a week or a month.",
        ],
      },
      {
        h2: "Picking up from our Pratumnak office",
        paras: [
          "We don't deliver bikes, so all rentals are collected and returned at our Pratumnak office. From Central Pattaya it's a short Bolt or Grab ride south over the hill.",
          "Bring your original passport and a valid driving licence to show us, plus the 1,000 baht cash deposit. We don't keep your passport. You'll ride away with two helmets and the compulsory government insurance (Po Lo Bo) included.",
          "We're open 9am - 5pm every day, including weekends and public holidays.",
        ],
      },
      {
        h2: "Which bike suits Central Pattaya",
        list: BIKES_LIST(
          "small and easy to park on busy sois and outside shops. Ideal if you're riding solo around town.",
          "more comfortable for two and for rides out to Jomtien, Naklua or beyond.",
          "155cc with sporty styling, if you want something with more presence."
        ),
      },
      {
        h2: "Where to ride from Central Pattaya",
        list: [
          "Central Pattaya mall and Beach Road - shopping, food and the seafront.",
          "Soi Buakhao - markets, bars and local restaurants.",
          "Pratumnak Hill - the Big Buddha and the viewpoint over Pattaya Bay.",
          "Jomtien Beach - a longer, quieter beach south over the hill.",
          "Naklua and the Sanctuary of Truth - to the north along the coast.",
        ],
      },
      {
        h2: "Riding tips for Central Pattaya",
        paras: [
          "Beach Road is one-way southbound and Second Road is one-way northbound, so plan your loop before you set off. Baht buses stop suddenly to pick up passengers: leave space and don't pass them on the inside.",
          LICENCE_TIP,
        ],
      },
    ],
    ctaHeading: "Staying in Central Pattaya?",
    ctaText: "Message us with your dates and we'll confirm which bikes are available before you head over.",
    faqs: [
      { q: "Do you deliver scooters to hotels in Central Pattaya?", a: "No - we don't offer delivery. All bikes are collected and returned at our Pratumnak office, a short Bolt or Grab ride south of Central Pattaya." },
      { q: "Is it easy to ride in Central Pattaya?", a: "The main roads are busy but slow-moving. Beach Road and Second Road are both one-way, so it's simpler than it looks once you know the loop." },
      DOCS_FAQ,
      { q: "Can I rent a scooter by the month?", a: "Yes. Monthly rentals are available across our fleet, subject to availability, at a lower rate than paying daily. WhatsApp or call us for current monthly pricing." },
      INSURANCE_FAQ,
    ],
    nearby: ["south-pattaya", "north-pattaya", "pratumnak"],
  },
  {
    slug: "north-pattaya",
    path: "/motorbike-rental-north-pattaya/",
    title: "Motorbike & Scooter Rental North Pattaya | Terminal 21 Area",
    description:
      "Scooter rental for North Pattaya and the Terminal 21 area. Yamaha and Honda automatics from our Pratumnak office, helmets and Po Lo Bo insurance included.",
    eyebrow: "North Pattaya",
    breadcrumb: "Motorbike rental North Pattaya",
    h1: "Motorbike & Scooter Rental for North Pattaya",
    intro:
      "North Pattaya runs from the Dolphin roundabout and Terminal 21 out towards Sukhumvit Road. It's well placed for shopping and the bus to Bangkok, but spread out enough that a scooter makes daily life much easier.",
    sections: [
      {
        h2: "Why a scooter makes sense in North Pattaya",
        paras: [
          "North Pattaya Road is wide and busy, and many hotels and condos sit back from the beach on side streets that baht buses don't serve. Getting to the beach, to Naklua for seafood or across to Sukhumvit usually means a ride each way.",
          "A scooter turns those into five-minute trips, and on a weekly or monthly rental it costs less than paying for rides every day.",
        ],
      },
      {
        h2: "Picking up from our Pratumnak office",
        paras: [
          "We don't deliver bikes, so all rentals are collected and returned at our Pratumnak office, south of the city centre. From North Pattaya it's a Bolt or Grab ride down through town.",
          "Bring your original passport and a valid driving licence to show us, plus the 1,000 baht cash deposit. We don't keep your passport. You'll ride away with two helmets and the compulsory government insurance (Po Lo Bo) included.",
          "We're open 9am - 5pm every day, including weekends and public holidays.",
        ],
      },
      {
        h2: "Which bike suits North Pattaya",
        list: BIKES_LIST(
          "fine for short runs to Terminal 21, the beach and the shops.",
          "a better fit here: more comfortable on the wider, faster roads and for the ride back from Pratumnak or out to Sukhumvit.",
          "155cc and sporty, with the same power as the Nmax."
        ),
      },
      {
        h2: "Where to ride from North Pattaya",
        list: [
          "Terminal 21 Pattaya - shopping and food at the Dolphin roundabout.",
          "Naklua and Wongamat Beach - just to the north.",
          "The Sanctuary of Truth - the huge carved-wood temple on the coast in Naklua.",
          "Beach Road and Central Pattaya - straight down the seafront.",
        ],
      },
      {
        h2: "Riding tips for North Pattaya",
        paras: [
          "North Pattaya Road and the Dolphin roundabout carry a lot of traffic, including buses heading to and from the Bangkok bus station. Keep left, use your mirrors and take the roundabout slowly.",
          LICENCE_TIP,
        ],
      },
    ],
    ctaHeading: "Staying in North Pattaya?",
    ctaText: "Message us with your dates and we'll confirm which bikes are available before you head over.",
    faqs: [
      { q: "Do you deliver scooters to North Pattaya?", a: "No - we don't offer delivery. All bikes are collected and returned at our Pratumnak office, south of the city centre." },
      { q: "Is a 125cc enough for North Pattaya?", a: "For short trips around town, yes. If you'll ride two-up or use the bigger roads a lot, the 155cc Nmax or 150cc PCX is more comfortable." },
      DOCS_FAQ,
      { q: "Can I rent a scooter by the month?", a: "Yes. Monthly rentals are available across our fleet, subject to availability, at a lower rate than paying daily. WhatsApp or call us for current monthly pricing." },
      INSURANCE_FAQ,
    ],
    nearby: ["naklua-wongamat", "central-pattaya", "pratumnak"],
  },
  {
    slug: "south-pattaya",
    path: "/motorbike-rental-south-pattaya/",
    title: "Motorbike & Scooter Rental South Pattaya | Walking Street",
    description:
      "Staying near Walking Street or Bali Hai Pier? Rent a scooter from our Pratumnak office, just over the hill from South Pattaya. Helmets and Po Lo Bo included.",
    eyebrow: "South Pattaya",
    breadcrumb: "Motorbike rental South Pattaya",
    h1: "Motorbike & Scooter Rental for South Pattaya",
    intro:
      "South Pattaya covers Walking Street, Bali Hai Pier and the streets around South Pattaya Road and Thepprasit Road. It's the closest part of the city to our Pratumnak office, just over the hill.",
    sections: [
      {
        h2: "Why a scooter makes sense in South Pattaya",
        paras: [
          "South Pattaya is lively at night and busy by day, and a lot of what you'll want to see is a short ride away rather than a short walk: the viewpoint and Big Buddha on Pratumnak, Jomtien Beach, the markets on Thepprasit Road.",
          "A scooter also makes early ferries to Koh Larn from Bali Hai Pier easier when you're staying a few sois back from the seafront.",
        ],
      },
      {
        h2: "Picking up from our Pratumnak office",
        paras: [
          "We don't deliver bikes, so all rentals are collected and returned at our Pratumnak office, a short ride from South Pattaya.",
          "Bring your original passport and a valid driving licence to show us, plus the 1,000 baht cash deposit. We don't keep your passport. You'll ride away with two helmets and the compulsory government insurance (Po Lo Bo) included.",
          "We're open 9am - 5pm every day, including weekends and public holidays.",
        ],
      },
      {
        h2: "Which bike suits South Pattaya",
        list: BIKES_LIST(
          "small, light and easy to park in the busy sois around Walking Street.",
          "more comfortable for two and for rides to Jomtien or further south.",
          "155cc with sporty styling."
        ),
      },
      {
        h2: "Where to ride from South Pattaya",
        list: [
          "Pattaya viewpoint and Wat Phra Yai - up the hill on Pratumnak.",
          "Bali Hai Pier - ferries to Koh Larn.",
          "Thepprasit Road - the weekend night market and plenty of local food.",
          "Jomtien Beach - over the hill to the south.",
        ],
      },
      {
        h2: "Riding tips for South Pattaya",
        paras: [
          "Walking Street closes to traffic in the evening, so park before you get there and walk in. The roads around it are crowded with pedestrians at night: ride slowly and expect people to step out.",
          LICENCE_TIP,
        ],
      },
    ],
    ctaHeading: "Staying in South Pattaya?",
    ctaText: "Message us with your dates and we'll confirm which bikes are available before you head over.",
    faqs: [
      { q: "How far is your office from Walking Street?", a: "Our office is on Pratumnak, the hill just south of Walking Street, so it's a short ride away." },
      { q: "Do you deliver scooters to South Pattaya?", a: "No - we don't offer delivery. All bikes are collected and returned at our Pratumnak office." },
      DOCS_FAQ,
      { q: "Can I ride on Walking Street?", a: "Walking Street closes to vehicles in the evening. Park nearby and walk in." },
      INSURANCE_FAQ,
    ],
    nearby: ["pratumnak", "central-pattaya", "jomtien"],
  },
  {
    slug: "naklua-wongamat",
    path: "/motorbike-rental-naklua-wongamat/",
    title: "Motorbike & Scooter Rental Naklua & Wongamat | Pattaya",
    description:
      "Scooter rental for Naklua and Wongamat Beach. Yamaha and Honda automatics from our Pratumnak office, monthly rentals available, helmets and Po Lo Bo included.",
    eyebrow: "Naklua & Wongamat",
    breadcrumb: "Motorbike rental Naklua & Wongamat",
    h1: "Motorbike & Scooter Rental for Naklua & Wongamat",
    intro:
      "Naklua and Wongamat sit at the quiet northern end of Pattaya: beachfront condo towers, the Sanctuary of Truth and the seafood market in old Naklua. Most people here stay for weeks, not days, which is exactly when a scooter pays off.",
    sections: [
      {
        h2: "Why a scooter makes sense in Naklua and Wongamat",
        paras: [
          "Naklua is a long way from the action in Central Pattaya, and baht buses are less frequent up here. Without your own transport, every trip to the shops, Beach Road or a restaurant in town means booking a ride.",
          "That's why so many long-stay guests in the Wongamat condos rent by the month: one bike for the whole stay, a lower rate than paying daily, and the freedom to come and go.",
        ],
      },
      {
        h2: "Picking up from our Pratumnak office",
        paras: [
          "We don't deliver bikes, so all rentals are collected and returned at our Pratumnak office, at the southern end of the city. From Naklua it's a Bolt or Grab ride through town, so it's worth booking for a week or more.",
          "Bring your original passport and a valid driving licence to show us, plus the 1,000 baht cash deposit. We don't keep your passport. You'll ride away with two helmets and the compulsory government insurance (Po Lo Bo) included.",
          "We're open 9am - 5pm every day, including weekends and public holidays.",
        ],
      },
      {
        h2: "Which bike suits Naklua and Wongamat",
        list: BIKES_LIST(
          "fine for local trips around Naklua and to the beach.",
          "the better choice for the ride back from Pratumnak and for regular trips into town, especially with a passenger.",
          "155cc and sporty, with the same power as the Nmax."
        ),
      },
      {
        h2: "Where to ride from Naklua and Wongamat",
        list: [
          "The Sanctuary of Truth - the carved-wood temple on the Naklua coast.",
          "Wongamat Beach - quieter than Pattaya Beach, right by the condo towers.",
          "Naklua seafood market - fresh seafood in old Naklua.",
          "Terminal 21 Pattaya - shopping at the Dolphin roundabout, just south.",
        ],
      },
      {
        h2: "Riding tips for Naklua and Wongamat",
        paras: [
          "Naklua Road is narrow and busy in places, with parked cars and market stalls. Ride slowly, watch for doors opening, and check with your condo where scooters can be parked.",
          LICENCE_TIP,
        ],
      },
    ],
    ctaHeading: "Staying in Naklua or Wongamat?",
    ctaText: "Message us with your dates and we'll confirm which bikes are available before you make the trip.",
    faqs: [
      { q: "Do you deliver scooters to Wongamat condos?", a: "No - we don't offer delivery. All bikes are collected and returned at our Pratumnak office, a Bolt or Grab ride from Naklua." },
      { q: "Can I rent a scooter by the month while staying in Wongamat?", a: "Yes. Monthly rentals are available across our fleet, subject to availability, at a lower rate than paying daily. WhatsApp or call us for current monthly pricing." },
      DOCS_FAQ,
      INSURANCE_FAQ,
    ],
    nearby: ["north-pattaya", "central-pattaya", "pratumnak"],
  },
  {
    slug: "na-jomtien",
    path: "/motorbike-rental-na-jomtien/",
    title: "Motorbike & Scooter Rental Na Jomtien | Pattaya",
    description:
      "Scooter rental for Na Jomtien. Yamaha and Honda automatics from our Pratumnak office for beaches, Khao Chi Chan and Nong Nooch. Helmets and Po Lo Bo included.",
    eyebrow: "Na Jomtien",
    breadcrumb: "Motorbike rental Na Jomtien",
    h1: "Motorbike & Scooter Rental for Na Jomtien",
    intro:
      "Na Jomtien stretches south from Jomtien along the coast and Sukhumvit Road: quieter beaches, resorts and condos with more space between them. Out here, your own transport isn't a nice extra, it's how you get around.",
    sections: [
      {
        h2: "Why a scooter makes sense in Na Jomtien",
        paras: [
          "Baht bus routes thin out south of Jomtien, and places are far apart. A trip to a supermarket, a beach restaurant or into Pattaya can mean a long wait or an expensive ride.",
          "A scooter makes Na Jomtien feel connected: Jomtien Beach to the north, and attractions like Khao Chi Chan and Nong Nooch within easy reach.",
        ],
      },
      {
        h2: "Picking up from our Pratumnak office",
        paras: [
          "We don't deliver bikes, so all rentals are collected and returned at our Pratumnak office, north of Jomtien. From Na Jomtien it's a Bolt or Grab ride up the coast, so a weekly or monthly rental makes the trip worthwhile.",
          "Bring your original passport and a valid driving licence to show us, plus the 1,000 baht cash deposit. We don't keep your passport. You'll ride away with two helmets and the compulsory government insurance (Po Lo Bo) included.",
          "We're open 9am - 5pm every day, including weekends and public holidays.",
        ],
      },
      {
        h2: "Which bike suits Na Jomtien",
        list: BIKES_LIST(
          "OK for local trips, but you'll feel the distances.",
          "our recommendation for Na Jomtien: more comfortable on longer rides and with a passenger.",
          "155cc like the Nmax, with sportier styling."
        ),
      },
      {
        h2: "Where to ride from Na Jomtien",
        list: [
          "Na Jomtien beaches - quieter stretches of sand south of Jomtien.",
          "Khao Chi Chan - the giant Buddha image carved into the cliff, inland.",
          "Nong Nooch Tropical Garden - further south off Sukhumvit Road.",
          "Bang Saray - the fishing village and seafood restaurants further down the coast.",
          "Jomtien Beach - back up the coast to the north.",
        ],
      },
      {
        h2: "Riding tips for Na Jomtien",
        paras: [
          "Sukhumvit Road is a fast highway with trucks and buses. Stay in the left lane, keep your speed sensible and use the coast roads where you can. Fill up before longer rides: petrol stations are further apart than in town.",
          LICENCE_TIP,
        ],
      },
    ],
    ctaHeading: "Staying in Na Jomtien?",
    ctaText: "Message us with your dates and we'll confirm which bikes are available before you make the trip.",
    faqs: [
      { q: "Do you deliver scooters to Na Jomtien?", a: "No - we don't offer delivery. All bikes are collected and returned at our Pratumnak office, north of Jomtien." },
      { q: "Which scooter is best for Na Jomtien?", a: "The Yamaha Nmax or Honda PCX. Distances are longer here, and the extra comfort and power help, especially with two people." },
      DOCS_FAQ,
      { q: "Can I rent a scooter by the month?", a: "Yes. Monthly rentals are available across our fleet, subject to availability, at a lower rate than paying daily. WhatsApp or call us for current monthly pricing." },
      INSURANCE_FAQ,
    ],
    nearby: ["jomtien", "bang-saray", "pratumnak"],
  },
  {
    slug: "bang-saray",
    path: "/motorbike-rental-bang-saray/",
    title: "Motorbike & Scooter Rental Bang Saray | Pattaya",
    description:
      "Heading to Bang Saray? Rent a Yamaha Nmax or Honda PCX from our Pratumnak office for the coast ride south. Weekly and monthly rentals, helmets and Po Lo Bo included.",
    eyebrow: "Bang Saray",
    breadcrumb: "Motorbike rental Bang Saray",
    h1: "Motorbike & Scooter Rental for Bang Saray",
    intro:
      "Bang Saray is a fishing village south of Pattaya, known for seafood restaurants on the water and a slower pace. If you're staying there, or riding down for the day, here's how renting from us works.",
    sections: [
      {
        h2: "Why a scooter makes sense in Bang Saray",
        paras: [
          "Bang Saray is small, but it's a long way from Pattaya, and public transport is limited. Without your own wheels you're relying on taxis for every trip into town or to the beaches along the way.",
          "Plenty of riders also come the other way: they stay in Pattaya or Jomtien and ride down to Bang Saray for lunch by the sea. It's one of the best half-day rides from the city.",
        ],
      },
      {
        h2: "Picking up from our Pratumnak office",
        paras: [
          "We don't deliver bikes, so all rentals are collected and returned at our Pratumnak office in Pattaya. If you're based in Bang Saray, that's a taxi or Bolt ride up, so we'd suggest a weekly or monthly rental to make the trip worthwhile.",
          "Bring your original passport and a valid driving licence to show us, plus the 1,000 baht cash deposit. We don't keep your passport. You'll ride away with two helmets and the compulsory government insurance (Po Lo Bo) included.",
          "We're open 9am - 5pm every day, including weekends and public holidays.",
        ],
      },
      {
        h2: "Which bike suits Bang Saray",
        list: BIKES_LIST(
          "not our pick for Bang Saray: it's the long ride on Sukhumvit Road that matters here.",
          "the right choice: comfortable and stable on the highway, with power for two.",
          "155cc like the Nmax, if you prefer a sportier ride."
        ),
      },
      {
        h2: "Where to ride around Bang Saray",
        list: [
          "Bang Saray seafood restaurants - on the water in the village.",
          "Nong Nooch Tropical Garden - on the way between Pattaya and Bang Saray.",
          "Na Jomtien beaches - quieter stops on the ride back north.",
          "Khao Chi Chan - the cliff-carved Buddha image, a short detour inland.",
        ],
      },
      {
        h2: "Riding tips for Bang Saray",
        paras: [
          "Most of the ride is on Sukhumvit Road, a fast highway with trucks and buses. Stay in the left lane, take breaks, and avoid riding back after dark if you're not used to Thai roads.",
          LICENCE_TIP,
        ],
      },
    ],
    ctaHeading: "Staying in Bang Saray?",
    ctaText: "Message us with your dates and we'll confirm which bikes are available before you make the trip.",
    faqs: [
      { q: "Do you deliver scooters to Bang Saray?", a: "No - we don't offer delivery. All bikes are collected and returned at our Pratumnak office in Pattaya." },
      { q: "Can I ride from Pattaya to Bang Saray on a scooter?", a: "Yes. It's a popular half-day ride south, mostly on Sukhumvit Road. We recommend the Yamaha Nmax or Honda PCX for the highway." },
      DOCS_FAQ,
      { q: "Can I rent a scooter by the month?", a: "Yes. Monthly rentals are available across our fleet, subject to availability, at a lower rate than paying daily. WhatsApp or call us for current monthly pricing." },
      INSURANCE_FAQ,
    ],
    nearby: ["na-jomtien", "jomtien", "pratumnak"],
  },
];

/* ============================================================
   UNI MERCHANT STORE — Main JavaScript
   ============================================================ */

/* ── Product Data ── */
const PRODUCTS = [
  /* ── Bathroom ── */
  {
    id: 1,
    itemNo: "061",
    name: "Free Standing White Toilet Roll Holder Cabinet",
    vendor: "Uni Merchant",
    slug: "white-toilet-roll-holder-cabinet",
    price: 19,
    originalPrice: null,
    badge: "new",
    rating: 4.7,
    reviews: 86,
    category: "bathroom",
    variant: "White",
    image: "assets/images/061/1.jpeg",
    images: ["assets/images/061/1.jpeg","assets/images/061/2.jpeg","assets/images/061/3.jpeg","assets/images/061/4.jpeg","assets/images/061/5.jpeg"],
    description: "Contemporary white toilet roll cabinet with a roll holder at the top and a slimline storage cupboard below. Hardwearing composite wood with white-painted finish, curved side panels and a silver-coloured door handle. Holds up to 4 rolls plus other bathroom essentials.",
    specs: { "Dimensions": "H79 × W18 × D20 cm", "Material": "Composite Wood", "Finish": "White Painted", "Capacity": "4+ toilet rolls", "Assembly": "Simple self-assembly" },
    features: ["Roll holder at top — perfect tear-off height", "Push-in design for easy roll replacement", "Slimline cupboard with adjustable shelf", "Curved panels and silver door handle", "All fixings and instructions included"]
  },
  {
    id: 2,
    itemNo: "309",
    name: "Free Standing Grey Toilet Paper Roll Holder with Shelf",
    vendor: "Uni Merchant",
    slug: "grey-toilet-roll-holder-shelf",
    price: 19,
    originalPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 63,
    category: "bathroom",
    variant: "Grey",
    image: "assets/images/309/1.jpeg",
    images: ["assets/images/309/1.jpeg","assets/images/309/2.jpeg","assets/images/309/3.jpeg","assets/images/309/4.jpeg"],
    description: "Practical free-standing grey toilet paper holder and storage dispenser. Compact size fits perfectly in tight bathroom corners. Anti-corrosive MDF construction with a smooth finish — great for guest bathrooms, half baths and small spaces.",
    specs: { "Dimensions": "W18 × D20 × H79.5 cm", "Material": "Anti-Corrosive MDF", "Finish": "Grey", "Capacity": "1 roll + 2 extra", "Assembly": "Easy self-assembly" },
    features: ["Dispenses 1 roll, stores 2+ extra", "Top shelf for phone or accessories", "Compact — fits neatly in toilet corners", "Anti-corrosive wear-resistant MDF", "Easy to move anywhere in the bathroom"]
  },
  {
    id: 6,
    itemNo: "021",
    name: "White Bathroom Mirror & Cosmetic Shelf — 40cm",
    vendor: "Uni Merchant",
    slug: "white-bathroom-mirror-shelf",
    price: 17,
    originalPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 94,
    category: "bathroom",
    variant: "White",
    image: "assets/images/021/1.jpeg",
    images: ["assets/images/021/1.jpeg","assets/images/021/2.jpeg","assets/images/021/3.jpeg","assets/images/021/4.jpeg"],
    description: "Stylish and practical white rectangular wall mirror with a cosmetic shelf below. Moisture-resistant P2 compliant MDF with non-toxic water-resistant paint. Hangs in bathroom, hallway, bedroom or home office to brighten any area of the home.",
    specs: { "Dimensions": "W40 × D13 × H42.5 cm", "Material": "P2 Compliant MDF", "Finish": "White", "Shape": "Rectangular", "Mounting": "Wall Mount" },
    features: ["Clear mirror for make-up and grooming", "Shelf for toiletries, ornaments and plants", "Moisture-resistant formaldehyde-free MDF", "Wipe clean with a damp cloth", "Easy wall mounting — all fixings included"]
  },
  {
    id: 7,
    itemNo: "105",
    name: "White Slimline Bathroom Storage Cabinet — 4 Drawer",
    vendor: "Uni Merchant",
    slug: "white-slimline-bathroom-cabinet-4-drawer",
    price: 38,
    originalPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 128,
    category: "bathroom",
    variant: "White",
    image: "assets/images/105/1.jpeg",
    images: ["assets/images/105/1.jpeg","assets/images/105/2.jpeg","assets/images/105/3.jpeg","assets/images/105/4.jpeg"],
    description: "Slim white 4-drawer bathroom storage cabinet delivered fully assembled and ready to use. Fits into almost any room — bathroom, bedroom, kitchen or living room. Anti-corrosive, wear-resistant MDF with a smooth surface that's easy to wipe clean.",
    specs: { "Dimensions": "24D × 17W × 66H cm", "Material": "Engineered Wood (MDF)", "Finish": "White", "Drawers": "4", "Assembly": "Fully Assembled" },
    features: ["4 separate drawers for organised storage", "Fully assembled — ready to use straight away", "Anti-corrosive wear-resistant MDF", "Slim profile fits any small space", "Multi-purpose — bathroom, bedroom or kitchen"]
  },
  {
    id: 20,
    itemNo: "059",
    name: "White Under Sink Bathroom Storage Cabinet",
    vendor: "Uni Merchant",
    slug: "white-under-sink-bathroom-cabinet",
    price: 28,
    originalPrice: null,
    badge: "new",
    rating: 4.6,
    reviews: 57,
    category: "bathroom",
    variant: "White",
    image: "assets/images/059/1.jpeg",
    images: ["assets/images/059/1.jpeg","assets/images/059/2.jpeg","assets/images/059/3.jpeg","assets/images/059/4.jpeg"],
    description: "Elegant white under-sink bathroom storage cabinet with 2 shaker-style doors, magnetic lock and internal adjustable shelf. Smooth MDF with white paint finish. Fits perfectly below a single bowl sink and is easy to assemble.",
    specs: { "Dimensions": "30D × 60W × 60H cm", "Material": "MDF", "Finish": "White", "Doors": "2 with magnetic lock", "Assembly": "Flat Pack" },
    features: ["2 shaker-style doors with magnetic lock", "Internal adjustable shelf", "Fits below a single bowl sink", "Smooth MDF — easy to wipe clean", "All mounting hardware included"]
  },
  {
    id: 21,
    itemNo: "104",
    name: "White Multi-Purpose Bathroom Organiser with Lid",
    vendor: "Uni Merchant",
    slug: "white-bathroom-organiser-lid",
    price: 15,
    originalPrice: null,
    badge: null,
    rating: 4.5,
    reviews: 44,
    category: "bathroom",
    variant: "White",
    image: "assets/images/104/1.jpeg",
    images: ["assets/images/104/1.jpeg","assets/images/104/2.jpeg","assets/images/104/3.jpeg"],
    description: "Compact white freestanding bathroom organiser with a lid. Stores up to 4 toilet rolls and bathroom cleaning products. Anti-corrosive MDF with smooth painted finish. Fits neatly beside the toilet — great for small bathrooms and apartments.",
    specs: { "Dimensions": "W31 × D17 × H33 cm", "Material": "Engineered Wood (MDF)", "Finish": "White", "Feature": "With Lid", "Assembly": "Easy self-assembly" },
    features: ["Stores up to 4 toilet rolls", "Lid keeps contents neat and tidy", "Fits perfectly in toilet corners", "Anti-corrosive, durable MDF", "Easy self-assembly required"]
  },
  {
    id: 22,
    itemNo: "234",
    name: "Compact Grey Bathroom Storage Box",
    vendor: "Uni Merchant",
    slug: "grey-bathroom-storage-box",
    price: 15,
    originalPrice: null,
    badge: null,
    rating: 4.5,
    reviews: 38,
    category: "bathroom",
    variant: "Grey",
    image: "assets/images/234/1.jpeg",
    images: ["assets/images/234/1.jpeg","assets/images/234/2.jpeg","assets/images/234/3.jpeg","assets/images/234/4.jpeg"],
    description: "Compact grey freestanding bathroom storage box. Multi-purpose organiser for toilet rolls, cleaning supplies and bathroom accessories. Durable anti-corrosive MDF with smooth painted finish. Easy to move — great for small bathrooms, powder rooms and apartments.",
    specs: { "Dimensions": "W31 × D17 × H33 cm", "Material": "MDF", "Finish": "Grey Painted", "Capacity": "Up to 4 toilet rolls", "Assembly": "Easy self-assembly" },
    features: ["Stores up to 4 toilet rolls", "Compact — fits toilet corners", "Anti-corrosive durable MDF", "Easy to move anywhere", "Easy self-assembly required"]
  },
  {
    id: 23,
    itemNo: "544",
    name: "Grey Wooden Laundry & Storage Box with Lid",
    vendor: "Uni Merchant",
    slug: "grey-laundry-storage-box-lid",
    price: 29,
    originalPrice: null,
    badge: "new",
    rating: 4.7,
    reviews: 72,
    category: "bathroom",
    variant: "Grey",
    image: "assets/images/544/1.jpeg",
    images: ["assets/images/544/1.jpeg","assets/images/544/2.jpeg","assets/images/544/3.jpeg","assets/images/544/4.jpeg","assets/images/544/5.jpeg"],
    description: "Stylish grey MDF laundry hamper and storage box with lid and two side handles. Ideal for towels, bedding, clothes and laundry. Contemporary design suits bathroom, bedroom or garage — large enough for most households' needs.",
    specs: { "Dimensions": "51L × 35W × 51H cm", "Material": "MDF", "Colour": "Grey", "Features": "Lid + Portable Handles", "Style": "Contemporary" },
    features: ["Spacious for laundry, towels and bedding", "Lid keeps contents neat", "Two handles for easy portability", "Sleek contemporary grey finish", "Great value for any room"]
  },
  {
    id: 24,
    itemNo: "060",
    name: "White Double Door Wall-Mounted Mirror Cabinet",
    vendor: "Uni Merchant",
    slug: "white-mirror-cabinet-double-door",
    price: 25,
    originalPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 111,
    category: "bathroom",
    variant: "White",
    image: "assets/images/060/1.jpeg",
    images: ["assets/images/060/1.jpeg","assets/images/060/2.jpeg","assets/images/060/3.jpeg","assets/images/060/4.jpeg"],
    description: "White wall-mounted bathroom mirror cabinet with double mirrored doors and an internal adjustable shelf. Sturdy tongue-and-groove composite wood with silver-coloured handles. Compact and slimline — perfect above toilet, basin or sink.",
    specs: { "Dimensions": "H58 × W56 × D13 cm", "Material": "Composite Wood", "Finish": "White/Grey", "Doors": "2 Mirrored", "Mounting": "Wall Mount" },
    features: ["Double mirrored doors for easy grooming", "Internal adjustable shelf", "Tongue-and-groove composite construction", "Compact — doesn't dominate the room", "Easy to assemble with included fixings"]
  },

  /* ── Furniture ── */
  {
    id: 3,
    itemNo: "089",
    name: "2 Tier Oak Effect Round Side Table",
    vendor: "Uni Merchant",
    slug: "2-tier-oak-round-side-table",
    price: 29,
    originalPrice: null,
    badge: "new",
    rating: 4.8,
    reviews: 97,
    category: "furniture",
    variant: "Oak",
    image: "assets/images/089/1.jpeg",
    images: ["assets/images/089/1.jpeg","assets/images/089/2.jpeg","assets/images/089/3.jpeg","assets/images/089/4.jpeg"],
    description: "Contemporary 2-tier round oak effect side table with a strong cross-frame design. Waterproof and heat-resistant surface. Perfect as a lamp table, plant stand or bedside table in living room, bedroom or small spaces. Installs in under 15 minutes.",
    specs: { "Dimensions": "50 × 50 × 50 cm", "Material": "E1 PB Board", "Colour": "Oak Effect", "Max Weight": "20 kg", "Assembly": "Under 15 mins" },
    features: ["2-tier cross-frame design — strong and stable", "Waterproof and heat-resistant top", "ECO-friendly E1 PB board", "Assembles in under 15 minutes", "Great as lamp, plant or bedside table"]
  },
  {
    id: 4,
    itemNo: "563",
    name: "2 Cube Storage Bookcase with Fabric Basket — White",
    vendor: "Uni Merchant",
    slug: "white-2-cube-storage-bookcase-basket",
    price: 19,
    originalPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 83,
    category: "furniture",
    variant: "White",
    image: "assets/images/563/1.jpeg",
    images: ["assets/images/563/1.jpeg","assets/images/563/2.jpeg"],
    description: "Stylish white freestanding 2-cube bookcase with 1 fabric basket included. Use vertically or horizontally to suit your space. Perfect for bedroom, living room, nursery, office or garage — adds a great focal point to any room.",
    specs: { "Dimensions": "W30 × D28 × H60 cm", "Material": "Engineered Wood", "Finish": "White", "Shelves": "2", "Includes": "1 Fabric Basket" },
    features: ["Includes 1 fabric basket", "Freestanding — no wall fixing needed", "Display vertically or horizontally", "12mm particle board with laminated finish", "Great for bedroom, office, nursery or living room"]
  },

  /* ── Shelves ── */
  {
    id: 5,
    itemNo: "304",
    name: "White Multi Compartment Floating Display Shelves",
    vendor: "Uni Merchant",
    slug: "white-floating-display-shelves",
    price: 18,
    originalPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 142,
    category: "shelves",
    variant: "White",
    image: "assets/images/304/1.jpeg",
    images: ["assets/images/304/1.jpeg","assets/images/304/2.jpeg","assets/images/304/3.jpeg","assets/images/304/4.jpeg","assets/images/304/5.jpeg","assets/images/304/6.jpeg"],
    description: "Modern white multi-compartment floating wall shelf. Unique design adds charm and personality to any room — living room, bedroom, hallway, kitchen or home office. Eliminates clutter and maximises vertical wall space. Holds up to 11 pounds.",
    specs: { "Dimensions": "W60 × D16 × H48 cm", "Material": "Engineered Wood", "Finish": "White", "Shelves": "3", "Mounting": "Wall Mount", "Max Load": "11 lbs" },
    features: ["Unique multi-compartment design", "Maximises vertical wall space", "Holds up to 11 pounds", "Easy assembly with all fixings included", "Suits any room décor"]
  },
  {
    id: 8,
    itemNo: "248",
    name: "Grey Multi Compartment Floating Display Shelves",
    vendor: "Uni Merchant",
    slug: "grey-floating-display-shelves",
    price: 16,
    originalPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 98,
    category: "shelves",
    variant: "Grey",
    image: "assets/images/248/1.jpeg",
    images: ["assets/images/248/1.jpeg","assets/images/248/2.jpeg","assets/images/248/3.jpeg","assets/images/248/4.jpeg"],
    description: "Solid grey MDF laminate floating wall shelf with space-saving multi-compartment design. Sturdy enough for books, photo frames, plants and small items. Wall-mount in any room — bedroom, hallway, kitchen, living room or office. Max load 10 kg.",
    specs: { "Dimensions": "9D × 76W × 48H cm", "Material": "MDF Laminate", "Finish": "Grey Matte", "Mounting": "Wall Mount", "Max Load": "10 kg" },
    features: ["Sturdy MDF laminate construction", "Space-saving multi-compartment design", "Max load 10 kg", "Pre-drilled keyholes for easy installation", "Includes mounting screws and anchors"]
  },
  {
    id: 9,
    itemNo: "038",
    name: "Black Multi Compartment Floating Display Shelves",
    vendor: "Uni Merchant",
    slug: "black-floating-display-shelves",
    price: 16,
    originalPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 74,
    category: "shelves",
    variant: "Black",
    image: "assets/images/038/1.jpeg",
    images: ["assets/images/038/1.jpeg","assets/images/038/2.jpeg","assets/images/038/3.jpeg","assets/images/038/4.jpeg"],
    description: "Bold black MDF laminate floating wall shelf with space-saving multi-compartment design. A striking accent for any wall — living room, bedroom, bathroom or kitchen. Sturdy enough for books, plants, frames and décor. Max load 10 kg.",
    specs: { "Dimensions": "9D × 76W × 48H cm", "Material": "MDF Laminate", "Finish": "Matte Black", "Mounting": "Wall Mount", "Max Load": "10 kg" },
    features: ["Matte black finish for a bold statement", "Space-saving multi-compartment design", "Max load 10 kg", "Pre-drilled keyholes", "Includes mounting hardware"]
  },
  {
    id: 10,
    itemNo: "037",
    name: "Oak Effect Multi Compartment Floating Display Shelves",
    vendor: "Uni Merchant",
    slug: "oak-floating-display-shelves",
    price: 16,
    originalPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 61,
    category: "shelves",
    variant: "Oak Effect",
    image: "assets/images/037/1.jpeg",
    images: ["assets/images/037/1.jpeg","assets/images/037/2.jpeg","assets/images/037/3.jpeg","assets/images/037/4.jpeg"],
    description: "Warm oak effect MDF floating wall shelf with space-saving multi-compartment design. A stylish addition to any room — display books, photos, plants and décor in living room, bedroom, hallway or kitchen. Max load 10 kg.",
    specs: { "Dimensions": "9D × 76W × 48H cm", "Material": "MDF Laminate", "Finish": "Oak Effect", "Mounting": "Wall Mount", "Max Load": "10 kg" },
    features: ["Warm oak effect finish", "Space-saving multi-compartment design", "Max load 10 kg", "Pre-drilled keyholes for easy install", "Includes mounting hardware"]
  },
  {
    id: 11,
    itemNo: "036",
    name: "White Multi Compartment Floating Shelf Organiser",
    vendor: "Uni Merchant",
    slug: "white-floating-shelf-organiser",
    price: 16,
    originalPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 52,
    category: "shelves",
    variant: "White",
    image: "assets/images/036/1.jpeg",
    images: ["assets/images/036/1.jpeg","assets/images/036/2.jpeg"],
    description: "Clean white MDF floating wall shelf with multi-compartment space-saving design. Sturdy MDF laminate with a matte white finish — a perfect complement to any room. Ideal for bedroom, hallway, kitchen, living room or office. Max load 10 kg.",
    specs: { "Dimensions": "9D × 76W × 48H cm", "Material": "MDF Laminate", "Finish": "White Matte", "Mounting": "Wall Mount", "Max Load": "10 kg" },
    features: ["Clean white matte finish", "Space-saving multi-compartment design", "Max load 10 kg", "Pre-drilled keyholes", "Includes mounting hardware"]
  },
  {
    id: 12,
    itemNo: "019",
    name: "Set of 3 Floating Cube Shelves — Square Wall Shelves",
    vendor: "Uni Merchant",
    slug: "set-3-floating-cube-shelves",
    price: 13,
    originalPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 176,
    category: "shelves",
    variant: "Natural Wood",
    image: "assets/images/019/1.jpeg",
    images: ["assets/images/019/1.jpeg","assets/images/019/2.jpeg","assets/images/019/3.jpeg","assets/images/019/4.jpeg","assets/images/019/5.jpeg"],
    description: "Modern set of 3 square cube wall shelves in 3 graduated sizes. Moisture-proof, safe and lightweight solid wood material. Ready to hang — just fix to the wall with the included hardware kit. Perfect for trophies, plants, books and small décor.",
    specs: { "Sizes": "Small 15×9×15 / Med 20×9×20 / Large 25×9×25 cm", "Material": "Solid Wood", "Mounting": "Wall Mount", "Includes": "3 shelves + hardware" },
    features: ["3 graduated square cube sizes", "Moisture-proof lightweight solid wood", "Ready to hang — hardware included", "Ideal for trophies, books and plants", "Multi-purpose for any room"]
  },
  {
    id: 13,
    itemNo: "001",
    name: "Floating Shelves Set of 3 — U Shaped (White)",
    vendor: "Uni Merchant",
    slug: "floating-shelves-set-3-white",
    price: 9,
    originalPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 209,
    category: "shelves",
    variant: "White",
    image: "assets/images/001/1.jpeg",
    images: ["assets/images/001/1.jpeg","assets/images/001/2.jpeg","assets/images/001/3.jpeg","assets/images/001/4.jpeg","assets/images/001/5.jpeg"],
    description: "Set of 3 white U-shaped floating wall shelves in 3 different sizes. Sturdy MDF laminate with a clean white finish. Pre-drilled keyholes and all mounting hardware included. Perfect for bedroom, bathroom, kitchen, living room and office.",
    specs: { "Large": "42.5×10×10 cm", "Medium": "32.5×10×8.8 cm", "Small": "22.5×10×7.2 cm", "Material": "MDF", "Max Load": "3 kg per shelf" },
    features: ["Set of 3 graduated sizes", "Clean white MDF laminate finish", "Max 3 kg per shelf", "Pre-drilled keyholes", "Includes mounting screws and anchors"]
  },
  {
    id: 14,
    itemNo: "004",
    name: "Floating Shelves Set of 3 — U Shaped (Grey)",
    vendor: "Uni Merchant",
    slug: "floating-shelves-set-3-grey",
    price: 9,
    originalPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 147,
    category: "shelves",
    variant: "Grey",
    image: "assets/images/004/1.jpeg",
    images: ["assets/images/004/1.jpeg","assets/images/004/2.jpeg","assets/images/004/3.jpeg","assets/images/004/4.jpeg","assets/images/004/5.jpeg"],
    description: "Set of 3 grey U-shaped floating wall shelves in 3 different sizes. MDF laminate with a matte grey finish. Pre-drilled keyholes and all mounting hardware included. Suits bedroom, hallway, bathroom, kitchen or living room.",
    specs: { "Large": "42.5×10×10 cm", "Medium": "32.5×10×8.8 cm", "Small": "22.5×10×7.2 cm", "Material": "MDF", "Max Load": "3 kg per shelf" },
    features: ["Set of 3 graduated sizes", "Matte grey MDF laminate finish", "Max 3 kg per shelf", "Pre-drilled keyholes", "Includes mounting hardware"]
  },
  {
    id: 15,
    itemNo: "003",
    name: "Floating Shelves Set of 3 — U Shaped (Light Oak Effect)",
    vendor: "Uni Merchant",
    slug: "floating-shelves-set-3-light-oak",
    price: 9,
    originalPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 118,
    category: "shelves",
    variant: "Light Oak Effect",
    image: "assets/images/003/1.jpeg",
    images: ["assets/images/003/1.jpeg","assets/images/003/2.jpeg","assets/images/003/3.jpeg"],
    description: "Set of 3 light oak effect U-shaped floating wall shelves in 3 graduated sizes. Warm oak finish MDF laminate. Pre-drilled keyholes and all mounting hardware included. Looks great in living room, bedroom, hallway, bathroom or kitchen.",
    specs: { "Large": "42.5×10×10 cm", "Medium": "32.5×10×8.8 cm", "Small": "22.5×10×7.2 cm", "Material": "MDF", "Max Load": "3 kg per shelf" },
    features: ["Set of 3 graduated sizes", "Warm light oak effect finish", "Max 3 kg per shelf", "Pre-drilled keyholes", "Includes mounting hardware"]
  },
  {
    id: 16,
    itemNo: "002",
    name: "Floating Shelves Set of 3 — U Shaped (Black)",
    vendor: "Uni Merchant",
    slug: "floating-shelves-set-3-black",
    price: 9,
    originalPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 93,
    category: "shelves",
    variant: "Matte Black",
    image: "assets/images/002/1.jpeg",
    images: ["assets/images/002/1.jpeg","assets/images/002/2.jpeg","assets/images/002/3.jpeg"],
    description: "Set of 3 matte black U-shaped floating wall shelves in 3 graduated sizes. Bold black MDF laminate finish. Pre-drilled keyholes and all mounting hardware included. Makes a striking statement in any room of the home.",
    specs: { "Large": "42.5×10×10 cm", "Medium": "32.5×10×8.8 cm", "Small": "22.5×10×7.2 cm", "Material": "MDF", "Max Load": "3 kg per shelf" },
    features: ["Set of 3 graduated sizes", "Bold matte black finish", "Max 3 kg per shelf", "Pre-drilled keyholes", "Includes mounting screws and anchors"]
  },
  {
    id: 17,
    itemNo: "027",
    name: "White 5 Tier Zig Zag Corner Shelf",
    vendor: "Uni Merchant",
    slug: "white-5-tier-zigzag-corner-shelf",
    price: 15,
    originalPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 134,
    category: "shelves",
    variant: "White",
    image: "assets/images/027/1.jpeg",
    images: ["assets/images/027/1.jpeg","assets/images/027/2.jpeg","assets/images/027/3.jpeg","assets/images/027/4.jpeg","assets/images/027/5.jpeg","assets/images/027/6.jpeg"],
    description: "Modern white 5-tier zig zag corner wall shelf. Turns unused corners into stylish storage. Perfect for books, plants, trophies and décor in any room — bathroom, bedroom, hallway, kitchen, living room or office. Holds up to 11 pounds.",
    specs: { "Dimensions": "20 × 20 × 127.5 cm", "Material": "Wood", "Finish": "White", "Tiers": "5", "Max Load": "11 lbs" },
    features: ["Modern zig zag corner design", "5 generous tiers for display and storage", "Holds up to 11 pounds", "Suits any room in the home", "Easy assembly with all fixings included"]
  },
  {
    id: 18,
    itemNo: "024",
    name: "Black 5 Tier Zig Zag Corner Shelf",
    vendor: "Uni Merchant",
    slug: "black-5-tier-zigzag-corner-shelf",
    price: 15,
    originalPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 89,
    category: "shelves",
    variant: "Black",
    image: "assets/images/024/1.jpeg",
    images: ["assets/images/024/1.jpeg","assets/images/024/2.jpeg","assets/images/024/3.jpeg"],
    description: "Bold black 5-tier zig zag corner wall shelf. Makes a statement in any unused corner — bathroom, bedroom, hallway, living room, kitchen or home office. 5 tiers for books, plants, trophies and décor. Holds up to 11 pounds.",
    specs: { "Dimensions": "20 × 20 × 127.5 cm", "Material": "Wood", "Finish": "Black", "Tiers": "5", "Max Load": "11 lbs" },
    features: ["Bold black zig zag design", "5 generous tiers", "Holds up to 11 pounds", "Suits any room", "Easy assembly with all fixings included"]
  },
  {
    id: 19,
    itemNo: "015",
    name: "White 5 Tier Step Shelf — Zig Zag Wall Mount",
    vendor: "Uni Merchant",
    slug: "white-5-tier-step-shelf",
    price: 10,
    originalPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 67,
    category: "shelves",
    variant: "White",
    image: "assets/images/015/1.jpeg",
    images: ["assets/images/015/1.jpeg","assets/images/015/2.jpeg","assets/images/015/3.jpeg"],
    description: "Modern white zig zag step wall shelf with 5 tiered shelves. Turns any empty wall into additional storage. Perfect for books, plants, CDs and décor in bedroom, hallway, kitchen, living room or home office. Holds up to 11 pounds.",
    specs: { "Dimensions": "59 × 59 × 12 cm", "Material": "Wood", "Finish": "White", "Tiers": "5", "Max Load": "11 lbs" },
    features: ["Modern zig zag step design", "5 tiered shelves", "Holds up to 11 pounds", "Suits bedroom, hallway, kitchen and more", "All fixings included"]
  }
];

/* ── Category Config ── */
const CATEGORIES = [
  { key: "all",       label: "All Products" },
  { key: "furniture", label: "Furniture" },
  { key: "shelves",   label: "Shelves" },
  { key: "bathroom",  label: "Bathroom" }
];

/* ── Store Config ── */
const STORE = {
  name:      'Uni Merchant Store',
  email:     'hello@unimerchant.store',
  whatsapp:  '447787675032',          // international format, no +
  // EmailJS credentials — sign up free at emailjs.com and replace these:
  emailjs: {
    publicKey:  'YOUR_EMAILJS_PUBLIC_KEY',   // Account > API Keys
    serviceId:  'YOUR_EMAILJS_SERVICE_ID',   // Email Services tab
    templateId: 'YOUR_EMAILJS_TEMPLATE_ID'  // Email Templates tab
  }
};

/* ── Cart State ── */
let cart = JSON.parse(localStorage.getItem('um_cart') || '[]');

function saveCart() {
  localStorage.setItem('um_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, qty = 1, variant) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const v = variant || product.variant;
  const existing = cart.find(i => i.id === productId && i.variant === v);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, itemNo: product.itemNo, qty, variant: v, name: product.name, price: product.price, image: product.image });
  }
  saveCart();
  showToast(`"${product.name.length > 32 ? product.name.substring(0, 32) + '…' : product.name}" added to cart`);
  openCart();
}

function removeFromCart(productId, variant) {
  cart = cart.filter(i => !(i.id === productId && i.variant === variant));
  saveCart();
  renderCartItems();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
    el.classList.toggle('show', total > 0);
  });
}

function cartTotal() {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <p>Your cart is empty</p>
        <a href="products.html" class="btn btn-oak">Shop Now</a>
      </div>`;
  } else {
    container.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-variant">Item #${item.itemNo} · ${item.variant} · Qty: ${item.qty}</div>
          <div class="cart-item-bottom">
            <div class="cart-item-price">£${(item.price * item.qty).toFixed(2)}</div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id}, '${item.variant.replace(/'/g,"\\'")}')">Remove</button>
          </div>
        </div>
      </div>`).join('');
  }
  const subtotalEl = document.getElementById('cartSubtotal');
  if (subtotalEl) subtotalEl.textContent = `£${cartTotal().toFixed(2)}`;
}

function openCart() {
  document.getElementById('cartSidebar')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartItems();
}
function closeCart() {
  document.getElementById('cartSidebar')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Toast ── */
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.querySelector('.toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

/* ── Mobile Menu ── */
function openMenu() {
  document.getElementById('mobileMenu')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  document.getElementById('mobileMenu')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Helpers ── */
function renderStars(rating) {
  return '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '');
}

function productCardHTML(p) {
  return `
    <div class="product-card" data-category="${p.category}">
      <div class="product-card-image">
        <a href="product.html?id=${p.id}">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </a>
        <div class="card-badges">
          ${p.badge === 'sale' ? '<span class="badge badge-sale">Sale</span>' : ''}
          ${p.badge === 'new'  ? '<span class="badge badge-new">New</span>'  : ''}
        </div>
        <div class="card-actions">
          <button class="card-action-btn" title="Wishlist" onclick="showToast('Added to wishlist')">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <a class="card-action-btn" href="product.html?id=${p.id}" title="View Product">
            <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </a>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-vendor">${p.vendor}</div>
        <a href="product.html?id=${p.id}"><div class="product-name">${p.name}</div></a>
        <div class="product-stars">
          <span class="star">${renderStars(p.rating)}</span>
          <span class="star-count">(${p.reviews})</span>
        </div>
        <div class="product-price">
          ${p.originalPrice
            ? `<span class="price-current price-sale">£${p.price.toFixed(2)}</span>
               <span class="price-original">£${p.originalPrice.toFixed(2)}</span>`
            : `<span class="price-current">£${p.price.toFixed(2)}</span>`}
        </div>
        <button class="btn-add-cart" onclick="addToCart(${p.id})">
          <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          Add to Cart
        </button>
      </div>
    </div>`;
}

/* ── Checkout ── */

function buildCheckoutModal() {
  if (document.getElementById('checkoutOverlay')) return;

  const el = document.createElement('div');
  el.className = 'checkout-overlay';
  el.id = 'checkoutOverlay';
  el.innerHTML = `
    <div class="checkout-modal" id="checkoutModal">

      <!-- Header -->
      <div class="checkout-modal-header">
        <h2>Complete Your Order</h2>
        <button class="close-btn" id="closeCheckout">&times;</button>
      </div>

      <!-- Form view -->
      <div class="checkout-modal-body" id="checkoutFormView">

        <!-- Order summary -->
        <div class="checkout-section-title">Order Summary</div>
        <div class="checkout-order-summary" id="coOrderLines"></div>
        <div class="checkout-total-row">
          <span>Total <span class="delivery-tag">FREE DELIVERY</span></span>
          <span id="coTotal">£0.00</span>
        </div>

        <!-- Customer details -->
        <div class="checkout-section-title">Your Details</div>
        <div class="checkout-form-grid" style="margin-bottom:20px;">
          <div class="checkout-form-group">
            <label for="coName">Full Name *</label>
            <input type="text" id="coName" placeholder="John Smith" required>
          </div>
          <div class="checkout-form-group">
            <label for="coEmail">Email Address *</label>
            <input type="email" id="coEmail" placeholder="john@example.com" required>
          </div>
          <div class="checkout-form-group">
            <label for="coPhone">Phone / WhatsApp *</label>
            <input type="tel" id="coPhone" placeholder="+44 7XXX XXXXXX" required>
          </div>
          <div class="checkout-form-group">
            <label for="coCity">City *</label>
            <input type="text" id="coCity" placeholder="London" required>
          </div>
          <div class="checkout-form-group full">
            <label for="coAddress">Delivery Address *</label>
            <input type="text" id="coAddress" placeholder="123 High Street, Flat 2" required>
          </div>
          <div class="checkout-form-group">
            <label for="coPostcode">Postcode *</label>
            <input type="text" id="coPostcode" placeholder="SW1A 1AA" required>
          </div>
          <div class="checkout-form-group">
            <label for="coNotes">Order Notes (optional)</label>
            <input type="text" id="coNotes" placeholder="Any special instructions…">
          </div>
        </div>

        <!-- Where you'll receive confirmation -->
        <div class="checkout-section-title">Order Confirmation</div>
        <div class="checkout-notify-methods" style="margin-bottom:24px;">
          <div class="notify-card email-card">
            <div class="notify-icon email">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--oak)" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <div class="notify-value">Email</div>
              <div class="notify-label">hello@unimerchant.store</div>
            </div>
          </div>
          <div class="notify-card wa-card">
            <div class="notify-icon whatsapp">
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a6.3 6.3 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path fill="#25D366" d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.985-1.308A9.944 9.944 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
            </div>
            <div>
              <div class="notify-value">WhatsApp</div>
              <div class="notify-label">+44 7787 675032</div>
            </div>
          </div>
        </div>

        <!-- Submit -->
        <button class="checkout-submit-btn" id="coSubmitBtn" type="button">
          <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.985-1.308A9.944 9.944 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
          Place Order via WhatsApp
        </button>
        <p class="checkout-note">
          Your order details will be sent to our WhatsApp and email.<br>
          We will confirm your order and delivery within 2 hours.
        </p>
      </div>

      <!-- Success view -->
      <div class="checkout-success" id="checkoutSuccess">
        <div class="success-icon">
          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h2>Order Sent!</h2>
        <p>Your order has been sent to our WhatsApp and email.</p>
        <p>We'll confirm your order and delivery details within <strong>2 hours</strong>.</p>
        <p style="margin-top:8px;">Questions? Message us on WhatsApp: <a href="https://wa.me/447787675032" style="color:var(--oak);font-weight:600;">+44 7787 675032</a></p>
        <button class="btn btn-oak" style="margin-top:28px;" onclick="closeCheckoutModal()">Continue Shopping</button>
      </div>

    </div>`;
  document.body.appendChild(el);

  // Close handlers
  document.getElementById('closeCheckout').addEventListener('click', closeCheckoutModal);
  el.addEventListener('click', (e) => { if (e.target === el) closeCheckoutModal(); });

  // Submit
  document.getElementById('coSubmitBtn').addEventListener('click', submitOrder);
}

function openCheckoutModal() {
  if (cart.length === 0) { showToast('Your cart is empty'); return; }
  buildCheckoutModal();
  closeCart();

  // Populate order summary
  const linesEl = document.getElementById('coOrderLines');
  linesEl.innerHTML = cart.map(i => `
    <div class="checkout-order-line">
      <div>
        <div class="line-name">${i.name}</div>
        <div class="line-meta">Item #${i.itemNo} · ${i.variant} · Qty ${i.qty}</div>
      </div>
      <div class="line-price">£${(i.price * i.qty).toFixed(2)}</div>
    </div>`).join('');
  document.getElementById('coTotal').textContent = `£${cartTotal().toFixed(2)}`;

  // Reset views
  document.getElementById('checkoutFormView').style.display = '';
  document.getElementById('checkoutSuccess').classList.remove('show');

  const overlay = document.getElementById('checkoutOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  const overlay = document.getElementById('checkoutOverlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function validateCheckoutForm() {
  const fields = ['coName','coEmail','coPhone','coCity','coAddress','coPostcode'];
  let valid = true;
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('error');
    if (!el.value.trim()) { el.classList.add('error'); valid = false; }
  });
  return valid;
}

function formatOrderMessage(customer) {
  const orderRef = 'UM' + Date.now().toString().slice(-6);
  const date = new Date().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' });

  let lines = cart.map(i =>
    `• [#${i.itemNo}] ${i.name} (${i.variant}) × ${i.qty} — £${(i.price * i.qty).toFixed(2)}`
  ).join('\n');

  return {
    ref: orderRef,
    whatsapp: encodeURIComponent(
`🛒 *New Order — ${STORE.name}*
📋 Ref: ${orderRef}
📅 ${date}

👤 *Customer Details*
Name: ${customer.name}
Email: ${customer.email}
Phone: ${customer.phone}

📦 *Order Items*
${lines}

💰 *Total: £${cartTotal().toFixed(2)}* (FREE delivery)

📍 *Delivery Address*
${customer.address}
${customer.city}
${customer.postcode}
${customer.notes ? '\n📝 Notes: ' + customer.notes : ''}

Please confirm this order. Thank you!`
    ),
    email: {
      order_ref:    orderRef,
      order_date:   date,
      customer_name:  customer.name,
      customer_email: customer.email,
      customer_phone: customer.phone,
      delivery_address: `${customer.address}, ${customer.city}, ${customer.postcode}`,
      order_notes:  customer.notes || 'None',
      order_items:  cart.map(i =>
        `[#${i.itemNo}] ${i.name} (${i.variant}) × ${i.qty} — £${(i.price * i.qty).toFixed(2)}`
      ).join('\n'),
      order_total:  `£${cartTotal().toFixed(2)}`,
      to_email:     STORE.email
    }
  };
}

async function submitOrder() {
  if (!validateCheckoutForm()) {
    showToast('Please fill in all required fields');
    return;
  }

  const btn = document.getElementById('coSubmitBtn');
  btn.disabled = true;
  btn.textContent = 'Sending…';

  const customer = {
    name:     document.getElementById('coName').value.trim(),
    email:    document.getElementById('coEmail').value.trim(),
    phone:    document.getElementById('coPhone').value.trim(),
    address:  document.getElementById('coAddress').value.trim(),
    city:     document.getElementById('coCity').value.trim(),
    postcode: document.getElementById('coPostcode').value.trim(),
    notes:    document.getElementById('coNotes').value.trim()
  };

  const msg = formatOrderMessage(customer);

  // 1. Send email via EmailJS (if configured)
  const ejsKey = STORE.emailjs.publicKey;
  if (ejsKey && ejsKey !== 'YOUR_EMAILJS_PUBLIC_KEY') {
    try {
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id:  STORE.emailjs.serviceId,
          template_id: STORE.emailjs.templateId,
          user_id:     ejsKey,
          template_params: msg.email
        })
      });
    } catch (e) {
      console.warn('EmailJS send failed:', e);
    }
  }

  // 2. Open WhatsApp with full order details
  window.open(`https://wa.me/${STORE.whatsapp}?text=${msg.whatsapp}`, '_blank');

  // 3. Clear cart & show success
  cart = [];
  saveCart();

  btn.disabled = false;
  document.getElementById('checkoutFormView').style.display = 'none';
  document.getElementById('checkoutSuccess').classList.add('show');
}

/* ── DOM Ready ── */
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();

  /* Cart open/close */
  document.getElementById('cartBtn')?.addEventListener('click', openCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCart);

  /* Mobile menu */
  document.getElementById('menuBtn')?.addEventListener('click', openMenu);
  document.getElementById('closeMenuBtn')?.addEventListener('click', closeMenu);

  /* Featured products (homepage) — handpicked from each category */
  const featuredGrid = document.getElementById('featuredGrid');
  if (featuredGrid) {
    const byCategory = cat => PRODUCTS.filter(p => p.category === cat);
    const picks = [
      byCategory('furniture')[0],
      byCategory('shelves')[0],
      byCategory('shelves')[3],
      byCategory('bathroom')[0]
    ].filter(Boolean);
    featuredGrid.innerHTML = picks.map(productCardHTML).join('');
  }

  /* Products page */
  const productsGrid = document.getElementById('productsGrid');
  if (productsGrid) {
    productsGrid.innerHTML = PRODUCTS.map(productCardHTML).join('');

    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const cat = tab.dataset.category;
        let count = 0;
        document.querySelectorAll('#productsGrid .product-card').forEach(card => {
          const show = cat === 'all' || card.dataset.category === cat;
          card.style.display = show ? '' : 'none';
          if (show) count++;
        });
        const countEl = document.getElementById('productCount');
        if (countEl) countEl.textContent = `Showing ${count} product${count !== 1 ? 's' : ''}`;
      });
    });

    // Sort
    document.getElementById('sortSelect')?.addEventListener('change', (e) => {
      const activeCat = document.querySelector('.filter-tab.active')?.dataset.category || 'all';
      let sorted = [...PRODUCTS];
      if (activeCat !== 'all') sorted = sorted.filter(p => p.category === activeCat);
      if (e.target.value === 'price-asc')  sorted.sort((a, b) => a.price - b.price);
      if (e.target.value === 'price-desc') sorted.sort((a, b) => b.price - a.price);
      if (e.target.value === 'rating')     sorted.sort((a, b) => b.rating - a.rating);
      productsGrid.innerHTML = sorted.map(productCardHTML).join('');
    });
  }

  /* Product detail page */
  const productDetail = document.getElementById('productDetail');
  if (productDetail) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;
    const p = PRODUCTS.find(prod => prod.id === id) || PRODUCTS[0];

    document.title = `${p.name} — Uni Merchant Store`;
    document.getElementById('pdTitle').textContent = p.name;
    document.getElementById('pdVendor').textContent = p.vendor;
    document.getElementById('pdDesc').textContent = p.description;

    const priceEl = document.getElementById('pdPrice');
    priceEl.innerHTML = p.originalPrice
      ? `<span class="price-current price-sale">£${p.price.toFixed(2)}</span>
         <span class="price-original">£${p.originalPrice.toFixed(2)}</span>`
      : `<span class="price-current">£${p.price.toFixed(2)}</span>`;

    // Gallery
    const mainImg = document.getElementById('galleryMain');
    mainImg.src = p.images[0];
    const thumbsEl = document.getElementById('galleryThumbs');
    thumbsEl.innerHTML = p.images.map((src, i) => `
      <div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="switchImage(this, '${src}')">
        <img src="${src}" alt="View ${i + 1}" loading="lazy">
      </div>`).join('');

    // Variant swatch
    const swatchEl = document.getElementById('pdVariantSwatch');
    if (swatchEl) swatchEl.textContent = p.variant;

    // Specs
    const specsEl = document.getElementById('pdSpecs');
    specsEl.innerHTML = Object.entries(p.specs).map(([k, v]) => `
      <div class="spec-row"><span class="spec-label">${k}</span><span class="spec-value">${v}</span></div>
    `).join('');

    // Features
    const featEl = document.getElementById('pdFeatures');
    if (featEl) featEl.innerHTML = p.features.map(f => `<li>${f}</li>`).join('');

    // Stars
    document.getElementById('pdStars').textContent =
      `${renderStars(p.rating)} (${p.reviews} reviews)`;

    // Breadcrumb
    const bc = document.getElementById('pdBreadcrumb');
    if (bc) bc.textContent = p.name.length > 36 ? p.name.substring(0, 36) + '…' : p.name;

    // Add to cart
    document.getElementById('pdAddCart')?.addEventListener('click', () => {
      const qty = parseInt(document.getElementById('qtyInput')?.value || 1);
      addToCart(p.id, qty, p.variant);
    });

    // Related products (same category, excluding current)
    const relatedGrid = document.getElementById('relatedGrid');
    if (relatedGrid) {
      const related = PRODUCTS.filter(r => r.id !== p.id && r.category === p.category).slice(0, 4);
      const fallback = related.length < 4
        ? [...related, ...PRODUCTS.filter(r => r.id !== p.id && r.category !== p.category)].slice(0, 4)
        : related;
      relatedGrid.innerHTML = fallback.map(productCardHTML).join('');
    }
  }

  /* Qty selector */
  window.changeQty = function(delta) {
    const input = document.getElementById('qtyInput');
    if (!input) return;
    input.value = Math.max(1, parseInt(input.value) + delta);
  };

  /* Gallery switch */
  window.switchImage = function(thumb, src) {
    document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    document.getElementById('galleryMain').src = src;
  };

  /* Newsletter */
  document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Thank you for subscribing!');
    e.target.reset();
  });

  /* Contact */
  document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast("Message sent! We'll be in touch soon.");
    e.target.reset();
  });

  /* Scroll fade-in */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });

  document.querySelectorAll('.product-card, .category-card, .testimonial-card, .value-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});

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
    reviews: 14,
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
    reviews: 9,
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
    reviews: 11,
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
    reviews: 25,
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
    reviews: 7,
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
    reviews: 6,
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
    reviews: 5,
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
    reviews: 12,
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
    reviews: 18,
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
    reviews: 8,
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
    reviews: 14,
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
    reviews: 21,
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
    reviews: 7,
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
    reviews: 6,
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
    reviews: 17,
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
    reviews: 19,
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
    reviews: 11,
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
    reviews: 13,
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
    reviews: 8,
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
    reviews: 22,
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
    reviews: 16,
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
    reviews: 9,
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
    reviews: 15,
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
    reviews: 10,
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
  stripePublishableKey: 'pk_live_51TNw1VBXown5YKmd4Fnh4Z9FjgAko4BeXsvgf6IutcUAZMqH2hyv38eTcmNJHo554yPwSvmTSkWwtHP8ySm7R1Sm006hkNfTIQ',
  // PayPal — sign up at developer.paypal.com, create a REST app, copy the Client ID:
  paypalClientId: 'AeDcIQYGVamPwHG89DZH5RgzIJDNRypIoGY4q6Dnv0G1UaT8vpHgyYnrwLa60sOSf6nw52TlVFL61OVV',
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
        <button class="co-back-btn" id="checkoutBackBtn" onclick="checkoutBack()" style="visibility:hidden;">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          Back
        </button>
        <h2 id="checkoutHeaderTitle">Your Order</h2>
        <button class="close-btn" id="closeCheckout">&times;</button>
      </div>

      <!-- Step progress bar -->
      <div class="checkout-stepper">
        <div class="stepper-step active" id="stepDot1">
          <div class="step-dot">1</div>
          <div class="step-label">Review</div>
        </div>
        <div class="stepper-line" id="stepLine1"></div>
        <div class="stepper-step" id="stepDot2">
          <div class="step-dot">2</div>
          <div class="step-label">Delivery</div>
        </div>
        <div class="stepper-line" id="stepLine2"></div>
        <div class="stepper-step" id="stepDot3">
          <div class="step-dot">3</div>
          <div class="step-label">Payment</div>
        </div>
      </div>

      <!-- STEP 1: Review Order -->
      <div class="checkout-step" id="checkoutStep1">
        <div class="checkout-modal-body">
          <div class="checkout-order-summary" id="coOrderLines"></div>
          <div class="checkout-total-row" style="margin-bottom:24px;">
            <span>Total <span class="delivery-tag">FREE DELIVERY</span></span>
            <span id="coTotal">£0.00</span>
          </div>
          <button class="checkout-next-btn" type="button" onclick="checkoutNext(1)">
            Continue to Delivery
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>

      <!-- STEP 2: Delivery Details -->
      <div class="checkout-step" id="checkoutStep2" style="display:none;">
        <div class="checkout-modal-body">
          <div class="checkout-form-grid" style="margin-bottom:24px;">
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
              <label for="coNotes">Notes (optional)</label>
              <input type="text" id="coNotes" placeholder="Any special instructions…">
            </div>
          </div>
          <button class="checkout-next-btn" type="button" onclick="checkoutNext(2)">
            Continue to Payment
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>

      <!-- STEP 3: Payment -->
      <div class="checkout-step" id="checkoutStep3" style="display:none;">
        <div class="checkout-modal-body">

          <!-- Mini summary recap -->
          <div class="co-recap" id="coRecap"></div>

          <!-- Payment method selection -->
          <div class="checkout-section-title">Choose Payment Method</div>
          <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">

            <label id="pmLabelCard" class="pm-label" onclick="selectPayment('card')">
              <input type="radio" name="paymentMethod" value="card" style="accent-color:var(--oak);flex-shrink:0;">
              <div class="pm-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              </div>
              <div>
                <div class="pm-title">Pay by Card</div>
                <div class="pm-sub">Visa · Mastercard · Amex — secured by Stripe</div>
              </div>
            </label>

            <label id="pmLabelPaypal" class="pm-label" onclick="selectPayment('paypal')">
              <input type="radio" name="paymentMethod" value="paypal" style="accent-color:var(--oak);flex-shrink:0;">
              <div class="pm-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 11.5C7 14 9 16 11.5 16H13c2.8 0 5-2.2 5-5s-2.2-5-5-5H8L7 11.5z"/><path d="M4 14.5C4 17 6 19 8.5 19H10c2.8 0 5-2.2 5-5"/></svg>
              </div>
              <div>
                <div class="pm-title">PayPal</div>
                <div class="pm-sub">Pay securely via your PayPal account</div>
              </div>
            </label>

          </div>

          <!-- Card fields (shown when card selected) -->
          <div id="pmContentCard" style="display:none;margin-bottom:8px;">
            <div style="margin-bottom:14px;">
              <label class="stripe-field-label">Name on Card</label>
              <input type="text" id="cardHolderName" class="stripe-field" placeholder="As it appears on your card"
                style="font-size:14px;font-family:inherit;color:#1a1a1a;width:100%;box-sizing:border-box;outline:none;">
            </div>
            <div style="margin-bottom:14px;">
              <label class="stripe-field-label">Card Number</label>
              <div id="stripe-card-number" class="stripe-field"></div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:18px;">
              <div>
                <label class="stripe-field-label">Expiry Date</label>
                <div id="stripe-card-expiry" class="stripe-field"></div>
              </div>
              <div>
                <label class="stripe-field-label">Security Code (CVV)</label>
                <div id="stripe-card-cvc" class="stripe-field"></div>
              </div>
            </div>
            <button class="checkout-submit-btn" id="stripePayBtn" type="button">Pay £0.00</button>
            <p class="checkout-note" style="margin-top:10px;">🔒 Your card details are encrypted and never stored</p>
          </div>

          <!-- PayPal (shown when paypal selected) -->
          <div id="pmContentPaypal" style="display:none;margin-bottom:8px;">
            <div id="paypal-button-container" style="min-height:52px;"></div>
            <p class="checkout-note" style="margin-top:10px;">🔒 You will be redirected to PayPal to complete payment securely</p>
          </div>

        </div>
      </div>

      <!-- OTP Verification screen -->
      <div class="checkout-otp-screen" id="checkoutOtp" style="display:none;">
        <div class="checkout-modal-body" style="text-align:center;padding-top:40px;padding-bottom:40px;">
          <div class="otp-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <h3 id="otpTitle" style="font-size:18px;margin:16px 0 8px;">Enter Verification Code</h3>
          <p id="otpSubtitle" style="font-size:13px;color:var(--text-muted);margin-bottom:28px;line-height:1.6;"></p>

          <!-- 6-digit boxes -->
          <div class="otp-boxes" id="otpBoxes">
            <input class="otp-box" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]">
            <input class="otp-box" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]">
            <input class="otp-box" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]">
            <input class="otp-box" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]">
            <input class="otp-box" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]">
            <input class="otp-box" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]">
          </div>

          <p id="otpError" style="font-size:13px;color:#e53e3e;min-height:20px;margin:12px 0;"></p>

          <button class="checkout-next-btn" id="otpVerifyBtn" type="button" style="margin-bottom:14px;" onclick="submitOtp()">
            Verify Code
          </button>
          <button class="co-resend-btn" id="otpResendBtn" type="button" onclick="resendOtp()">
            Didn't receive it? <span style="color:var(--oak);font-weight:600;">Resend code</span>
          </button>
        </div>
      </div>

      <!-- Success screen -->
      <div class="checkout-success" id="checkoutSuccess">
        <div class="success-icon">
          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h2>Payment Approved!</h2>
        <div id="successPaymentBadge" style="display:inline-block;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:20px;padding:6px 18px;font-size:13px;font-weight:700;color:#16a34a;margin:10px 0 18px;"></div>
        <p id="successOrderRef" style="font-size:13px;font-weight:600;color:var(--text-muted);margin-bottom:16px;"></p>
        <p>Your order has been confirmed and sent to our WhatsApp. We'll contact you within <strong>2 hours</strong> to arrange delivery.</p>
        <div style="margin-top:20px;padding:16px;background:#faf7f2;border-radius:var(--radius);border:1px solid var(--border);text-align:left;">
          <p style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--oak);margin-bottom:6px;">Questions?</p>
          <p style="font-size:13px;color:var(--text-muted);margin:0;">WhatsApp us anytime: <a href="https://wa.me/447787675032" style="color:var(--oak);font-weight:600;">+44 7787 675032</a></p>
        </div>
        <button class="btn btn-oak" style="margin-top:24px;width:100%;" onclick="closeCheckoutModal()">Continue Shopping</button>
      </div>

    </div>`;
  document.body.appendChild(el);

  document.getElementById('closeCheckout').addEventListener('click', closeCheckoutModal);
  el.addEventListener('click', (e) => { if (e.target === el) closeCheckoutModal(); });
  initFormValidation();
}

function setFieldState(id, state, msg) {
  // state: 'valid' | 'error' | 'idle'
  const input = document.getElementById(id);
  if (!input) return;
  const group = input.closest('.checkout-form-group');
  if (!group) return;

  input.classList.remove('error', 'valid');
  let hint = group.querySelector('.field-hint');
  if (!hint) {
    hint = document.createElement('span');
    hint.className = 'field-hint';
    group.appendChild(hint);
  }

  if (state === 'valid') {
    input.classList.add('valid');
    hint.textContent = '✓ ' + (msg || 'Looks good');
    hint.className = 'field-hint hint-ok';
  } else if (state === 'error') {
    input.classList.add('error');
    hint.textContent = msg || 'Required';
    hint.className = 'field-hint hint-err';
  } else {
    hint.textContent = '';
    hint.className = 'field-hint';
  }
}

function initFormValidation() {
  const rules = {
    coName: {
      validate: v => v.trim().length >= 2,
      ok: 'Name confirmed',
      err: 'Please enter your full name'
    },
    coEmail: {
      validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      ok: 'Valid email address',
      err: 'Enter a valid email e.g. john@example.com'
    },
    coPhone: {
      validate: v => { const d = v.replace(/\D/g,''); return d.length >= 7 && d.length <= 15; },
      ok: 'Valid phone number',
      err: 'Enter a valid phone number (7–15 digits)'
    },
    coCity: {
      validate: v => v.trim().length >= 2,
      ok: 'City confirmed',
      err: 'Please enter your city'
    },
    coAddress: {
      validate: v => v.trim().length >= 5,
      ok: 'Address confirmed',
      err: 'Please enter your full delivery address'
    },
    coPostcode: {
      validate: v => v.trim().length >= 3,
      ok: 'Postcode confirmed',
      err: 'Please enter a valid postcode'
    }
  };

  Object.entries(rules).forEach(([id, rule]) => {
    const input = document.getElementById(id);
    if (!input) return;

    // Validate on every keystroke (debounced for smooth UX)
    let timer;
    input.addEventListener('input', () => {
      clearTimeout(timer);
      const v = input.value;
      if (!v) { setFieldState(id, 'idle'); return; }
      timer = setTimeout(() => {
        if (rule.validate(v)) {
          setFieldState(id, 'valid', rule.ok);
        } else {
          setFieldState(id, 'error', rule.err);
        }
      }, 400);
    });

    // Immediate check on blur (when user leaves the field)
    input.addEventListener('blur', () => {
      const v = input.value;
      if (!v) {
        setFieldState(id, 'error', 'This field is required');
        return;
      }
      if (rule.validate(v)) {
        setFieldState(id, 'valid', rule.ok);
      } else {
        setFieldState(id, 'error', rule.err);
      }
    });
  });
}

function goToStep(n) {
  [1, 2, 3].forEach(i => {
    const step = document.getElementById(`checkoutStep${i}`);
    if (step) step.style.display = i === n ? '' : 'none';
    const dot = document.getElementById(`stepDot${i}`);
    if (dot) {
      dot.classList.toggle('active', i <= n);
      dot.classList.toggle('done', i < n);
    }
    if (i < 3) {
      const line = document.getElementById(`stepLine${i}`);
      if (line) line.classList.toggle('active', i < n);
    }
  });
  const titles = { 1: 'Your Order', 2: 'Delivery Details', 3: 'Payment' };
  const titleEl = document.getElementById('checkoutHeaderTitle');
  if (titleEl) titleEl.textContent = titles[n];
  const backBtn = document.getElementById('checkoutBackBtn');
  if (backBtn) backBtn.style.visibility = n > 1 ? 'visible' : 'hidden';
  document.getElementById('checkoutModal')?.scrollTo({ top: 0, behavior: 'smooth' });
}

async function checkoutNext(fromStep) {
  if (fromStep === 2) {
    if (!validateCheckoutForm()) return;
    // Trigger OTP verification for email + phone
    await startOtpVerification();
    return;
  }
  goToStep(fromStep + 1);
}

function checkoutBack() {
  // If on OTP screen, go back to step 2
  const otpScreen = document.getElementById('checkoutOtp');
  if (otpScreen && otpScreen.style.display !== 'none') {
    otpScreen.style.display = 'none';
    document.getElementById('checkoutStep2').style.display = '';
    goToStep(2);
    return;
  }
  for (let i = 3; i >= 2; i--) {
    const s = document.getElementById(`checkoutStep${i}`);
    if (s && s.style.display !== 'none') {
      if (i === 3) {
        ['pmContentCard','pmContentPaypal'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.style.display = 'none';
        });
        ['pmLabelCard','pmLabelPaypal'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.classList.remove('selected');
        });
        document.querySelectorAll('input[name="paymentMethod"]').forEach(r => r.checked = false);
      }
      goToStep(i - 1);
      return;
    }
  }
}

/* ── OTP — simple email verification via EmailJS ── */
let _otpCode   = null;   // the 6-digit code we generated
let _otpExpiry = null;   // when it expires
let _otpEmail  = null;   // who we sent it to

function loadEmailJS() {
  if (window.emailjs) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function startOtpVerification() {
  const email = document.getElementById('coEmail')?.value.trim();
  if (!email) { proceedToPayment(); return; }

  // Check EmailJS is configured
  const ejs = STORE.emailjs;
  if (!ejs.publicKey || ejs.publicKey.startsWith('YOUR_')) {
    // EmailJS not set up — skip verification and proceed
    proceedToPayment();
    return;
  }

  _otpCode   = String(Math.floor(100000 + Math.random() * 900000));
  _otpExpiry = Date.now() + 10 * 60 * 1000; // 10 min
  _otpEmail  = email;

  // Show OTP screen
  document.getElementById('checkoutStep2').style.display = 'none';
  document.getElementById('checkoutOtp').style.display = '';
  document.getElementById('checkoutBackBtn').style.visibility = 'visible';
  document.getElementById('otpTitle').textContent = 'Verify your Email';
  document.getElementById('otpSubtitle').textContent =
    `We sent a 6-digit code to ${email}. Enter it below to confirm your email address.`;
  document.getElementById('otpError').textContent = '';

  const boxes = document.querySelectorAll('.otp-box');
  boxes.forEach(b => { b.value = ''; b.classList.remove('filled'); });
  initOtpBoxes();
  boxes[0]?.focus();

  const btn = document.getElementById('otpVerifyBtn');
  btn.disabled = true;
  btn.textContent = 'Sending code…';

  try {
    await loadEmailJS();
    emailjs.init({ publicKey: ejs.publicKey });
    await emailjs.send(ejs.serviceId, ejs.templateId, {
      to_email: email,
      otp_code: _otpCode
    });
    btn.disabled = false;
    btn.textContent = 'Verify Code';
  } catch (err) {
    console.error('EmailJS error:', err);
    document.getElementById('otpError').textContent = 'Could not send code — please try again';
    btn.disabled = false;
    btn.textContent = 'Verify Code';
  }
}

function initOtpBoxes() {
  // Replace nodes to clear old listeners
  const old = Array.from(document.querySelectorAll('.otp-box'));
  old.forEach(b => { const f = b.cloneNode(true); b.parentNode.replaceChild(f, b); });

  const boxes = Array.from(document.querySelectorAll('.otp-box'));
  boxes.forEach((box, i) => {
    box.addEventListener('input', () => {
      box.value = box.value.replace(/\D/, '').slice(-1);
      box.classList.toggle('filled', !!box.value);
      if (box.value && i < boxes.length - 1) boxes[i + 1].focus();
    });
    box.addEventListener('keydown', e => {
      if (e.key === 'Backspace' && !box.value && i > 0) boxes[i - 1].focus();
    });
    box.addEventListener('paste', e => {
      e.preventDefault();
      const digits = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
      boxes.forEach((b, j) => { b.value = digits[j] || ''; b.classList.toggle('filled', !!b.value); });
      boxes[Math.min(digits.length, boxes.length - 1)].focus();
    });
  });
}

function submitOtp() {
  const entered = Array.from(document.querySelectorAll('.otp-box')).map(b => b.value).join('');
  if (entered.length < 6) {
    document.getElementById('otpError').textContent = 'Please enter all 6 digits';
    return;
  }
  if (Date.now() > _otpExpiry) {
    document.getElementById('otpError').textContent = 'Code expired — click Resend';
    return;
  }
  if (entered !== _otpCode) {
    document.getElementById('otpError').textContent = 'Incorrect code — please try again';
    // Shake the boxes
    document.getElementById('otpBoxes').classList.add('shake');
    setTimeout(() => document.getElementById('otpBoxes').classList.remove('shake'), 500);
    return;
  }

  // Verified
  setFieldState('coEmail', 'valid', '✓ Email verified');
  document.getElementById('checkoutOtp').style.display = 'none';
  proceedToPayment();
}

async function resendOtp() {
  const resendBtn = document.getElementById('otpResendBtn');
  resendBtn.style.opacity = '0.5';
  resendBtn.style.pointerEvents = 'none';
  document.getElementById('otpError').textContent = '';

  _otpCode   = String(Math.floor(100000 + Math.random() * 900000));
  _otpExpiry = Date.now() + 10 * 60 * 1000;

  try {
    const ejs = STORE.emailjs;
    await emailjs.send(ejs.serviceId, ejs.templateId, {
      to_email: _otpEmail,
      otp_code: _otpCode
    });
    showToast('New code sent!');
    const boxes = document.querySelectorAll('.otp-box');
    boxes.forEach(b => { b.value = ''; b.classList.remove('filled'); });
    boxes[0]?.focus();
  } catch (err) {
    document.getElementById('otpError').textContent = 'Failed to resend — please try again';
  }

  setTimeout(() => {
    resendBtn.style.opacity = '';
    resendBtn.style.pointerEvents = '';
  }, 30000);
}

function proceedToPayment() {
  const customer = {
    name:     document.getElementById('coName').value.trim(),
    address:  document.getElementById('coAddress').value.trim(),
    city:     document.getElementById('coCity').value.trim(),
    postcode: document.getElementById('coPostcode').value.trim(),
  };
  const recapEl = document.getElementById('coRecap');
  if (recapEl) {
    recapEl.innerHTML = `
      <div class="co-recap-row">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <span>${customer.name}</span>
      </div>
      <div class="co-recap-row">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>${customer.address}, ${customer.city}, ${customer.postcode}</span>
      </div>
      <div class="co-recap-row co-recap-total">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        <span>Order Total: £${cartTotal().toFixed(2)} — FREE delivery</span>
      </div>`;
  }
  goToStep(3);
}

function loadPayPal() {
  const clientId = STORE.paypalClientId;
  if (!clientId || clientId === 'YOUR_PAYPAL_CLIENT_ID') return;

  // Remove any previously rendered PayPal buttons (cart may have changed)
  const container = document.getElementById('paypal-button-container');
  if (!container) return;
  container.innerHTML = '';

  // Load SDK once
  const sdkId = 'paypal-sdk';
  const existing = document.getElementById(sdkId);
  const renderButtons = () => {
    if (!window.paypal) return;
    window.paypal.Buttons({
      style: { layout: 'horizontal', color: 'gold', shape: 'rect', label: 'paypal', height: 48 },
      createOrder(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: { value: cartTotal().toFixed(2), currency_code: 'GBP' },
            description: `Uni Merchant Store Order`
          }]
        });
      },
      onApprove(data, actions) {
        return actions.order.capture().then(() => {
          if (!validateCheckoutForm()) {
            showToast('Please fill in your delivery details above');
            return;
          }
          const customer = {
            name:     document.getElementById('coName').value.trim(),
            email:    document.getElementById('coEmail').value.trim(),
            phone:    document.getElementById('coPhone').value.trim(),
            address:  document.getElementById('coAddress').value.trim(),
            city:     document.getElementById('coCity').value.trim(),
            postcode: document.getElementById('coPostcode').value.trim(),
            notes:    document.getElementById('coNotes').value.trim()
          };
          const msg = formatOrderMessage(customer, 'PayPal ✅ Paid');
          window.open(`https://wa.me/${STORE.whatsapp}?text=${msg.whatsapp}`, '_blank');
          cart = [];
          saveCart();
          const badge = document.getElementById('successPaymentBadge');
          if (badge) badge.textContent = '✓ PayPal Payment Approved';
          const refEl = document.getElementById('successOrderRef');
          if (refEl) refEl.textContent = `Order Ref: ${msg.ref}`;
          [1,2,3].forEach(i => { const s = document.getElementById(`checkoutStep${i}`); if (s) s.style.display = 'none'; });
          document.getElementById('checkoutStepper')?.style && (document.querySelector('.checkout-stepper').style.display = 'none');
          document.getElementById('checkoutSuccess').classList.add('show');
        });
      },
      onError(err) {
        console.error('PayPal error', err);
        showToast('PayPal payment failed — please try WhatsApp or try again');
      }
    }).render('#paypal-button-container');
  };

  if (existing) {
    renderButtons();
  } else {
    const script = document.createElement('script');
    script.id = sdkId;
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=GBP&intent=capture`;
    script.onload = renderButtons;
    document.head.appendChild(script);
  }
}

function loadStripe() {
  const key = STORE.stripePublishableKey;
  if (!key) return;

  if (window.Stripe) {
    initStripeElement();
    return;
  }

  const sdkId = 'stripe-sdk';
  if (!document.getElementById(sdkId)) {
    const script = document.createElement('script');
    script.id = sdkId;
    script.src = 'https://js.stripe.com/v3/';
    script.onload = initStripeElement;
    document.head.appendChild(script);
  }
}

function initStripeElement() {
  if (!document.getElementById('stripe-card-number')) return;

  const elementStyle = {
    base: {
      fontSize: '14px',
      color: '#1a1a1a',
      fontFamily: 'system-ui, sans-serif',
      '::placeholder': { color: '#9ca3af' }
    },
    invalid: { color: '#e53e3e' }
  };

  const stripe = window.Stripe(STORE.stripePublishableKey);
  const elements = stripe.elements();

  // Clear previous mounts
  ['stripe-card-number','stripe-card-expiry','stripe-card-cvc'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '';
  });

  const cardNumber = elements.create('cardNumber', { style: elementStyle, showIcon: true });
  const cardExpiry = elements.create('cardExpiry', { style: elementStyle });
  const cardCvc    = elements.create('cardCvc',    { style: elementStyle });

  cardNumber.mount('#stripe-card-number');
  cardExpiry.mount('#stripe-card-expiry');
  cardCvc.mount('#stripe-card-cvc');

  // Update pay button with current total
  const oldBtn = document.getElementById('stripePayBtn');
  if (!oldBtn) return;
  oldBtn.textContent = `Pay £${cartTotal().toFixed(2)}`;

  // Clone to remove any previous event listeners
  const btn = oldBtn.cloneNode(true);
  oldBtn.parentNode.replaceChild(btn, oldBtn);

  btn.addEventListener('click', async () => {
    if (!validateCheckoutForm()) {
      showToast('Please fill in your delivery details above');
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Processing…';

    // 1. Create PaymentIntent via serverless function
    let clientSecret;
    try {
      const resp = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: cartTotal() })
      });
      const data = await resp.json();
      if (data.error) throw new Error(data.error);
      clientSecret = data.clientSecret;
    } catch (err) {
      showToast('Payment setup failed — please try again');
      btn.disabled = false;
      btn.textContent = `Pay £${cartTotal().toFixed(2)}`;
      return;
    }

    // 2. Confirm card payment
    const customer = {
      name:     document.getElementById('coName').value.trim(),
      email:    document.getElementById('coEmail').value.trim(),
      phone:    document.getElementById('coPhone').value.trim(),
      address:  document.getElementById('coAddress').value.trim(),
      city:     document.getElementById('coCity').value.trim(),
      postcode: document.getElementById('coPostcode').value.trim(),
      notes:    document.getElementById('coNotes').value.trim()
    };

    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardNumber,
        billing_details: {
            name:  document.getElementById('cardHolderName')?.value.trim() || customer.name,
            email: customer.email
          }
      }
    });

    if (error) {
      showToast(error.message || 'Payment failed — please try again');
      btn.disabled = false;
      btn.textContent = `Pay £${cartTotal().toFixed(2)}`;
      return;
    }

    if (paymentIntent.status === 'succeeded') {
      const msg = formatOrderMessage(customer, 'Card ✅ Paid via Stripe');
      window.open(`https://wa.me/${STORE.whatsapp}?text=${msg.whatsapp}`, '_blank');
      cart = [];
      saveCart();
      // Update success screen
      const badge = document.getElementById('successPaymentBadge');
      if (badge) badge.textContent = '✓ Card Payment Approved';
      const refEl = document.getElementById('successOrderRef');
      if (refEl) refEl.textContent = `Order Ref: ${msg.ref}`;
      [1,2,3].forEach(i => { const s = document.getElementById(`checkoutStep${i}`); if (s) s.style.display = 'none'; });
      document.querySelector('.checkout-stepper').style.display = 'none';
      document.getElementById('checkoutSuccess').classList.add('show');
    }
  });
}

function selectPayment(method) {
  // Check the right radio
  document.querySelectorAll('input[name="paymentMethod"]').forEach(r => {
    r.checked = r.value === method;
  });

  // Highlight selected label, reset others
  ['pmLabelCard','pmLabelPaypal'].forEach(id => {
    const lbl = document.getElementById(id);
    if (!lbl) return;
    const m = lbl.querySelector('input')?.value;
    lbl.classList.toggle('selected', m === method);
  });

  // Show matching content panel, hide others
  const panels = { card: 'pmContentCard', paypal: 'pmContentPaypal' };
  Object.entries(panels).forEach(([m, id]) => {
    const panel = document.getElementById(id);
    if (panel) panel.style.display = m === method ? '' : 'none';
  });

  // Load the relevant SDK on first selection
  if (method === 'card')   loadStripe();
  if (method === 'paypal') loadPayPal();
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

  // Reset to step 1
  goToStep(1);
  document.getElementById('checkoutSuccess').classList.remove('show');

  // Reset payment selection
  ['pmContentCard','pmContentPaypal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  ['pmLabelCard','pmLabelPaypal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('selected');
  });
  document.querySelectorAll('input[name="paymentMethod"]').forEach(r => r.checked = false);

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
  const rules = {
    coName:     { label: 'Full Name',         validate: v => v.trim().length >= 2,                                                    err: 'Full name must be at least 2 characters' },
    coEmail:    { label: 'Email Address',     validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),                            err: 'Enter a valid email — e.g. john@example.com' },
    coPhone:    { label: 'Phone / WhatsApp',  validate: v => { const d = v.replace(/\D/g,''); return d.length >= 7 && d.length <= 15; }, err: 'Phone must be 7–15 digits' },
    coCity:     { label: 'City',              validate: v => v.trim().length >= 2,                                                    err: 'Please enter your city' },
    coAddress:  { label: 'Delivery Address',  validate: v => v.trim().length >= 5,                                                    err: 'Please enter your full delivery address' },
    coPostcode: { label: 'Postcode',          validate: v => v.trim().length >= 3,                                                    err: 'Please enter a valid postcode' }
  };

  const errors = [];
  let firstInvalidEl = null;

  Object.entries(rules).forEach(([id, rule]) => {
    const el = document.getElementById(id);
    if (!el) return;
    const v = el.value;
    if (!v || !rule.validate(v)) {
      const msg = !v ? `${rule.label} is required` : rule.err;
      setFieldState(id, 'error', msg);
      errors.push(msg);
      if (!firstInvalidEl) firstInvalidEl = el;
    } else {
      setFieldState(id, 'valid');
    }
  });

  if (errors.length > 0) {
    showFormErrorPopup(errors);
    firstInvalidEl?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstInvalidEl?.focus();
    return false;
  }
  return true;
}

function showFormErrorPopup(errors) {
  // Remove any existing popup
  document.getElementById('formErrorPopup')?.remove();

  const popup = document.createElement('div');
  popup.id = 'formErrorPopup';
  popup.className = 'form-error-popup';
  popup.innerHTML = `
    <div class="form-error-popup-inner">
      <div class="form-error-header">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <span>Please fix the following:</span>
        <button class="form-error-close" onclick="document.getElementById('formErrorPopup').remove()">&times;</button>
      </div>
      <ul class="form-error-list">
        ${errors.map(e => `<li>${e}</li>`).join('')}
      </ul>
    </div>`;

  // Insert at top of step 2 body
  const body = document.querySelector('#checkoutStep2 .checkout-modal-body');
  if (body) body.insertBefore(popup, body.firstChild);

  // Auto-dismiss after 6s
  setTimeout(() => popup.remove(), 6000);
}

function formatOrderMessage(customer, paymentMethod) {
  const orderRef = 'UM' + Date.now().toString().slice(-6);
  const date = new Date().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' });
  const payment = paymentMethod || 'Cash on Delivery';

  let lines = cart.map(i =>
    `• [#${i.itemNo}] ${i.name} (${i.variant}) × ${i.qty} — £${(i.price * i.qty).toFixed(2)}`
  ).join('\n');

  return {
    ref: orderRef,
    whatsapp: encodeURIComponent(
`🛒 *New Order — ${STORE.name}*
📋 Ref: ${orderRef}
📅 ${date}
💳 *Payment: ${payment}*

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

  const msg = formatOrderMessage(customer, 'Cash on Delivery 💵');

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

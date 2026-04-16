/* ============================================================
   UNI MERCHANT STORE — Main JavaScript
   ============================================================ */

/* ── Product Data ── */
const PRODUCTS = [
  /* ── Coffee Tables ── */
  {
    id: 1,
    name: "Oval Coffee Table with Lower Shelf",
    vendor: "Homme Concept",
    slug: "oval-coffee-table-lower-shelf",
    price: 89.99,
    originalPrice: 119.99,
    badge: "sale",
    rating: 4.8,
    reviews: 124,
    category: "furniture",
    variant: "Oak Effect",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80"
    ],
    description: "Elevate your living space with this contemporary oval coffee table. Featuring an elegant oak effect finish and a practical lower shelf for extra storage, it seamlessly blends minimalist design with everyday functionality.",
    specs: { "Material": "MDF with Oak Effect Foil", "Finish": "Oak Effect", "Shape": "Oval", "Dimensions": "110 × 60 × 45 cm", "Weight Capacity": "30 kg", "Assembly": "Self-assembly (tools included)" },
    features: ["Contemporary oval design suits any living room", "Lower shelf provides stylish extra storage", "Durable oak effect finish, easy to clean", "Sturdy construction with solid legs", "Quick and easy self-assembly"]
  },
  {
    id: 2,
    name: "Round Coffee Table with Lower Shelf",
    vendor: "Homme Concept",
    slug: "round-coffee-table-lower-shelf",
    price: 79.99,
    originalPrice: null,
    badge: "new",
    rating: 4.7,
    reviews: 87,
    category: "furniture",
    variant: "Oak Effect",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
    ],
    description: "A timeless round coffee table in warm oak effect finish. The circular silhouette creates a soft, welcoming feel while the lower shelf keeps your books and décor neatly displayed.",
    specs: { "Material": "MDF with Oak Effect Foil", "Finish": "Oak Effect", "Shape": "Round", "Dimensions": "Ø 80 × 45 cm", "Weight Capacity": "25 kg", "Assembly": "Self-assembly (tools included)" },
    features: ["Soft round shape — safe corners for family homes", "Open lower shelf for books, magazines & décor", "Premium oak effect finish with natural wood grain", "Four solid legs for maximum stability", "Wipe-clean surface"]
  },
  {
    id: 3,
    name: "Minimalistic Wooden Side Table",
    vendor: "Homme Concept",
    slug: "minimalistic-wooden-side-table",
    price: 49.99,
    originalPrice: 64.99,
    badge: "sale",
    rating: 4.9,
    reviews: 203,
    category: "furniture",
    variant: "Oak Effect",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
      "https://images.unsplash.com/photo-1594617778-c1b8d415eb96?w=800&q=80",
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
    ],
    description: "The perfect companion for your sofa or armchair. This minimalistic side table in oak effect finish offers a clean, understated look that complements any interior style.",
    specs: { "Material": "MDF with Oak Effect Foil", "Finish": "Oak Effect", "Shape": "Square", "Dimensions": "40 × 40 × 55 cm", "Weight Capacity": "15 kg", "Assembly": "Self-assembly (tools included)" },
    features: ["Ultra-minimalist design fits any interior", "Ideal bedside, sofa or accent table", "Warm oak effect grain finish", "Compact footprint — great for small spaces", "Sturdy four-leg construction"]
  },
  {
    id: 4,
    name: "Set of 2 Nesting Side Tables",
    vendor: "Homme Concept",
    slug: "set-of-2-nesting-side-tables",
    price: 94.99,
    originalPrice: 124.99,
    badge: "sale",
    rating: 4.6,
    reviews: 68,
    category: "furniture",
    variant: "Oak Effect",
    image: "https://images.unsplash.com/photo-1594617778-c1b8d415eb96?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1594617778-c1b8d415eb96?w=800&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
    ],
    description: "Versatile and space-savvy, this set of two nesting side tables can be used together or separately. Stack them to save space or spread them around the room.",
    specs: { "Material": "MDF with Oak Effect Foil", "Finish": "Oak Effect", "Includes": "2 tables", "Large Table": "50 × 50 × 55 cm", "Small Table": "40 × 40 × 48 cm", "Weight Capacity": "15 kg each" },
    features: ["Set of two complementary sizes", "Nest together to save floor space", "Use separately for flexible living", "Matching oak effect finish throughout", "Great as sofa, bedside or accent tables"]
  },

  /* ── Shelves ── */
  {
    id: 5,
    name: "Floating Wall Shelf Set of 3",
    vendor: "Uni Merchant",
    slug: "floating-wall-shelf-set-of-3",
    price: 34.99,
    originalPrice: 44.99,
    badge: "sale",
    rating: 4.7,
    reviews: 156,
    category: "shelves",
    variant: "Oak Effect",
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
    ],
    description: "Transform any empty wall into a stylish display with this set of 3 floating shelves. Perfect for books, plants, photos and decorative pieces. Easy to install with all fixings included.",
    specs: { "Material": "MDF with Oak Effect Foil", "Finish": "Oak Effect", "Includes": "3 shelves + fixings", "Large Shelf": "60 × 15 × 3.8 cm", "Medium Shelf": "50 × 15 × 3.8 cm", "Small Shelf": "40 × 15 × 3.8 cm" },
    features: ["Set of 3 graduated sizes for stylish arrangements", "Easy wall-mount with all fixings included", "Sturdy enough for books, plants and décor", "Invisible bracket system for a clean look", "Matches all oak effect furniture in our range"]
  },
  {
    id: 6,
    name: "Industrial Pipe Bookshelf — 5 Tier",
    vendor: "Uni Merchant",
    slug: "industrial-pipe-bookshelf-5-tier",
    price: 129.99,
    originalPrice: null,
    badge: "new",
    rating: 4.8,
    reviews: 44,
    category: "shelves",
    variant: "Black & Oak",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
    ],
    description: "Make a bold style statement with this 5-tier industrial bookshelf. The combination of matte black metal pipe frame and rustic oak effect shelves creates a striking focal point in any room.",
    specs: { "Material": "MDF Shelves + Metal Frame", "Finish": "Oak Effect + Matte Black", "Tiers": "5", "Dimensions": "60 × 30 × 180 cm", "Weight Capacity": "20 kg per shelf", "Assembly": "Self-assembly (tools included)" },
    features: ["Bold industrial design — a real room feature", "5 generous shelves for books, plants & display", "Sturdy metal pipe frame construction", "Rubber foot pads protect floors", "Free-standing — no wall fixing needed"]
  },
  {
    id: 7,
    name: "Corner Wall Shelf Unit",
    vendor: "Uni Merchant",
    slug: "corner-wall-shelf-unit",
    price: 24.99,
    originalPrice: null,
    badge: null,
    rating: 4.5,
    reviews: 91,
    category: "shelves",
    variant: "White",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80"
    ],
    description: "Make the most of unused corner space with this clever corner shelf unit. Ideal for displaying plants, candles, books and ornaments. Simple wall mounting and a clean white finish.",
    specs: { "Material": "MDF", "Finish": "White", "Tiers": "3", "Dimensions": "25 × 25 × 65 cm", "Weight Capacity": "5 kg per tier", "Assembly": "Wall-mount (fixings included)" },
    features: ["Clever corner design maximises space", "3 tiers for plants, candles and décor", "Clean white finish suits any room", "All wall fixings included", "Lightweight and easy to install"]
  },

  /* ── Kitchen ── */
  {
    id: 8,
    name: "Marble Effect Canister Set of 3",
    vendor: "Uni Merchant",
    slug: "marble-effect-canister-set-of-3",
    price: 29.99,
    originalPrice: 39.99,
    badge: "sale",
    rating: 4.8,
    reviews: 112,
    category: "kitchen",
    variant: "White Marble",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1604719312566-8912e9667d9f?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
    ],
    description: "Keep your kitchen countertop beautifully organised with this elegant marble effect canister set. Three graduated sizes store tea, coffee, sugar and more — all with airtight bamboo lids.",
    specs: { "Material": "Ceramic with Bamboo Lid", "Finish": "White Marble Effect", "Includes": "3 canisters", "Sizes": "Small / Medium / Large", "Lid": "Airtight bamboo seal", "Dishwasher Safe": "No — hand wash only" },
    features: ["Airtight bamboo lids keep contents fresh", "Marble effect ceramic — looks luxurious", "Set of 3 graduated sizes", "Perfect for tea, coffee, sugar, pasta", "Easy to wipe clean"]
  },
  {
    id: 9,
    name: "Bamboo Utensil Holder & Organiser",
    vendor: "Uni Merchant",
    slug: "bamboo-utensil-holder-organiser",
    price: 19.99,
    originalPrice: null,
    badge: "new",
    rating: 4.6,
    reviews: 78,
    category: "kitchen",
    variant: "Natural Bamboo",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9667d9f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1604719312566-8912e9667d9f?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1604719312566-8912e9667d9f?w=800&q=80"
    ],
    description: "Declutter your kitchen countertop with this stylish bamboo utensil holder. Four separate compartments keep spatulas, spoons and ladles perfectly sorted. Naturally antibacterial and eco-friendly.",
    specs: { "Material": "100% Natural Bamboo", "Compartments": "4", "Dimensions": "22 × 22 × 20 cm", "Care": "Wipe clean — do not submerge", "Eco-Friendly": "Yes — sustainable bamboo" },
    features: ["4 compartments keep utensils sorted", "Naturally antibacterial bamboo", "Eco-friendly and sustainable material", "Wipe-clean for effortless maintenance", "Stylish enough to leave on display"]
  },
  {
    id: 10,
    name: "Wooden Dish Drying Rack",
    vendor: "Uni Merchant",
    slug: "wooden-dish-drying-rack",
    price: 39.99,
    originalPrice: 49.99,
    badge: "sale",
    rating: 4.5,
    reviews: 63,
    category: "kitchen",
    variant: "Natural Wood",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1604719312566-8912e9667d9f?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    description: "Upgrade your washing-up routine with this Scandinavian-style wooden dish drying rack. Slots for plates and cups, a cutlery holder and a draining tray — all in a beautiful natural wood finish.",
    specs: { "Material": "Beech Wood + Stainless Steel", "Finish": "Natural Wood", "Includes": "Draining tray", "Plate Capacity": "Up to 8 plates", "Dimensions": "42 × 30 × 35 cm", "Care": "Wipe clean" },
    features: ["Scandi-inspired natural wood design", "Slots for plates, cups and a cutlery holder", "Removable stainless steel draining tray", "Rubber feet prevent sliding on countertops", "Far more stylish than a standard plastic rack"]
  },

  /* ── Home Decor ── */
  {
    id: 11,
    name: "Ceramic Vase Set of 3 — Earthy Tones",
    vendor: "Uni Merchant",
    slug: "ceramic-vase-set-of-3",
    price: 32.99,
    originalPrice: null,
    badge: "new",
    rating: 4.9,
    reviews: 189,
    category: "home-decor",
    variant: "Terracotta / Cream / Sage",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80"
    ],
    description: "Add an instant touch of warmth to your home with this trio of handcrafted ceramic vases. Three graduated sizes in harmonious earthy tones — terracotta, cream and sage — perfect for dried flowers, pampas grass or standing alone.",
    specs: { "Material": "Glazed Ceramic", "Colours": "Terracotta, Cream, Sage", "Includes": "3 vases", "Tall Vase": "H 28 cm", "Medium Vase": "H 20 cm", "Small Vase": "H 14 cm" },
    features: ["Three complementary earthy tones", "Handcrafted glazed ceramic finish", "Beautiful with dried or fresh flowers", "Weighted base for stability", "Wipe clean with a damp cloth"]
  },
  {
    id: 12,
    name: "Luxury Scented Soy Candle",
    vendor: "Uni Merchant",
    slug: "luxury-scented-soy-candle",
    price: 18.99,
    originalPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 234,
    category: "home-decor",
    variant: "Cedarwood & Amber",
    image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&q=80",
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&q=80"
    ],
    description: "Fill your home with the warm, grounding scent of cedarwood and amber. Hand-poured into a reusable concrete-effect vessel, this 100% natural soy wax candle burns for up to 45 hours.",
    specs: { "Material": "100% Soy Wax", "Scent": "Cedarwood & Amber", "Burn Time": "Up to 45 hours", "Weight": "250g", "Wick": "Natural cotton", "Vessel": "Reusable concrete-effect pot" },
    features: ["100% natural soy wax — clean, long burn", "Up to 45 hours burn time", "Warm cedarwood & amber fragrance", "Hand-poured in small batches", "Reusable vessel after use"]
  },
  {
    id: 13,
    name: "Minimalist Wall Clock — 30cm",
    vendor: "Uni Merchant",
    slug: "minimalist-wall-clock-30cm",
    price: 27.99,
    originalPrice: 34.99,
    badge: "sale",
    rating: 4.7,
    reviews: 97,
    category: "home-decor",
    variant: "Black & Gold",
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&q=80"
    ],
    description: "A sleek, silent minimalist wall clock that makes a stylish statement in any room. The open-frame design with gold hands and subtle index markers adds a contemporary touch to living rooms, kitchens and offices.",
    specs: { "Material": "Metal Frame + Glass", "Finish": "Matte Black & Gold", "Diameter": "30 cm", "Movement": "Quartz — silent sweep", "Battery": "1 × AA (not included)", "Mounting": "Single hook — fixings included" },
    features: ["Silent sweep movement — no ticking", "Minimalist open-frame design", "Matte black frame with gold hands", "Easy single-hook wall mounting", "Works in living rooms, kitchens, offices & bedrooms"]
  },
  {
    id: 14,
    name: "Rectangular Coffee Table with Open Shelf",
    vendor: "Homme Concept",
    slug: "rectangular-coffee-table-open-shelf",
    price: 104.99,
    originalPrice: null,
    badge: "new",
    rating: 4.7,
    reviews: 42,
    category: "furniture",
    variant: "Oak Effect",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80"
    ],
    description: "A refined rectangular coffee table designed for the modern living room. The open lower shelf offers generous storage for books, trays and accessories, while the oak effect surface adds warmth.",
    specs: { "Material": "MDF with Oak Effect Foil", "Finish": "Oak Effect", "Shape": "Rectangular", "Dimensions": "120 × 60 × 45 cm", "Weight Capacity": "35 kg", "Assembly": "Self-assembly (tools included)" },
    features: ["Generous rectangular surface for large living rooms", "Spacious lower shelf for storage", "Premium oak effect with realistic wood grain", "Solid frame for long-lasting durability", "Matches full Homme Concept furniture range"]
  },
  {
    id: 15,
    name: "Compact Round Accent Table",
    vendor: "Homme Concept",
    slug: "compact-round-accent-table",
    price: 39.99,
    originalPrice: null,
    badge: null,
    rating: 4.5,
    reviews: 56,
    category: "furniture",
    variant: "Oak Effect",
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=800&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
      "https://images.unsplash.com/photo-1594617778-c1b8d415eb96?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
    ],
    description: "Small but perfectly formed, this compact round accent table is ideal for tight spaces. Place it beside your bed, next to your favourite chair, or use it as a plant stand — a true multitasker.",
    specs: { "Material": "MDF with Oak Effect Foil", "Finish": "Oak Effect", "Shape": "Round", "Dimensions": "Ø 40 × 50 cm", "Weight Capacity": "10 kg", "Assembly": "Self-assembly (tools included)" },
    features: ["Compact size perfect for small spaces", "Round top avoids sharp corners", "Light enough to move around freely", "Oak effect finish with natural grain detail", "Three slim legs for a modern, airy look"]
  }
];

/* ── Category Config ── */
const CATEGORIES = [
  { key: "all",        label: "All Products" },
  { key: "furniture",  label: "Furniture" },
  { key: "shelves",    label: "Shelves" },
  { key: "kitchen",    label: "Kitchen" },
  { key: "home-decor", label: "Home Decor" }
];

/* ── Store Config ── */
const STORE = {
  name:      'Uni Merchant Store',
  email:     'hello@unimerchant.store',
  whatsapp:  '447438536580',          // international format, no +
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
    cart.push({ id: productId, qty, variant: v, name: product.name, price: product.price, image: product.image });
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
          <div class="cart-item-variant">${item.variant} · Qty: ${item.qty}</div>
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
              <div class="notify-label">+44 7438 536580</div>
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
        <p style="margin-top:8px;">Questions? Message us on WhatsApp: <a href="https://wa.me/447438536580" style="color:var(--oak);font-weight:600;">+44 7438 536580</a></p>
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
        <div class="line-meta">${i.variant} · Qty ${i.qty}</div>
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
    `• ${i.name} (${i.variant}) × ${i.qty} — £${(i.price * i.qty).toFixed(2)}`
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
        `${i.name} (${i.variant}) × ${i.qty} — £${(i.price * i.qty).toFixed(2)}`
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

  /* Featured products (homepage) — show 1 from each category */
  const featuredGrid = document.getElementById('featuredGrid');
  if (featuredGrid) {
    const picks = [
      PRODUCTS.find(p => p.category === 'furniture'),
      PRODUCTS.find(p => p.category === 'shelves'),
      PRODUCTS.find(p => p.category === 'kitchen'),
      PRODUCTS.find(p => p.category === 'home-decor')
    ];
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

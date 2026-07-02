/* ============================================
   SHOPPY — dummy product data
   ============================================ */
const PRODUCTS = [
  { id:1,  name:"Handloom Cotton Kurta Set",       cat:"Fashion",     price:899,  mrp:1799, rating:4.5, reviews:312, emoji:"👘", bg:"linear-gradient(135deg,#FDE9C8,#FBCFA0)", badge:"Bestseller" },
  { id:2,  name:"Denim Jacket — Unisex",            cat:"Fashion",     price:1499, mrp:2999, rating:4.3, reviews:184, emoji:"🧥", bg:"linear-gradient(135deg,#DCE7F5,#B9CDEB)" },
  { id:3,  name:"Ethnic Jhumka Earrings",           cat:"Fashion",     price:349,  mrp:699,  rating:4.7, reviews:521, emoji:"💫", bg:"linear-gradient(135deg,#FBD9E8,#F5B3D0)", badge:"Sale" },
  { id:4,  name:"Canvas Sneakers",                  cat:"Fashion",     price:1299, mrp:2199, rating:4.4, reviews:276, emoji:"👟", bg:"linear-gradient(135deg,#E4F3E1,#C4E6C0)" },
  { id:5,  name:"True Wireless Earbuds Pro",        cat:"Electronics", price:1999, mrp:3999, rating:4.2, reviews:1043, emoji:"🎧", bg:"linear-gradient(135deg,#E1EEF7,#BFDCF0)", badge:"Bestseller" },
  { id:6,  name:"Smart Fitness Band",               cat:"Electronics", price:1499, mrp:2499, rating:4.1, reviews:867, emoji:"⌚", bg:"linear-gradient(135deg,#EFE4F8,#D9C4EF)" },
  { id:7,  name:"10000mAh Power Bank",               cat:"Electronics", price:899,  mrp:1499, rating:4.4, reviews:654, emoji:"🔋", bg:"linear-gradient(135deg,#FFF3D6,#FFE29E)" },
  { id:8,  name:"Bluetooth Party Speaker",          cat:"Electronics", price:2299, mrp:3999, rating:4.5, reviews:398, emoji:"🔊", bg:"linear-gradient(135deg,#E1F5F0,#B9E7DC)", badge:"New" },
  { id:9,  name:"Non-Stick Cookware Set (5pc)",     cat:"Home",        price:1799, mrp:3299, rating:4.6, reviews:432, emoji:"🍳", bg:"linear-gradient(135deg,#FDEBD3,#FAD3A0)" },
  { id:10, name:"Cotton Bedsheet with 2 Pillow Covers", cat:"Home",    price:699,  mrp:1299, rating:4.3, reviews:298, emoji:"🛏️", bg:"linear-gradient(135deg,#E3EEFA,#C3DBF2)" },
  { id:11, name:"Ceramic Dinner Set (16pc)",        cat:"Home",        price:1599, mrp:2799, rating:4.5, reviews:210, emoji:"🍽️", bg:"linear-gradient(135deg,#F5E7F5,#E7C7EA)", badge:"Sale" },
  { id:12, name:"Aroma Diffuser + Oils",            cat:"Home",        price:799,  mrp:1399, rating:4.2, reviews:176, emoji:"🕯️", bg:"linear-gradient(135deg,#E6F2E0,#C9E4BC)" },
  { id:13, name:"Vitamin C Face Serum",             cat:"Beauty",      price:449,  mrp:899,  rating:4.4, reviews:889, emoji:"🧴", bg:"linear-gradient(135deg,#FDE7E3,#FAC5BC)", badge:"Bestseller" },
  { id:14, name:"Herbal Hair Oil, 200ml",           cat:"Beauty",      price:299,  mrp:549,  rating:4.3, reviews:567, emoji:"🌿", bg:"linear-gradient(135deg,#E5F3E3,#C7E6C2)" },
  { id:15, name:"Matte Lipstick Combo (3pc)",       cat:"Beauty",      price:549,  mrp:999,  rating:4.6, reviews:412, emoji:"💄", bg:"linear-gradient(135deg,#FBE1EC,#F5B8D2)", badge:"New" },
  { id:16, name:"Sunscreen SPF 50",                 cat:"Beauty",      price:399,  mrp:699,  rating:4.5, reviews:723, emoji:"🧴", bg:"linear-gradient(135deg,#FFF6D9,#FDEBA6)" },
  { id:17, name:"Yoga Mat with Carry Strap",        cat:"Sports",      price:599,  mrp:1199, rating:4.4, reviews:341, emoji:"🧘", bg:"linear-gradient(135deg,#E1F0EC,#B9E0D6)" },
  { id:18, name:"Adjustable Dumbbell Set 10kg",     cat:"Sports",      price:1899, mrp:3199, rating:4.3, reviews:198, emoji:"🏋️", bg:"linear-gradient(135deg,#E9E5F7,#D0C7EF)" },
  { id:19, name:"Cricket Kit for Beginners",        cat:"Sports",      price:1299, mrp:2199, rating:4.2, reviews:156, emoji:"🏏", bg:"linear-gradient(135deg,#FDF0D8,#FADFA0)", badge:"Sale" },
  { id:20, name:"The Midnight Library — Novel",     cat:"Books",       price:249,  mrp:399,  rating:4.7, reviews:934, emoji:"📖", bg:"linear-gradient(135deg,#E3EAF7,#C4D4F0)", badge:"Bestseller" },
  { id:21, name:"Atomic Habits — Paperback",        cat:"Books",       price:299,  mrp:499,  rating:4.8, reviews:1520, emoji:"📚", bg:"linear-gradient(135deg,#FDEADD,#FAD0B4)" },
  { id:22, name:"Kids Illustrated Story Bundle",    cat:"Books",       price:449,  mrp:799,  rating:4.5, reviews:267, emoji:"🧸", bg:"linear-gradient(135deg,#F1E5FA,#DFC5F0)" },
];

const CATEGORIES = ["All", "Fashion", "Electronics", "Home", "Beauty", "Sports", "Books"];

/* ============================================
   STATE  (persisted to localStorage)
   ============================================ */
let cart = JSON.parse(localStorage.getItem("shoppy_cart") || "{}");
let wishlist = new Set(JSON.parse(localStorage.getItem("shoppy_wishlist") || "[]"));
let activeCategory = "All";
let searchTerm = "";

function saveState(){
  localStorage.setItem("shoppy_cart", JSON.stringify(cart));
  localStorage.setItem("shoppy_wishlist", JSON.stringify([...wishlist]));
}

/* ============================================
   RENDER: category chips
   ============================================ */
const categoryNav = document.getElementById("categoryNav");
CATEGORIES.forEach(cat => {
  const chip = document.createElement("button");
  chip.className = "chip" + (cat === activeCategory ? " active" : "");
  chip.textContent = cat;
  chip.dataset.cat = cat;
  chip.addEventListener("click", () => {
    activeCategory = cat;
    document.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c.dataset.cat === cat));
    renderProducts();
  });
  categoryNav.appendChild(chip);
});

/* ============================================
   RENDER: product grid
   ============================================ */
const productGrid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");
const money = n => "₹" + n.toLocaleString("en-IN");

function renderProducts(){
  const filtered = PRODUCTS.filter(p => {
    const matchCat = activeCategory === "All" || p.cat === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.cat.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  productGrid.innerHTML = "";
  emptyState.hidden = filtered.length !== 0;
  resultCount.textContent = searchTerm
    ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${searchTerm}"`
    : (activeCategory === "All" ? `Showing all ${filtered.length} products` : `${filtered.length} in ${activeCategory}`);

  filtered.forEach(p => {
    const off = Math.round(100 - (p.price / p.mrp) * 100);
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-media" style="background:${p.bg}">
        ${p.badge ? `<span class="product-badge ${p.badge === "Sale" ? "sale" : p.badge === "New" ? "new" : ""}">${p.badge}</span>` : ""}
        <button class="wish-btn ${wishlist.has(p.id) ? "active" : ""}" data-id="${p.id}" aria-label="Toggle wishlist">${wishlist.has(p.id) ? "♥" : "♡"}</button>
        <span>${p.emoji}</span>
      </div>
      <div class="product-body">
        <p class="product-cat">${p.cat}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-rating"><strong>★ ${p.rating}</strong> (${p.reviews.toLocaleString("en-IN")})</p>
        <div class="price-row">
          <span class="price-now">${money(p.price)}</span>
          <span class="price-was">${money(p.mrp)}</span>
          <span class="price-off">${off}% off</span>
        </div>
        <button class="add-btn" data-id="${p.id}">Add to Cart</button>
      </div>
    `;
    productGrid.appendChild(card);
  });

  productGrid.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => addToCart(Number(btn.dataset.id), btn));
  });
  productGrid.querySelectorAll(".wish-btn").forEach(btn => {
    btn.addEventListener("click", () => toggleWishlist(Number(btn.dataset.id), btn));
  });
}

/* ============================================
   SEARCH
   ============================================ */
document.getElementById("searchInput").addEventListener("input", e => {
  searchTerm = e.target.value.trim();
  renderProducts();
});

/* ============================================
   WISHLIST
   ============================================ */
const wishlistCount = document.getElementById("wishlistCount");
function toggleWishlist(id, btn){
  if (wishlist.has(id)) { wishlist.delete(id); }
  else { wishlist.add(id); }
  btn.classList.toggle("active");
  btn.textContent = wishlist.has(id) ? "♥" : "♡";
  wishlistCount.textContent = wishlist.size;
  saveState();
}

/* ============================================
   CART
   ============================================ */
const cartCount = document.getElementById("cartCount");
const cartItemsEl = document.getElementById("cartItems");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartDelivery = document.getElementById("cartDelivery");
const cartTotal = document.getElementById("cartTotal");

function addToCart(id, btn){
  cart[id] = (cart[id] || 0) + 1;
  saveState();
  updateCartUI();
  if (btn){
    btn.textContent = "Added ✓";
    btn.classList.add("added");
    setTimeout(() => { btn.textContent = "Add to Cart"; btn.classList.remove("added"); }, 1200);
  }
  showToast(`Added to cart — ${PRODUCTS.find(p => p.id === id).name}`);
}

function changeQty(id, delta){
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  saveState();
  updateCartUI();
}

function updateCartUI(){
  const ids = Object.keys(cart).map(Number);
  const totalItems = ids.reduce((sum, id) => sum + cart[id], 0);
  cartCount.textContent = totalItems;

  if (ids.length === 0){
    cartItemsEl.innerHTML = `<p class="cart-empty">Your cart is empty.<br>Time to go bazaar-hopping 🛍️</p>`;
    cartSubtotal.textContent = money(0);
    cartDelivery.textContent = money(0);
    cartTotal.textContent = money(0);
    return;
  }

  let subtotal = 0;
  cartItemsEl.innerHTML = ids.map(id => {
    const p = PRODUCTS.find(pr => pr.id === id);
    const qty = cart[id];
    subtotal += p.price * qty;
    return `
      <div class="cart-item">
        <div class="cart-item-media" style="background:${p.bg}">${p.emoji}</div>
        <div>
          <p class="cart-item-name">${p.name}</p>
          <p class="cart-item-price">${money(p.price)}</p>
          <div class="qty-control">
            <button data-id="${id}" data-delta="-1" aria-label="Decrease quantity">−</button>
            <span>${qty}</span>
            <button data-id="${id}" data-delta="1" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="remove-btn" data-remove="${id}">Remove</button>
      </div>
    `;
  }).join("");

  const delivery = subtotal >= 499 || subtotal === 0 ? 0 : 49;
  cartSubtotal.textContent = money(subtotal);
  cartDelivery.textContent = delivery === 0 ? "Free" : money(delivery);
  cartTotal.textContent = money(subtotal + delivery);

  cartItemsEl.querySelectorAll(".qty-control button").forEach(btn => {
    btn.addEventListener("click", () => changeQty(Number(btn.dataset.id), Number(btn.dataset.delta)));
  });
  cartItemsEl.querySelectorAll("[data-remove]").forEach(btn => {
    btn.addEventListener("click", () => {
      delete cart[Number(btn.dataset.remove)];
      saveState();
      updateCartUI();
    });
  });
}

/* ============================================
   CART DRAWER open/close
   ============================================ */
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");

function openCart(){
  cartDrawer.classList.add("open");
  overlay.classList.add("show");
}
function closeCartFn(){
  cartDrawer.classList.remove("open");
  overlay.classList.remove("show");
}
document.getElementById("cartBtn").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCartFn);
overlay.addEventListener("click", closeCartFn);

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (Object.keys(cart).length === 0){
    showToast("Your cart is empty!");
    return;
  }
  showToast("Order placed! This is a demo checkout 🎉");
  cart = {};
  saveState();
  updateCartUI();
  setTimeout(closeCartFn, 900);
});

/* ============================================
   TOAST
   ============================================ */
let toastTimer;
function showToast(msg){
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

/* ============================================
   NEWSLETTER (demo)
   ============================================ */
document.getElementById("newsletterForm").addEventListener("submit", e => {
  e.preventDefault();
  showToast("You're on the list! Watch your inbox 📬");
  e.target.reset();
});

/* ============================================
   COUNTDOWN TIMER — resets to 6hrs on load
   ============================================ */
let dealEnd = Date.now() + (6 * 60 * 60 * 1000);
function tickCountdown(){
  const diff = Math.max(0, dealEnd - Date.now());
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById("cdHours").textContent = String(h).padStart(2, "0");
  document.getElementById("cdMins").textContent = String(m).padStart(2, "0");
  document.getElementById("cdSecs").textContent = String(s).padStart(2, "0");
  if (diff === 0) dealEnd = Date.now() + (6 * 60 * 60 * 1000); // loop for demo
}
tickCountdown();
setInterval(tickCountdown, 1000);

/* ============================================
   INIT
   ============================================ */
wishlistCount.textContent = wishlist.size;
renderProducts();
updateCartUI();
/* ============================================
   SHOPPY — dummy product data
   ============================================ */
const DEFAULT_PRODUCTS = [
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
  { id:23, name:"Minimalist Leather Tote",          cat:"Fashion",     price:1699, mrp:2899, rating:4.6, reviews:214, emoji:"👜", bg:"linear-gradient(135deg,#F6E8CF,#E8D0A5)", badge:"New" },
  { id:24, name:"Portable Mini Fan",                cat:"Electronics", price:649,  mrp:1099, rating:4.2, reviews:402, emoji:"🌀", bg:"linear-gradient(135deg,#DDEFFF,#C3DBF2)" },
  { id:25, name:"Stainless Steel Water Bottle",    cat:"Home",        price:499,  mrp:899,  rating:4.4, reviews:321, emoji:"🧃", bg:"linear-gradient(135deg,#E5F3E5,#CBE4C0)" },
  { id:26, name:"Rose Quartz Roller",               cat:"Beauty",      price:699,  mrp:1199, rating:4.5, reviews:289, emoji:"💎", bg:"linear-gradient(135deg,#FCE4EC,#F6BED1)", badge:"New" },
  { id:27, name:"Resistance Bands Set",             cat:"Sports",      price:799,  mrp:1399, rating:4.3, reviews:185, emoji:"🪢", bg:"linear-gradient(135deg,#EDE7F8,#D7C7F0)" },
  { id:28, name:"Urban Planner Notebook",           cat:"Books",       price:349,  mrp:599,  rating:4.6, reviews:196, emoji:"📓", bg:"linear-gradient(135deg,#FDEDDC,#F7D1B0)" },
  { id:29, name:"Handcrafted Clay Mug",             cat:"Home",        price:399,  mrp:749,  rating:4.4, reviews:171, emoji:"☕", bg:"linear-gradient(135deg,#FAE2D4,#F1C8A2)" },
  { id:30, name:"Wireless Charging Pad",            cat:"Electronics", price:1299, mrp:1999, rating:4.5, reviews:512, emoji:"🔌", bg:"linear-gradient(135deg,#E8F0F9,#C9DDF4)", badge:"Bestseller" },
  { id:31, name:"Premium Silk Scarf",                cat:"Fashion",     price:1299, mrp:2499, rating:4.6, reviews:278, emoji:"🧣", bg:"linear-gradient(135deg,#FDE9E8,#FBCFC0)" },
  { id:32, name:"USB-C Hub 7-in-1",                  cat:"Electronics", price:1599, mrp:2799, rating:4.4, reviews:356, emoji:"🖲️", bg:"linear-gradient(135deg,#E5F1F8,#C7DFF2)" },
  { id:33, name:"Decorative Wall Mirror",            cat:"Home",        price:1299, mrp:2199, rating:4.5, reviews:193, emoji:"🪞", bg:"linear-gradient(135deg,#F3E6F9,#E3D0F0)" },
  { id:34, name:"Organic Coconut Oil",               cat:"Beauty",      price:399,  mrp:799,  rating:4.7, reviews:654, emoji:"🥥", bg:"linear-gradient(135deg,#FFF2D6,#FFE9B0)" },
  { id:35, name:"Resistance Loop Bands",             cat:"Sports",      price:499,  mrp:899,  rating:4.3, reviews:267, emoji:"🔗", bg:"linear-gradient(135deg,#E9F0F7,#D1DFF0)" },
  { id:36, name:"Art of Living — Self-Help Guide",   cat:"Books",       price:325,  mrp:599,  rating:4.6, reviews:423, emoji:"📕", bg:"linear-gradient(135deg,#F6EBD6,#ECDB98)" },
];

const PRODUCT_STORAGE_KEY = "shoppy_products";

function loadProducts(){
  const saved = localStorage.getItem(PRODUCT_STORAGE_KEY);
  if (!saved) {
    localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS;
  }
  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed) && parsed.length) {
      const merged = [...parsed];
      const existingIds = new Set(parsed.map(product => product.id));
      DEFAULT_PRODUCTS.forEach(product => {
        if (!existingIds.has(product.id)) merged.push(product);
      });
      if (merged.length !== parsed.length) {
        localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(merged));
      }
      return merged;
    }
    localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS;
  } catch {
    localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS;
  }
}

function saveProducts(products){
  PRODUCTS = products;
  localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(PRODUCTS));
}

let PRODUCTS = loadProducts();

/* ============================================
   STATE  (persisted to localStorage)
   ============================================ */
let cart = JSON.parse(localStorage.getItem("shoppy_cart") || "{}");
let wishlist = new Set(JSON.parse(localStorage.getItem("shoppy_wishlist") || "[]"));
let appliedCoupon = JSON.parse(localStorage.getItem("shoppy_coupon") || "null");
let activeCategory = "All";
let searchTerm = "";

const COUPONS = {
  SHOPPY10: 10,
  INDIA20: 20,
  MONSOON25: 25
};

function getCategories(){
  const categories = new Set(["All"]);
  PRODUCTS.forEach(product => categories.add(product.cat));
  return [...categories];
}

function saveState(){
  localStorage.setItem("shoppy_cart", JSON.stringify(cart));
  localStorage.setItem("shoppy_wishlist", JSON.stringify([...wishlist]));
  localStorage.setItem("shoppy_coupon", JSON.stringify(appliedCoupon));
}

/* ============================================
   RENDER: category chips
   ============================================ */
function renderCategoryNav(){
  const categoryNav = document.getElementById("categoryNav");
  if (!categoryNav) return;
  categoryNav.innerHTML = "";
  getCategories().forEach(cat => {
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
}

renderCategoryNav();

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
      <div class="product-media" style="background:linear-gradient(135deg, var(--surface) 0%, var(--paper) 100%); cursor:pointer;">
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

  productGrid.querySelectorAll(".product-media").forEach(media => {
    media.addEventListener("click", (e) => {
      if (e.target.closest(".wish-btn")) return;
      const productId = media.parentElement.querySelector(".add-btn").dataset.id;
      window.location.href = `product-info.html?id=${productId}`;
    });
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
const cartDiscountRow = document.getElementById("cartDiscountRow");
const cartDiscountLabel = document.getElementById("cartDiscountLabel");
const cartDiscount = document.getElementById("cartDiscount");
const cartTotal = document.getElementById("cartTotal");
const couponInput = document.getElementById("couponInput");
const applyCouponBtn = document.getElementById("applyCouponBtn");
const removeCouponBtn = document.getElementById("removeCouponBtn");
const couponHint = document.getElementById("couponHint");
const checkoutForm = document.getElementById("checkoutForm");
const deliveryAddress = document.getElementById("deliveryAddress");
const phoneNumber = document.getElementById("phoneNumber");
const emailAddress = document.getElementById("emailAddress");
const paymentDetails = document.getElementById("paymentDetails");
const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');

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

function applyCoupon(){
  const code = couponInput.value.trim().toUpperCase();
  if (!code){
    showToast("Enter a coupon code.");
    return;
  }
  const discount = COUPONS[code];
  if (!discount){
    showToast("Invalid coupon code.");
    return;
  }
  appliedCoupon = { code, value: discount };
  saveState();
  updateCartUI();
  showToast(`Coupon applied: ${code} (${discount}% off)`);
}

function removeCoupon(){
  if (!appliedCoupon) return;
  appliedCoupon = null;
  saveState();
  updateCartUI();
  showToast("Coupon removed.");
}

function updateCouponPanel(subtotal){
  couponHint.textContent = appliedCoupon
    ? `Coupon ${appliedCoupon.code} applied.`
    : "Admin-generated coupons are available here.";
  couponInput.value = appliedCoupon ? appliedCoupon.code : "";
  removeCouponBtn.hidden = !appliedCoupon;
  applyCouponBtn.disabled = subtotal === 0;
}

function updateCartUI(){
  const ids = Object.keys(cart).map(Number);
  const totalItems = ids.reduce((sum, id) => sum + cart[id], 0);
  cartCount.textContent = totalItems;

  if (ids.length === 0){
    cartItemsEl.innerHTML = `<p class="cart-empty">Your cart is empty.<br>Time to go bazaar-hopping 🛍️</p>`;
    cartSubtotal.textContent = money(0);
    cartDelivery.textContent = money(0);
    cartDiscountRow.hidden = true;
    cartTotal.textContent = money(0);
    updateCouponPanel(0);
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

  const delivery = subtotal >= 499 ? 0 : 49;
  const discountValue = appliedCoupon ? Math.min(Math.round(subtotal * appliedCoupon.value / 100), subtotal) : 0;
  const total = Math.max(0, subtotal + delivery - discountValue);

  cartSubtotal.textContent = money(subtotal);
  cartDelivery.textContent = delivery === 0 ? "Free" : money(delivery);
  if (discountValue > 0){
    cartDiscountRow.hidden = false;
    cartDiscountLabel.textContent = `${appliedCoupon.code} (${appliedCoupon.value}%)`;
    cartDiscount.textContent = `- ${money(discountValue)}`;
  } else {
    cartDiscountRow.hidden = true;
  }
  cartTotal.textContent = money(total);
  updateCouponPanel(subtotal);

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

applyCouponBtn.addEventListener("click", applyCoupon);
removeCouponBtn.addEventListener("click", removeCoupon);
couponInput.addEventListener("keydown", event => {
  if (event.key === "Enter"){
    event.preventDefault();
    applyCoupon();
  }
});

/* ============================================
   CART DRAWER open/close
   ============================================ */
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
let previousBodyOverflow = "";
let previousHtmlOverflow = "";

function openCart(){
  previousBodyOverflow = document.body.style.overflow;
  previousHtmlOverflow = document.documentElement.style.overflow;
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
  cartDrawer.classList.add("open");
  overlay.classList.add("show");
}
function closeCartFn(){
  cartDrawer.classList.remove("open");
  overlay.classList.remove("show");
  document.body.style.overflow = previousBodyOverflow || "";
  document.documentElement.style.overflow = previousHtmlOverflow || "";
}
document.getElementById("cartBtn").addEventListener("click", () => {
  if (window.location.href.includes("cart.html")) {
    // if already on cart page, keep legacy drawer behavior
    openCart();
  } else {
    // navigate to dedicated cart page
    window.location.href = "cart.html";
  }
});
document.getElementById("closeCart").addEventListener("click", closeCartFn);
overlay.addEventListener("click", closeCartFn);

const backToTopBtn = document.getElementById("backToTop");
function updateBackToTop(){
  if (!backToTopBtn) return;
  backToTopBtn.classList.toggle("visible", window.scrollY > 400);
}
backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("scroll", updateBackToTop);
window.addEventListener("load", updateBackToTop);

function renderPaymentDetails(){
  const selected = document.querySelector('input[name="paymentMethod"]:checked')?.value || "cod";

  if (selected === "upi"){
    paymentDetails.innerHTML = `
      <p class="payment-hint">Please share your UPI ID for a quick and secure payment.</p>
      <label class="field">
        <span>UPI ID</span>
        <input id="upiId" type="text" placeholder="yourname@upi" required>
      </label>
    `;
  } else if (selected === "card"){
    paymentDetails.innerHTML = `
      <p class="payment-hint">Your card details are secured for this demo checkout.</p>
      <label class="field">
        <span>Card Number</span>
        <input id="cardNumber" type="text" placeholder="1234 5678 9012 3456" required>
      </label>
      <div class="field-grid">
        <label class="field">
          <span>Name on Card</span>
          <input id="cardName" type="text" placeholder="Aarav Sharma" required>
        </label>
        <label class="field">
          <span>Expiry</span>
          <input id="cardExpiry" type="text" placeholder="MM/YY" required>
        </label>
      </div>
    `;
  } else {
    paymentDetails.innerHTML = `<p class="payment-hint">Pay with cash when your order arrives.</p>`;
  }
}

function validateCheckout(){
  if (Object.keys(cart).length === 0){
    showToast("Your cart is empty!");
    return null;
  }

  const address = deliveryAddress.value.trim();
  const phone = phoneNumber.value.trim();
  const email = emailAddress.value.trim();

  if (!address || !phone || !email){
    showToast("Please complete your delivery details.");
    return null;
  }

  if (!/^\d{10}$/.test(phone)){
    showToast("Enter a valid 10-digit phone number.");
    return null;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    showToast("Enter a valid email address.");
    return null;
  }

  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || "cod";

  if (paymentMethod === "upi"){
    const upiId = document.getElementById("upiId")?.value.trim();
    if (!upiId){
      showToast("Please enter your UPI ID.");
      return null;
    }
  }

  if (paymentMethod === "card"){
    const cardNumber = document.getElementById("cardNumber")?.value.trim();
    const cardName = document.getElementById("cardName")?.value.trim();
    const cardExpiry = document.getElementById("cardExpiry")?.value.trim();

    if (!cardNumber || !cardName || !cardExpiry){
      showToast("Please complete your card details.");
      return null;
    }
  }

  return { address, phone, email, paymentMethod };
}

paymentRadios.forEach(radio => radio.addEventListener("change", renderPaymentDetails));
renderPaymentDetails();

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (Object.keys(cart).length === 0){
    showToast("Your cart is empty!");
    return;
  }

  const orderItems = Object.entries(cart).map(([id, qty]) => {
    const product = PRODUCTS.find(item => item.id === Number(id));
    return {
      id: Number(id),
      name: product?.name || "Product",
      qty,
      price: product?.price || 0
    };
  });

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = subtotal >= 499 || subtotal === 0 ? 0 : 49;
  const discount = appliedCoupon ? Math.min(Math.round(subtotal * appliedCoupon.value / 100), subtotal) : 0;
  const total = subtotal + delivery - discount;

  const draft = {
    address: deliveryAddress.value.trim(),
    phone: phoneNumber.value.trim(),
    email: emailAddress.value.trim(),
    paymentMethod: document.querySelector('input[name="paymentMethod"]:checked')?.value || "cod",
    coupon: appliedCoupon ? appliedCoupon.code : null,
    discount
  };

  localStorage.setItem("shoppy_checkout_summary", JSON.stringify({
    items: orderItems,
    subtotal,
    delivery,
    total,
    createdAt: new Date().toISOString()
  }));
  localStorage.setItem("shoppy_checkout_draft", JSON.stringify(draft));

  showToast("Preparing your payment...");
  setTimeout(() => {
    window.location.href = "payment.html";
  }, 250);
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

const loginTrigger = document.getElementById("loginTrigger");
const loginDropdown = document.getElementById("loginDropdown");
if (loginTrigger && loginDropdown) {
  loginTrigger.addEventListener("click", event => {
    event.stopPropagation();
    loginDropdown.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    loginDropdown.classList.remove("show");
  });
}

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

// Handle URL search parameters
const params = new URLSearchParams(window.location.search);
const urlSearch = params.get('search');
if (urlSearch) {
  searchTerm = decodeURIComponent(urlSearch);
  document.getElementById("searchInput").value = searchTerm;
}

renderProducts();
updateCartUI();
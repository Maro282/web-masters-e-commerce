import { getDataFromLocalStorage } from "./storage.js";
import { cartCounter } from "./navbar.js";

// ==================== Dom tags =============================
const clearCartBtn = document.getElementById("clear-cart");

// ==== Displaying cart data ====
function displayCartData() {
  const cartItems = document.querySelector(".cart-items");
  const cartEmpty = document.getElementById("cartEmpty");

  const cart = getDataFromLocalStorage();
  cartCounter.textContent = cart.length;

  if (cart.length == 0) {
    cartEmpty.classList.add("d-block");
    cartEmpty.classList.remove("d-none");
    cartItems.innerHTML = "";
    displayClearCartBtn();
    return;
  }

  cartEmpty.classList.add("d-none");
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const element = document.createElement("div");
    element.innerHTML = `
           <div class="item p-3 bg-white border-2 border-bottom">
                  <div class="item-name-pic d-flex align-items-center column-gap-2">
                    <div class="item-pic-box">
                      <img
                        src="${item.imageUrl}"
                        class="w-100 h-100 object-fit-cover"
                      />
                    </div>
                    <p class="mb-0 item-name">${item.name}</p>
                  </div>

                  <div class="item-price">
                    <p class="mb-0">${item.price} EGP</p>
                  </div>

                  <div
        class=" "
      >
        <div  class="item-quantity d-flex align-items-center justify-content-center">
          <button class="quantity-btn decrease" data-id="${item.id}">-</button>
          <input
            type="number"
            min="0"
            max="${item.inStock}"
            class="quantity-input"
            value="${item.quantity}"
            data-id="${item.id}"
          />
          <button class="quantity-btn increase" data-id="${item.id}">+</button>
        </div>
        ${
          item.quantity == item.inStock
            ? '<span class="text-danger out-of-stock">There is no more in stock</span>'
            : ""
        }
      </div>

                  <div class="item-total">
                    <p class="mb-0">${item.price * item.quantity} EGP</p>
                  </div>

                  <div class="item-action text-center">
                    <button class=" text-white remove-btn" data-id="${
                      item.id
                    }" >Remove</button>
                  </div>
                </div>
          `;
    cartItems.appendChild(element);
  });

  // Adding event listener to decrease button
  document.querySelectorAll(".decrease").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let productId = parseInt(e.target.getAttribute("data-id"));
      let cart = getDataFromLocalStorage();
      let product = cart.find((item) => item.id == productId);
      if (product) updateQuantity(productId, product.quantity - 1);
    });
  });

  // Adding event listener to increse button
  document.querySelectorAll(".increase").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let productId = parseInt(e.target.getAttribute("data-id"));
      let cart = getDataFromLocalStorage();
      let product = cart.find((item) => item.id == productId);
      if (product) updateQuantity(productId, product.quantity + 1);
    });
  });

  // Adding event listener ro remove button
  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = parseInt(e.target.getAttribute("data-id"));
      removeFromCart(productId);
    });
  });
}

// ==== clear cart ====
function clearCart() {
  localStorage.removeItem("cart");
  displayCartData();
  updateSummary();
  displayClearCartBtn();
}

// Save cart in localstorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ===== Remove from cart =====
function removeFromCart(productId) {
  let cart = getDataFromLocalStorage();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
  displayCartData();
  updateSummary();
}

// Updating quantity
export function updateQuantity(productId, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(productId);
    return;
  }

  let cart = getDataFromLocalStorage();

  let product = cart.find((item) => item.id == productId);

  if (product) {
    if (product.inStock < newQuantity) {
      product.quantity = product.inStock;
    } else {
      product.quantity = newQuantity;
    }
    saveCart(cart);
    displayCartData();
    updateSummary();
  }
}

//update summary
function updateSummary() {
  const cart = getDataFromLocalStorage();
  const subtotal = document.querySelector(".subtotal");
  const tax = document.querySelector(".tax");
  const total = document.querySelector(".total");
  if (cart.length != 0) {
    const subtotalResult = cart.reduce((sum, p) => {
      return (sum += p.price * p.quantity);
    }, 0);
    const taxResult = subtotalResult * 0.1;
    const totalResult = subtotalResult + taxResult;
    subtotal.innerHTML = `${subtotalResult} EGP`;
    tax.innerHTML = `${taxResult} EGP`;
    total.innerHTML = `${totalResult} EGP`;
  } else {
    subtotal.innerHTML = `0.00 EGP`;
    tax.innerHTML = `0.00 EGP`;
    total.innerHTML = `0.00 EGP`;
  }
}

// =========== Handle events =================
window.addEventListener("DOMContentLoaded", () => {
  displayCartData();
  displayClearCartBtn();
  updateSummary();
  clearCartBtn.addEventListener("click", () => {
    clearCart();
  });
});

function displayClearCartBtn() {
  const cart = getDataFromLocalStorage();
  if (cart.length == 0) {
    clearCartBtn.classList.add("d-none");
  } else {
    clearCartBtn.classList.remove("d-none");
  }
}

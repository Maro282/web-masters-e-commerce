// ==== Read cart array from local storage ======
import { updateQuantity } from "./cartPage.js";
import { productsData } from "./productsData.js";
import { cartCounter } from "./navbar.js";

export function getDataFromLocalStorage() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// ====== Add product function ======
export function addProduct(productId) {
  let cart = getDataFromLocalStorage();
  const product = cart.find((p) => productId == p.id);
  if (product) {
    updateQuantity(productId, product.quantity + 1);
  } else {
    const product = productsData.find((p) => p.id == productId);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    cartCounter.textContent = cart.length;
  }
}

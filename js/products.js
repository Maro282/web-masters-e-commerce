// ====================== Marwan ===================
import { addProduct } from "./storage.js";
// ====================== End Marwan====================

import { productsData } from "./productsData.js";
// console.log(productsData);
const categoryFilter = document.querySelector(".category-filter");
const checkboxEles = document.querySelectorAll("input[type='checkbox']");
const clearFilterBtn = document.querySelector(".clear-filter");

let filteredProducts = productsData;
let productEle = "";

categoryFilter.addEventListener("change", (e) => {
  const filterData = new FormData(e.target.form);
  const selectedCategory = filterData.getAll("category");

  if (selectedCategory[0]) {
    console.log("Filtered");
    filteredProducts = productsData.filter((product) => {
      return (
        selectedCategory.includes(product.category) ||
        (selectedCategory.includes("wedding") && product.forWedding)
      );
    });
    generateProducts();
  } else {
    filteredProducts = productsData;
    generateProducts();
  }
});

function generateProducts() {
  productEle = filteredProducts
    .map((product) => {
      return `<div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card product-card text-center">
                    <img src="${product.imageUrl}" class="img-fluid" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text"><small class="price text-muted">$${product.price}</small></p>
                    </div>
                    <button class="btn-add"  data-id="${product.id}">Add To Cart</button>
                </div>
            </div>`;
    })
    .join("");

  document.querySelector(".products-box .row").innerHTML = "";
  document
    .querySelector(".products-box .row")
    .insertAdjacentHTML("beforeend", productEle);
}

generateProducts();

clearFilterBtn.addEventListener("click", () => {
  checkboxEles.forEach((checkbox) => (checkbox.checked = false));
  filteredProducts = productsData;
  generateProducts();
});

// ====================Marwan===================
// Adding event listener to add button to add product in the cart

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelectorAll(".btn-add").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = parseInt(e.target.getAttribute("data-id"));

      addProduct(productId);
    });
  });
});
// ===================End Marwan ===============

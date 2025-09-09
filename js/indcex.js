import { cartCounter } from "./navbar.js";
import { getDataFromLocalStorage } from "./storage.js";
const cart = getDataFromLocalStorage();
cartCounter.textContent = cart.length;

<<<<<<< HEAD:navbar.js
// ================== Export ==================
export const cartCounter = document.getElementById("cartCount");
// ============================================
=======
// ==================Marwan==========================
// exporting cart icon counter to cartpage.js to
//  handle it's textContent when adding product

export const cartCounter = document.getElementById("cartCount");
// ==================End Marwan =====================
>>>>>>> 773d8f0c519e065481577e2190a35f30355177c6:js/navbar.js

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.getElementById("navLinks");
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const searchContainer = document.querySelector(".search-container");
  const cartLink = document.getElementById("cartLink");

  const currentPage = window.location.pathname.split("/").pop();
  const loggedIn = localStorage.getItem("loggedIn");

  // Navbar Links
  if (navLinks) {
    if (currentPage === "login.html" || currentPage === "register.html") {
      navLinks.innerHTML = "";
    } else {
      if (loggedIn === "true") {
        navLinks.innerHTML = `
          <li class="nav-item"><a class="nav-link custom-link" href="index.html">PRODUCTS</a></li>
          <li class="nav-item"><a class="nav-link custom-link" href="shop.html">SHOP</a></li>
          <li class="nav-item"><a class="nav-link custom-link" href="weddings.html">WEDDINGS</a></li>
          <li class="nav-item"><a class="nav-link custom-link" href="services.html">SERVICES</a></li>
          <li class="nav-item"><a class="nav-link custom-link" href="contact.html">CONTACT</a></li>
        `;
      } else {
        navLinks.innerHTML = "";
      }
    }
  }

<<<<<<< HEAD:navbar.js
  // Login / Logout buttons + Show/Hide search & cart
=======
  // Login / Logout buttons
>>>>>>> 773d8f0c519e065481577e2190a35f30355177c6:js/navbar.js
  if (loggedIn === "true") {
    if (loginBtn) loginBtn.classList.add("d-none");
    if (logoutBtn) logoutBtn.classList.remove("d-none");
    if (searchContainer) searchContainer.classList.remove("d-none");
    if (cartLink) cartLink.classList.remove("d-none");

    if (logoutBtn) {
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("loggedIn");
        alert("You have logged out!");
        window.location.href = "index.html";
      });
    }
  } else {
    if (loginBtn) loginBtn.classList.remove("d-none");
    if (logoutBtn) logoutBtn.classList.add("d-none");
    if (searchContainer) searchContainer.classList.add("d-none");
    if (cartLink) cartLink.classList.add("d-none");
  }

  // Toggle Password
  document.querySelectorAll(".toggle-password").forEach((icon) => {
    icon.addEventListener("click", () => {
      const targetId = icon.getAttribute("data-target");
      const input = document.getElementById(targetId);
      if (!input) return;

      if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
      }
    });
  });

  // Login
<<<<<<< HEAD:navbar.js
  const loginForm = document.getElementById("loginForm");
=======
  let loginForm = document.getElementById("loginForm");
>>>>>>> 773d8f0c519e065481577e2190a35f30355177c6:js/navbar.js
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("username").value.trim();
      const passwordInput = document.getElementById("password").value;

<<<<<<< HEAD:navbar.js
      const storedUser = JSON.parse(localStorage.getItem("userData"));
      if (storedUser && emailInput === storedUser.email && passwordInput === storedUser.password) {
=======
      let storedUser = JSON.parse(localStorage.getItem("userData"));
      if (
        storedUser &&
        emailInput === storedUser.email &&
        passwordInput === storedUser.password
      ) {
>>>>>>> 773d8f0c519e065481577e2190a35f30355177c6:js/navbar.js
        localStorage.setItem("loggedIn", "true");
        alert("Login successful!");
        window.location.href = "index.html";
      } else {
        alert("Invalid login. Please check your email and password.");
      }
    });
  }

  // Register
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newUsername = document.getElementById("newUsername").value.trim();
      const newEmail = document.getElementById("newEmail").value.trim();
      const newPassword = document.getElementById("newPassword").value;

      if (!newUsername || !newEmail || !newPassword) {
        alert("Please fill all fields.");
        return;
      }

      if (newPassword.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
      }

<<<<<<< HEAD:navbar.js
      const userData = { username: newUsername, email: newEmail, password: newPassword };
=======
      let userData = {
        username: newUsername,
        email: newEmail,
        password: newPassword,
      };
>>>>>>> 773d8f0c519e065481577e2190a35f30355177c6:js/navbar.js
      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Registration successful! Please login.");
      window.location.href = "login.html";
    });
  }
<<<<<<< HEAD:navbar.js
=======

  // Search Toggle
  let searchIcon = document.querySelector(".search-icon");
  let searchContainer = document.querySelector(".search-container");
>>>>>>> 773d8f0c519e065481577e2190a35f30355177c6:js/navbar.js

  // Search Toggle
  const searchIcon = document.querySelector(".search-icon");
  if (searchIcon && searchContainer) {
    searchIcon.addEventListener("click", () => {
      searchContainer.classList.toggle("active");
      const input = searchContainer.querySelector(".search-input");
      if (input) input.focus();
    });
  }
<<<<<<< HEAD:navbar.js
});
=======
});
>>>>>>> 773d8f0c519e065481577e2190a35f30355177c6:js/navbar.js

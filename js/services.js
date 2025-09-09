document.addEventListener("DOMContentLoaded", async () => {
  const host = document.getElementById("navbar-placeholder");
  try {
    const r = await fetch("navbar.html", { cache: "no-store" });
    if (r.ok) {
      host.innerHTML = await r.text();
      host.querySelectorAll("a").forEach(a => {
        const href = (a.getAttribute("href") || "").toLowerCase();
        if (href.endsWith("services.html")) a.classList.add("active");
      });
    }
  } catch {}
});

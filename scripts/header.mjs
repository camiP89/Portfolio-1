export function createHeader() {
 const navContainer = document.getElementById("nav-container");

 if (!navContainer) return;

 navContainer.innerHTML = `
   <a href="#about">About</a>
   <p class="nav-p">Portfolio:</p>
   <a class="sub-link" href="#rainydays">RainyDays</a>
   <a class="sub-link" href="#museum">Community Science Museum</a>
   <a class="sub-link" href="#cakes">Cakes & Comfort</a>
   <a href="#contact">Contact</a>
  `;
}
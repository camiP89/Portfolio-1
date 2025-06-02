import { createCarousel } from "./carousel.mjs";
import { createContactForm } from "./contact.mjs";

document.addEventListener('DOMContentLoaded', () => {
  const { moveToSection, sectionArray } = createCarousel('#carousel');
  createContactForm();

 document.querySelectorAll('a[href^="#"]').forEach(link => {
   link.addEventListener('click', function (e) {
     e.preventDefault();

     const targetId = this.getAttribute('href').slice(1); 
     const targetIndex = sectionArray.findIndex(section => section.id === targetId);

     if (targetIndex !== -1) {
       moveToSection(targetIndex);
      }
    });
  });
});
export function createContactForm(containerId = 'form-container') {
 const formContainer = document.getElementById('form-container');
 if (!formContainer) {
  console.error(`Container with ID "${containerId}" not found.`);
  return;
 }

 const container = document.createElement("section");
 container.classList.add("contact-container");

 const contactForm = document.createElement("form");
 contactForm.method = "POST";
 contactForm.classList.add("contact-form");
   
 const contactFields = [
   { label: "Name" , id: "name", type: "text", placeholder: "Enter name", required: true},
   { label: "Email" , id: "email", type: "text", placeholder: "Enter email", required: true},
 ];

 contactFields.forEach(field => {
   const fieldLabel = document.createElement("label");
   fieldLabel.textContent = field.label;
   fieldLabel.setAttribute("for", field.id);

   const fieldInput = document.createElement("input");
   fieldInput.id = field.id;
   fieldInput.type = field.type;
   fieldInput.placeholder = field.placeholder;
   fieldInput.required = field.required;

   contactForm.appendChild(fieldLabel);
   contactForm.appendChild(fieldInput);
 });

 const messageLabel = document.createElement("label");
 messageLabel.textContent = "Message";
 messageLabel.setAttribute("for", "message");

 const messageTextarea = document.createElement("textarea");
 messageTextarea.id = "message";
 messageTextarea.placeholder = "Enter message";
 messageTextarea.required = true;

 contactForm.appendChild(messageLabel);
 contactForm.appendChild(messageTextarea);

 const sendButton = document.createElement("button");
 sendButton.type = "submit";
 sendButton.textContent = "Send";

 contactForm.appendChild(sendButton);
 container.appendChild(contactForm);
 formContainer.appendChild(container);

 contactForm.addEventListener('submit', (event) => {
   event.preventDefault();  

   const name = document.getElementById("name").value.trim();
   const email = document.getElementById("email").value.trim();
   const message = document.getElementById("message").value.trim();

   if (!name || !email || !message) {
     alert("Please fill in all fields.");
     return;
   }

   alert("Message sent! Thank you for reaching out.");
   contactForm.reset();
 });
}
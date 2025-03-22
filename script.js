document
  .getElementById("subscribe-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("email");
    const messageDiv = document.getElementById("message");

    if (emailInput.value) {
      messageDiv.textContent = "Thank you for subscribing!";
      messageDiv.style.color = "green";
      emailInput.value = "";
    } else {
      messageDiv.textContent = "Please enter a valid email address.";
      messageDiv.style.color = "red";
    }
  });

// JavaScript functions for button actions
function sendInquiry() {
  alert("Inquiry form will open.");
}

function openWhatsapp() {
  window.location.href = "https://wa.me/919825081806";
}

function bookAppointment() {
  alert("Appointment booking page will open.");
}

function callNow() {
  window.location.href = "tel:+919825081806";
}

function sendInquiry() {
  alert("Inquiry form coming soon!");
}

function openWhatsApp() {
  window.location.href = "https://wa.me/919825081806";
}

function bookAppointment() {
  alert("Booking appointment feature coming soon!");
}

function callNumber() {
  window.location.href = "tel:+919876543221";
}
// JavaScript functions for button actions
function sendInquiry() {
  alert("Inquiry form will open.");
}

function openWhatsapp() {
  window.location.href = "https://wa.me/919825081806";
}

function bookAppointment() {
  alert("Appointment booking page will open.");
}

function callNow() {
  window.location.href = "tel:+919825081806";
}

// Footer......//
document.querySelector(".whatsapp").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

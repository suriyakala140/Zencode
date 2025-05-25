// Navbar toggle function

function toggleMenu() 
{
      const mobileMenu = document.getElementById('mobileMenu');
      mobileMenu.classList.toggle('show').classList.toggle('active');
 }


 // Simple form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Simple client-side validation message
  alert("Thank you for contacting us! We'll get back to you soon.");
  this.reset();
});



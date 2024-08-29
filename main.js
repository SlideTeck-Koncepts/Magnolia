const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileMenuItems = document.querySelector(".mobile-menu-items");
const allMobileMenuLinks = document.querySelectorAll(".mobile-menu-items a");



menuIcon.addEventListener("click", () => {
  mobileMenuItems.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuItems.classList.remove("active");
});

allMobileMenuLinks.forEach((l) => { 
  l.addEventListener("click", () => {
    mobileMenuItems.classList.remove("active");
  });
});



 // Function to scroll to the top of the page
 function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


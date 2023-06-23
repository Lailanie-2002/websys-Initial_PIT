// // navhighlight.js

// // Get all the navigation links
// const navLinks = document.querySelectorAll('.nav ul li a');

// // Add event listeners to each navigation link
// navLinks.forEach(link => {
//   link.addEventListener('click', function() {
//     // Remove the 'active' class from all navigation links
//     navLinks.forEach(link => link.classList.remove('active'));
//     // Add the 'active' class to the clicked navigation link
//     this.classList.add('active');
//   });
// });

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav a').
forEach(link => {
  if(link.href.includes('${activePage')){
    link.classList.add('active');
  }
})

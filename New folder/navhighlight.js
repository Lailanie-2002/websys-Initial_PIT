// // Get all the <a> elements within the navigation
// const navLinks = document.querySelectorAll('.nav li');

// // Add event listeners to each link
// navLinks.forEach(link => {
//   link.addEventListener('click', (event) => {
//     // Prevent the default link behavior
//     event.preventDefault();

//     // Check if the clicked link is already active
//     const isActive = link.classList.contains('active');

//     // Remove the "active" class from all links
//     navLinks.forEach(link => {
//       link.classList.remove('active');
//     });

//     // Add the "active" class to the clicked link if it wasn't already active
//     if (!isActive) {
//       link.classList.add('active');
//     }
//   });
// });

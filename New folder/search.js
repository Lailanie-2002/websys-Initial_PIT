document.addEventListener("DOMContentLoaded", function() {
  var searchBtn = document.querySelector(".search a");
  var searchBar = document.querySelector(".search-bar");

  searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    searchBar.classList.toggle("show");
  });
});

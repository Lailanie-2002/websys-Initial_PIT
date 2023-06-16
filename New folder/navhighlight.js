// JavaScript to handle the highlighting of clicked navigation items
		document.addEventListener("DOMContentLoaded", function() {
			var navItems = document.querySelectorAll(".nav li");

			navItems.forEach(function(item) {
				item.addEventListener("click", function() {
					// Remove the 'highlight' class from all navigation items
					navItems.forEach(function(navItem) {
						navItem.classList.remove("highlight");
					});

					// Add the 'highlight' class to the clicked navigation item
					this.classList.add("highlight");
				});
			});
		});

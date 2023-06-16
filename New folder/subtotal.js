//cart count

document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.cart');
  const cartWindow = document.querySelector('.cart-window');
  const cartWrapper = document.querySelector('.cart-wrapper');
  const subtotalElement = document.querySelector('.subtotal');
  const cartIcon = document.querySelector('.after-content .cart-icon');
  const cartCount = cartIcon.querySelector('.cart-count');
  let subtotal = 0;
  let itemCount = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const furnitureItem = this.parentNode.parentNode;
      const furnitureName = furnitureItem.querySelector('.p').textContent;
      const furniturePriceElement = furnitureItem.querySelector('.price');
      const furniturePrice = parseFloat(furniturePriceElement.textContent.replace(/[^0-9.-]+/g, ''));

      // Create a new cart item element
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <h3>${furnitureName}</h3>
        <p class="price">Price: ₱${furniturePrice.toFixed(2)}</p>
      `;

      // Insert the new cart item into the cartWrapper
      cartWrapper.appendChild(cartItem);

      // Update subtotal
      subtotal += furniturePrice;
      subtotalElement.textContent = `Subtotal: ₱${subtotal.toFixed(2)}`;

      // Update cart count
      itemCount++;
      cartCount.textContent = itemCount;
      cartIcon.classList.add('non-empty');

      // Show the cart window
      cartWindow.classList.remove('hide');

      // Add event listener to the cart icon for toggling the cart window
      cartIcon.addEventListener('click', function() {
        cartWindow.classList.toggle('hide');
      });
    });
  });
});

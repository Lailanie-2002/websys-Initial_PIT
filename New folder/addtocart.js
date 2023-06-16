// document.addEventListener('DOMContentLoaded', function() {
//   const addToCartButtons = document.querySelectorAll('.cart');
//   const cartWindow = document.querySelector('.cart-window');
//   const cartWrapper = document.querySelector('.cart-wrapper');
//   const subtotalElement = document.querySelector('.subtotal');
//   let subtotal = 0;

//   addToCartButtons.forEach(button => {
//     button.addEventListener('click', function() {
//       const furnitureItem = this.parentNode.parentNode;
//       const furnitureName = furnitureItem.querySelector('.p').textContent;
//       const furniturePriceElement = furnitureItem.querySelector('.price');
//       const furniturePrice = parseFloat(furniturePriceElement.textContent.replace(/[^0-9.-]+/g, ''));

//       // Create a new cart item element
//       const cartItem = document.createElement('div');
//       cartItem.classList.add('cart-item');
//       cartItem.innerHTML = `
//         <img src="${furnitureItem.querySelector('.img').src}" alt="Furniture Image">
//         <div class="details">
//           <h3>${furnitureName}</h3>
//           <p>
//             <span class="quantity">Quantity: 1</span>
//             <span class="price">Price: ₱${furniturePrice.toFixed(2)}</span>
//           </p>
//         </div>
//         <div class="cancel"><i class="fa-solid fa-xmark"></i></div>
//       `;

//       // Insert the new cart item into the cartWrapper
//       cartWrapper.appendChild(cartItem);

//       // Update subtotal
//       subtotal += furniturePrice;
//       subtotalElement.textContent = `Subtotal: ₱${subtotal.toFixed(2)}`;

//       // Show the cart window
//       cartWindow.classList.remove('hide');

//       // Add event listener to the cancel icon
//       const cancelIcon = cartItem.querySelector('.cancel');
//       cancelIcon.addEventListener('click', function() {
//         // Remove the item from the cart
//         cartWrapper.removeChild(cartItem);

//         // Update subtotal after removing the item
//         subtotal -= furniturePrice;
//         subtotalElement.textContent = `Subtotal: ₱${subtotal.toFixed(2)}`;

//         // Hide the cart window if there are no items left
//         if (cartWrapper.children.length === 0) {
//           cartWindow.classList.add('hide');
//         }
//       });
//     });
//   });
// });



document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.cart');
  const cartWindow = document.querySelector('.cart-window');
  const cartWrapper = document.querySelector('.cart-wrapper');
  const subtotalElement = document.querySelector('.subtotal');
  let subtotal = 0;
  const cartItems = {};

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const furnitureItem = this.parentNode.parentNode;
      const furnitureName = furnitureItem.querySelector('.p').textContent;
      const furniturePriceElement = furnitureItem.querySelector('.price');
      const furniturePrice = parseFloat(furniturePriceElement.textContent.replace(/[^0-9.-]+/g, ''));

      // Check if the item already exists in the cart
      if (cartItems.hasOwnProperty(furnitureName)) {
        // Increment the quantity
        cartItems[furnitureName].quantity++;
        // Update the quantity text in the cart item
        cartItems[furnitureName].quantityElement.textContent = `Quantity: ${cartItems[furnitureName].quantity}`;
      } else {
        // Create a new cart item object
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
          <img src="${furnitureItem.querySelector('.img').src}" alt="Furniture Image">
          <div class="details">
            <h3>${furnitureName}</h3>
            <p>
              <span class="quantity">Quantity: 1</span>
              <span class="price">Price: ₱${furniturePrice.toFixed(2)}</span>
            </p>
          </div>
          <div class="cancel"><i class="fa-solid fa-xmark"></i></div>
        `;

        // Store the quantity element for later updates
        const quantityElement = cartItem.querySelector('.quantity');

        // Insert the new cart item into the cartWrapper
        cartWrapper.appendChild(cartItem);

        // Add the cart item to the cartItems object
        cartItems[furnitureName] = {
          element: cartItem,
          quantityElement: quantityElement,
          price: furniturePrice,
          quantity: 1
        };
      }

      // Update subtotal
      subtotal += furniturePrice;
      subtotalElement.textContent = `Subtotal: ₱${subtotal.toFixed(2)}`;

      // Show the cart window
      cartWindow.classList.remove('hide');

      // Add event listener to the cancel icon
      const cancelIcon = cartItems[furnitureName].element.querySelector('.cancel');
      cancelIcon.addEventListener('click', function() {
        // Decrement the quantity
        cartItems[furnitureName].quantity--;

        // Remove the item from the cart if the quantity becomes zero
        if (cartItems[furnitureName].quantity === 0) {
          // Remove the item from the cart
          cartWrapper.removeChild(cartItems[furnitureName].element);

          // Delete the item from the cartItems object
          delete cartItems[furnitureName];
        } else {
          // Update the quantity text in the cart item
          cartItems[furnitureName].quantityElement.textContent = `Quantity: ${cartItems[furnitureName].quantity}`;
        }

        // Update subtotal after removing the item
        subtotal -= furniturePrice;
        subtotalElement.textContent = `Subtotal: ₱${subtotal.toFixed(2)}`;

        // Hide the cart window if there are no items left
        if (Object.keys(cartItems).length === 0) {
          cartWindow.classList.add('hide');
        }
      });
    });
  });
});





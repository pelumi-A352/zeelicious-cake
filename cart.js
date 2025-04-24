document.addEventListener('DOMContentLoaded', () => {
  // Select all "Add to Cart" buttons
  const cartButtons = document.querySelectorAll('.cart-btn');

  console.log('Cart buttons found:', cartButtons); // Debugging log

  // Function to get cart items from local storage
  function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }

  // Function to save cart items to local storage
  function saveCartItems(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Add event listeners to "Add to Cart" buttons
  cartButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log('Button clicked:', button); // Debugging log
      const productId = button.dataset.id;
      const productName = button.dataset.name;
      const productPrice = button.dataset.price;
      const productImage = button.dataset.image;

      console.log('Product details:', { productId, productName, productPrice, productImage }); // Debugging log

      // Get current cart items
      const cart = getCartItems();

      // Check if the item is already in the cart
      const existingItem = cart.find(item => item.id === productId);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity
      } else {
        // Add new item to the cart
        cart.push({
          id: productId,
          name: productName,
          price: parseFloat(productPrice),
          image: productImage,
          quantity: 1
        });
      }

      // Save updated cart to local storage
      saveCartItems(cart);

      // Notify the user
      alert(`${productName} has been added to your cart!`);
    });
  });
});

<button class="cart-btn" data-id="1" data-name="Donut" data-price="5000" data-image="d1.jpg">
  <i class="fas fa-cart-plus"></i> Add to Cart
</button>
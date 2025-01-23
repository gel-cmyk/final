// Cart data
let cart = [];
let cartTotal = 0;

// Function to add products to cart
function addToCart(productName, productPrice) {
  const cartItemsDiv = document.getElementById('cart-items');
  const cartTotalSpan = document.getElementById('cart-total');

  // Add product to cart
  cart.push({ name: productName, price: productPrice });
  cartTotal += productPrice;

  // Update the cart display
  cartItemsDiv.innerHTML = cart
    .map(
      (item, index) =>
        `<p>${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button></p>`
    )
    .join('');

  // Update total
  cartTotalSpan.textContent = cartTotal.toFixed(2);
}

// Function to remove products from cart
function removeFromCart(index) {
  const cartItemsDiv = document.getElementById('cart-items');
  const cartTotalSpan = document.getElementById('cart-total');

  // Remove product from cart
  cartTotal -= cart[index].price;
  cart.splice(index, 1);

  // Update the cart display
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cartItemsDiv.innerHTML = cart
      .map(
        (item, index) =>
          `<p>${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button></p>`
      )
      .join('');
  }

  // Update total
  cartTotalSpan.textContent = cartTotal.toFixed(2);
}
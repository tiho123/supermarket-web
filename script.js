// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Basket functionality
let basket = [];
let totalPrice = 0;

// Add to Basket
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.parentElement.querySelector('h3').innerText;
    const productPrice = parseFloat(button.getAttribute('data-price'));

    basket.push({ name: productName, price: productPrice });
    totalPrice += productPrice;

    updateBasket();
  });
});

// Update Basket
function updateBasket() {
  const basketItems = document.getElementById('basket-items');
  const totalPriceElement = document.getElementById('total-price');

  // Clear the basket list
  basketItems.innerHTML = '';

  // Add items to the basket
  basket.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
    basketItems.appendChild(li);
  });

  // Update total price
  totalPriceElement.innerText = totalPrice.toFixed(2);
}

// Reserve Order
document.getElementById('reserve-order').addEventListener('click', () => {
  alert(`Order reserved! Total: $${totalPrice.toFixed(2)}`);
  clearBasket();
});

// Deliver Order
document.getElementById('deliver-order').addEventListener('click', () => {
  alert(`Order delivered! Total: $${totalPrice.toFixed(2)}`);
  clearBasket();
});

// Clear Basket
function clearBasket() {
  basket = [];
  totalPrice = 0;
  updateBasket();
}
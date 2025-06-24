let cart = [];

function navigate(page) {
  document.querySelectorAll('main section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(page).classList.add('active');
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-list');
  const totalDisplay = document.getElementById('total');
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - Rp ${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = total;
}
const ctaSelectBtn = document.getElementById('cta-select');
const addToCartBtn = document.getElementById('cta-add');
const cartBadge = document.getElementById('cart-badge');

let cartCount = 0;

addToCartBtn.addEventListener('click', () => {
  cartCount++;
  updateCartBadge();
  updateSelectButton();
});

ctaSelectBtn.addEventListener('click', () => {
  if (cartCount > 0) {
    cartCount--;
    updateCartBadge();
    updateSelectButton();
  }
});

function updateCartBadge() {
  cartBadge.setAttribute('value', cartCount);
}

function updateSelectButton() {
  if (cartCount > 0) {
    ctaSelectBtn.textContent = 'Remove from Cart';
  } else {
    ctaSelectBtn.textContent = '14 Inch';
  }
}
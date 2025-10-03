function renderCart(){
  const el = document.getElementById('cart-contents');
  const cart = JSON.parse(localStorage.getItem('fastbite_cart')||'[]');
  if(!cart.length){
    el.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }
  let html = '<ul>';
  let total = 0;
  cart.forEach((c,i)=>{
    html += `<li>${c.name} - $${c.price}</li>`;
    total += c.price;
  });
  html += `</ul><p><strong>Total: $${total}</strong></p>`;
  html += '<button onclick="clearCart()">Clear Cart</button>';
  el.innerHTML = html;
}
function clearCart(){ localStorage.removeItem('fastbite_cart'); renderCart(); }
document.addEventListener('DOMContentLoaded', renderCart);

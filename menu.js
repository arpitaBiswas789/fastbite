const products = [
  {id:1,name:'Classic Burger',price:5,img:'https://via.placeholder.com/300x200?text=Burger'},
  {id:2,name:'Margherita Pizza',price:8,img:'https://via.placeholder.com/300x200?text=Pizza'},
  {id:3,name:'French Fries',price:3,img:'https://via.placeholder.com/300x200?text=Fries'},
  {id:4,name:'Cold Drink',price:2,img:'https://via.placeholder.com/300x200?text=Drink'}
];
const productsEl = document.getElementById('products');
products.forEach(p=>{
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `<img src="${p.img}" alt="${p.name}"/>
    <h3>${p.name}</h3><p>$${p.price}</p>
    <button data-id="${p.id}">Add to Cart</button>`;
  productsEl.appendChild(div);
});
document.addEventListener('click',e=>{
  if(e.target.tagName==='BUTTON' && e.target.dataset.id){
    const id = e.target.dataset.id;
    const prod = products.find(x=>x.id==id);
    let cart = JSON.parse(localStorage.getItem('fastbite_cart')||'[]');
    cart.push(prod);
    localStorage.setItem('fastbite_cart', JSON.stringify(cart));
    alert(prod.name + ' added to cart (demo). Open Cart to view.');
  }
});

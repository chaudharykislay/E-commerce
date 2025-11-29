let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {

  let user = localStorage.getItem("loginusername");
  if(!user){
      alert("Please login to add items to cart");
      window.location.href = "login1.html";
      return;
  }
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added!");
}

function showCart() {
  let box = document.getElementById("cart-items");
  if (!box) return;

  let total = 0;
  box.innerHTML = "";
  cart.forEach((item, index)=> {
    box.innerHTML += `
           ${item.name}-$${item.price}
           <button onclick="removeFromCart(${index})">remove</button>
           </p>
           `;
    total += item.price;
  });
  document.getElementById("total").innerText = "Total: $" + total;
}

function removeFromCart(index){
    cart.splice(index, 1);
    localStorage.setItem("cart",JSON.stringify(cart));
    showCart();
}
showCart();



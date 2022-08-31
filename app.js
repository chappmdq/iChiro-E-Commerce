/*------------- CARRITO ---------------*/
// Carrito
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//Abrir carrito
cartIcon.onclick = () =>{
  cart.classList.add("active");
}
//Cerrar carrito
closeCart.onclick = () =>{
  cart.classList.remove("active");
}


// Carro JS
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else{
  ready();
}

// Haciendo funcion
function ready(){ 
// Remover items del carrito
  var removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++){
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  // Cambios de cantidad
  var quantityInputs = document.getElementsByClassName('cart-quantity');
  for (var i = 0; i < removeCartButtons.length; i++){
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  // Añadir al carrito
  var addCart = document.getElementsByClassName('add-cart');
  for (var i = 0; i < addCart.length; i++){
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  // Funcion del boton comprar
  document
  .getElementsByClassName('btn-buy')[0]
  .addEventListener('click', buyButtonClicked);
} 
// Boton comprar
function buyButtonClicked(){
  alert('Se realizó tu pedido');
  var cartContent = document.getElementsByClassName('cart-content')[0];
  while (cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild)
  }
  updatetotal();

}
// Remover items del carrito
function removeCartItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
  // Cambios de cantidad
function quantityChanged(event){
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updatetotal();
}
// Añadir al carrito
function addCartClicked(event){
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updatetotal();
}
function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement('div');
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title){
    alert("Ya has añadido este item en el carrito"); 
    return;
  }
}
var cartBoxContent = `
<img src="${productImg}" class="cart-img">
<div class="detail-box">
  <div class="cart-product-title">${title}</div>
  <div class="cart-price">${price}</div>
  <input type="number" value="1" class="cart-quantity">
</div>
<!---- remove cart --->
<i class="bx bxs-trash-alt cart-remove"></i>`
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
.getElementsByClassName('cart-remove')[0]
.addEventListener('click', removeCartItem);
cartShopBox
.getElementsByClassName('cart-quantity')[0]
.addEventListener('change', quantityChanged);
}
  // Actualizacion total
  function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
      var cartBox = cartBoxes[i];
      var priceElement = cartBox.getElementsByClassName('cart-price')[0];
      var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
      var price = parseFloat(priceElement.innerText.replace('$', ""))
      var quantity = quantityElement.value;
      total = total + (price * quantity);
    }
      // Si el precio contiene valor en centavos
      total = Math.round(total * 100 / 100);

      document.getElementsByClassName('total-price')[0].innerText = '$' + total;
  }



  // Menu desplegable responsive
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";
function menutoggle(){
  if(MenuItems.style.maxHeight == "0px")
  {
    MenuItems.style.maxHeight = "200px"
  }
  else
  {
    MenuItems.style.maxHeight = "0px";
  }
}


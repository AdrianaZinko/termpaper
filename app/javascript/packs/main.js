document.addEventListener('DOMContentLoaded',function(event){
const cartButton = document.querySelector("#cart-button")//
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');
const cardsRestaurans = document.querySelector('.cards-restaurants');
const containerPromo = document.querySelector('.container-promo');
const restaurants = document.querySelector('.restaurants');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const cardsMenu = document.querySelector('.cards-menu');
const modalBody = document.querySelector('.modal-body');
const modalPrice = document.querySelector('.modal-pricetag');
const clear = document.querySelector('.clear-cart');
const adr= document.querySelector('.adr')
let ss= document.querySelector('.ss')
let login = localStorage.getItem('gloDelivery');
let ee=`${adr}`
const cart = [];

console.log("ss")
function toggleModal() {
  modal.classList.toggle("is-open");
}

function renderCart() {
  modalBody.textContent = '';
  cart.forEach(function ({
    id,
    title,
    count
  }) {
    const itemCart = `
   <div class="food-row">
					<span class="food-name">${title}</span>
					<strong class="food-price">250 ₽</strong>
					<div class="food-counter">
						<button class="counter-button counter-minus" data-id=${id}>-</button>
						<span class="counter">${count}</span>
						<button class="counter-button counter-plus" data-id=${id}>+</button>
					</div>
				</div>
   `;
    modalBody.insertAdjacentHTML("afterbegin", itemCart);
  });
  const totalPrice = cart.reduce(function (result, item) {
    return result + 1; //(parseFloat(item.cost))*item.count;
  }, 0);
  //modalPrice.textContent=modalPrice;
}

function init() {

  cartButton.addEventListener("click", function () {
    renderCart();
    toggleModal();

  });

}
init()
console.log("ss")
close.addEventListener("click", toggleModal);
const btn= document.querySelectorAll('.buttons') 
btn.forEach(e=>{
  e.addEventListener('click',(ev)=>{
    //e.style.visibility="hidden"
    const parent=e.closest('.card')
    const photo=parent.querySelector('.photo').innerText
    const name=parent.querySelector('.name').innerText
    const description=parent.querySelector('.description').innerText
    const weight=parent.querySelector('.weight').innerText
    const price=parent.querySelector('.price').innerText
    console.log(parent)
    console.log(photo+" "+ name+' '+description+' '+weight+' '+price)
    const itemCart = `
   <div class="food-row">
					<span class="food-name">${name}</span>
					<strong class="food-price">250 ₽</strong>
					<div class="food-counter">
						${photo}
					</div>
				</div>
   `;
   
    adr.insertAdjacentHTML("afterbegin", itemCart);
    ee=`${adr.outerHTML}`
    console.log(ee)
    ss.insertAdjacentHTML("afterbegin", ee);
  })
  
  console.log(ee+ "g")
})


})



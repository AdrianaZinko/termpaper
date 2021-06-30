document.addEventListener('DOMContentLoaded', function (event) {
 
const btn = document.querySelectorAll('.buttons')
const adr= document.querySelector('.adr')
const tbody=document.querySelector('.tbody')
const modalBtn=document.querySelector('.btn-cart')
const clocks =document.querySelectorAll('.clock')
const order=document.querySelector('.order')
const orderBtn=document.querySelector('.btn-order')
let k=0 ,date=''
for (let clock of clocks) { 
date=clock.innerText.slice(11, 16)
clock.innerHTML=date
} 
 
modalBtn.addEventListener('click', () => {
  console.log('fd')
  adr.classList.toggle('is-open')
  })
  orderBtn.addEventListener('click', () => {
    console.log('fd')
    order.classList.toggle('is-open') 
    
    setTimeout(function(){
      
      window.location.href = '/institutions?page=1';
    }, 3 * 1000);
  })
btn.forEach(e => {
  e.addEventListener('click', (ev) => {
    //e.style.visibility="hidden"
    const parent = e.closest('.card')
    //const photo = parent.querySelector('.photo').innerText
    const name = parent.querySelector('.name').innerText
    const description = parent.querySelector('.description').innerText
    const weight = parent.querySelector('.weight').innerText
    const price = parent.querySelector('.price').innerText
  
   
    k++;
    const itemCart2 = `
    <tr class="basket__item">
    <td class="align-middle">${name}</td>
    <td class="align-middle td-price text-end">${price} грн</td>
    <td class="align-middle count">
      <div class="input-group">
        <button type="button" class="btn btn-primary btn-minus">-</button>
        <input type="number" value="${k}" data-price="${price}" class="form-control input text-center" disabled>
        <button type="button" class="btn btn-primary btn-plus">+</button>
      </div>
    </td>
    <td class="align-middle text-end subtotal">${price} грн</td>
  </tr>
     `;

    tbody.insertAdjacentHTML("afterbegin", itemCart2);
    
    k=0
  })

})

const formatNumber = (x) =>
  x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ')

const totalPriceWrapper = document.getElementById('total-price')

const getItemSubTotalPrice = (input) => +input.value * +input.dataset.price

const setTotalPrice=(value)=>{
    totalPriceWrapper.textContent = formatNumber(value)
  totalPriceWrapper.dataset.value=value
}

const init = () => {
  let totalCost = 0
  document.querySelectorAll('.basket__item').forEach((basketItem) => {
    totalCost += getItemSubTotalPrice(basketItem.querySelector('.input'))
  })
   setTotalPrice(totalCost)
}
btn.forEach(e => {
  e.addEventListener('click', (ev) => { 
  init()
})})
const calculateSeparateItem = (basketItem, action) => {
    const input=basketItem.querySelector('.input')
    switch(action){
        case 'plus':
            input.value++
            setTotalPrice(+totalPriceWrapper.dataset.value + +input.dataset.price)
            break;
        case 'minus':
            input.value--
            setTotalPrice(+totalPriceWrapper.dataset.value - +input.dataset.price)
            break;
    }
    basketItem.querySelector('.subtotal').textContent=`${formatNumber(getItemSubTotalPrice(input))} грн`
}

document.getElementById('basket').addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-minus')) {
      const input = event.target.closest('.basket__item').querySelector('.input')
    if(+input.value!==0){
        calculateSeparateItem(event.target.closest('.basket__item'), 'minus')
    }
  }
  if (event.target.classList.contains('btn-plus')) {
    calculateSeparateItem(event.target.closest('.basket__item'), 'plus')
  }
})

init()
})





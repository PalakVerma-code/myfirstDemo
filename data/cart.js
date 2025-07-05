 export let cart= JSON.parse(localStorage.getItem('cart'));
 
 if(!cart){
    cart=[{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2
    },{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1
}];
 }
 
function saveTostorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}
  export function addTocart(productId){
   const selectElement = document.querySelector(`.js-quantity-select[data-product-id="${productId}"]`);

        const seletvalue=Number(selectElement.value);
         const addedElement = document.querySelector(`.js-added-to-cart[data-product-id="${productId}"]`);
             addedElement.classList.add('added-to-cart-certain');

            setTimeout(() => {
      addedElement.classList.remove('added-to-cart-certain');
    }, 1500);  
   let matchingitem;
        cart.forEach((item)=>{
            if(productId===item.productId){
           matchingitem=item;
            }
        })
        if(matchingitem){
            matchingitem.quantity=seletvalue;
        }else{
            cart.push({
         productId:productId,
            quantity:seletvalue
        });
        }
        saveTostorage();
 }
 export function removeCartItem(productId){
    const newCart=[];
    cart.forEach((cartItem)=>{
        if(cartItem.productId!=productId){
            newCart.push(cartItem);
        }
    });
    cart=newCart;
    saveTostorage();
 }
 export function updateQuantity(productId,newCart){
    let matchingitem
    cart.forEach((cartItem)=>{
        if(cartItem.productId==productId){
        matchingitem=cartItem
    }
    });
    matchingitem.quantity=newCart
    saveTostorage();
 }
 
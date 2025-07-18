
import{cart,removeCartItem ,updateQuantity}from '../data/cart.js';
import { products } from '../data/products.js';

updateCartquantity();
let cartItemSummary='';
cart.forEach((cartItem)=>{
  
    const productId=cartItem.productId;
    let matchingProduct;
products.forEach((product)=>{
if(product.id==productId){
    matchingProduct=product;
}
});


console.log(matchingProduct);
 cartItemSummary+=`<div class="cart-item-container  js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${(matchingProduct.priceCents/100).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-update-quantity-link" data-product-id="${matchingProduct.id}" >
                    Update
                  </span>
                  <input class="quantity-input js-quantity-input-${matchingProduct.id}">
                  <span class="save-quantity-link link-primary js-save-link"data-product-id="${matchingProduct.id}">save</span>
                  <span class="delete-quantity-link link-primary js-delete-quantity-link" data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
`;

});


document.querySelector('.js-order-summary').innerHTML=cartItemSummary;
console.log(cartItemSummary);
document.querySelectorAll('.js-delete-quantity-link').forEach((link)=>{
    link.addEventListener('click',()=>{
        const productId=link.dataset.productId;
       removeCartItem(productId);
      const container=document.querySelector(`.js-cart-item-container-${productId}`);
      container.remove();
      updateCartquantity();
    })
});
function updateCartquantity(){
  let cartItemQuantity=0;
    cart.forEach((cartItem)=>{
        cartItemQuantity+=cartItem.quantity;
    });
 
document.querySelector('.js-return-to-home-link').innerHTML=`${cartItemQuantity}items`;

}
document.querySelectorAll('.js-update-quantity-link').forEach((link)=>{
 link.addEventListener('click',()=>{
  
  const productId=link.dataset.productId;  
  const container=document.querySelector(`.js-cart-item-container-${productId}`);
  
  container.classList.add('is-editing-quantity');
  console.log(container);
 });
});
document.querySelectorAll('.js-save-link').forEach((link)=>{
  link.addEventListener('click',()=>{
    
  const productId=link.dataset.productId;
  const input=document.querySelector(`.js-quantity-input-${productId}`);
 const newquantity=Number(input.value);
 if(newquantity<0||newquantity>=1000){
  alert('quantity must be at least 0and less then 1000');
  return;
 }
 updateQuantity(productId,newquantity);

  const container=document.querySelector(`.js-cart-item-container-${productId}`);
  container.classList.remove('is-editing-quantity');
  
  const quantityLabel= document.querySelector(`.js-quantity-label-${productId}`);
  quantityLabel.innerHTML=newquantity;
  updateCartquantity();
  });
  
});

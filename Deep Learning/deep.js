function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get the product ID from the URL parameter
const productId = getUrlParameter('id');

// Define product data (you can load this dynamically from a server)
const products = {
    '1': {
        name: 'Product 1',
        price: '₹5000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/deep.jpg'
    },
    '2': {
        name: 'Product 2',
        price: '₹4000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/deep.jpg'

    },
    '3': {
        name: 'Product 3',
        price: '₹4000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/deep.jpg'

    },
    '4': {
        name: 'Product 4',
        price: '₹4000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/deep.jpg'

    },
    '5': {
        name: 'Product 5',
        price: '₹4000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/deep.jpg'

    }
    , '6': {
        name: 'Product 6',
        price: '₹4000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/deep.jpg'

    },
    '7': {
        name: 'Product 7',
        price: '₹4000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/deep.jpg'

    },
    '8': {
        name: 'Product 8',
        price: '₹4000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/deep.jpg'

    },
    '9': {
        name: 'Product 9',
        price: '₹4000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/deep.jpg'

    }

    // Add more products here as needed
};

// Get the product information based on the product ID
const productInfo = products[productId];

if (productInfo) {
    // Update the product details on the page
    document.getElementById('title').textContent = productInfo.name;
    document.getElementById('price').textContent = `Price: ${productInfo.price}`;
    document.getElementById('description').textContent = `Description: ${productInfo.description}`;
    document.getElementById('imgsrc').src = productInfo.imageSrc;

}
   

// const togBtn=document.querySelector('.navbar-toggler');
// const navBtn=document.querySelector('.navbar');
// togBtn.addEventListener("click",()=>{
//  navBtn.classList.toggle('expanded');
//  toggleBackgroundColor();
// });

// function toggleBackgroundColor() {
//  const isExpanded = navBtn.classList.contains('expanded');
//  if (isExpanded) {
//      navBtn.style.backgroundColor = '#435B66'; // Set background color for expanded state
//  } else {
//      navBtn.style.backgroundColor = 'black'; // Set background color for default state
//  }
// }

// const shopBag = document.querySelector("#buybag");
// const cart = document.querySelector(".cartlist");
// const close = document.querySelector(".cross");

// shopBag.addEventListener("click", () => {
//  cart.classList.add("cartlistactive");
// });

// close.addEventListener("click", () => {
//  cart.classList.remove("cartlistactive");
// });

// document.addEventListener("DOMContentLoaded", loader);

// let itemList = [];
// let quantity = 1;

// function initializeQuantity() {
//  const storedQuantity = localStorage.getItem('cart-quantity');
//  if (storedQuantity) {
//    quantity = parseInt(storedQuantity);
//    quantityChange(); // Update the displayed quantity
//  }
// }
// function loader() {
// loadCartFromLocalStorage();
// initializeQuantity(); 
// updateTotal();
// pageLoader();
// createCart();
// }

// // Remove items in cart
// function pageLoader() {
//  const remBtn = document.querySelectorAll(".fa-trash");
//  remBtn.forEach((btn) => {
//    btn.addEventListener("click", cancel);
//  });

//  // Quantity
//  let quanitem = document.querySelectorAll(".cart-quantity");

//  quanitem.forEach((input) => {
//    input.addEventListener("change", changeQuantity);
//  });

//  // Add to cart
//  let addBtn = document.querySelectorAll(".addCart");
//  addBtn.forEach((btn) => {
//    btn.addEventListener("click", addItem);
//  });

//  updateTotal();
// }

// function addItem() {
//  let product = this.parentElement;
//  let title = product.querySelector(".title").innerHTML;
//  let price = product.querySelector(".add").innerHTML;
//  let imgsrc = product.querySelector(".profile").src;

//  let newProduct = { title, price, imgsrc };

//  // Check if the item already exists in itemList
//  const existingItem = itemList.find((el) => el.title == newProduct.title);

//  if (existingItem) {
//    // If the item already exists, update its quantity
//    existingItem.quantity++;
//  } else {
//    // If the item doesn't exist, add it to itemList
//    newProduct.quantity = 1;
//    itemList.push(newProduct);
//  }
 
// // Save the updated itemList to local storage
// saveCartToLocalStorage();

// // Clear the cart content
// clearCart();

// // Load cart items from local storage and display them
// loadCartFromLocalStorage();

// pageLoader();
// updateTotal();
// }

// function clearCart() {
//  const cartContent = document.querySelector('.cartcontent');
//  while (cartContent.firstChild) {
//    cartContent.removeChild(cartContent.firstChild);
//  }
// }

// function cancel() {
//  let title = this.parentElement.querySelector(".itemname").innerHTML;
//  // Remove the item from itemList
//  itemList = itemList.filter((el) => el.title !== title);

//  // Save the updated itemList to local storage
 
//  saveCartToLocalStorage();

//  this.parentElement.remove();
 
//  pageLoader();
//  updateTotal();
// }

// function changeQuantity() {
//  if (isNaN(this.value) || this.value < 1) {
//    this.value = 1;
//  }
//  quantity = parseInt(this.value);
//  localStorage.setItem('cart-quantity', quantity.toString());

//  pageLoader();
// }

// function createCart(title, price, imgsrc) {
//  return `
//  <div class="cartbox">
//    <img src="${imgsrc}" class="cart-img">
//    <div class="detail-box">
//      <div class="itemname">${title}</div>
//      <div class="price-box">
//        <div class="cartprice">${price}</div>
//        <div class="amt-box">${price}</div>
//      </div>
//      <div class="increment">
//      <span class="minus">-</span>
//      <span class="inc" id="num">1</span>
//      <span class="plus">+</span>
//    </div>
//    <i class="fa-solid fa-trash" style="color: rgb(222, 18, 18); font-size: 15px; padding-top: 40px;padding-right: 2rem; cursor:pointer;"></i>
//  </div>`;
// }

// function saveCartToLocalStorage() {
//  // Save itemList to local storage as a JSON string
//  localStorage.setItem("cartItems", JSON.stringify(itemList));
// }

// function loadCartFromLocalStorage() {
//  // Retrieve itemList from local storage and parse it as JSON
//  const storedCart = localStorage.getItem("cartItems");
//  if (storedCart) {
//    itemList = JSON.parse(storedCart);
//  }
// clearCart();
//  // Update the cart display based on the loaded itemList
//  itemList.forEach((item) => {
//    const productElement = createCart(item.title, item.price, item.imgsrc);
//    let element = document.createElement("div");
//    element.innerHTML = productElement;
//    let basket = document.querySelector(".cartcontent");
//    basket.append(element);

  
//  });
 
// }

// // Initial load of cart items from local storage
// loadCartFromLocalStorage();
// // updateTotal();
// function updateTotal(){
//    const cartitems=document.querySelectorAll('.cartbox');
//    const totalValue=document.querySelector('.amount');
//    let total=0;
//    cartitems.forEach(product=>{
//      let priceElement=product.querySelector('.cartprice');
//      let price=parseFloat(priceElement.innerHTML.replace("₹",""));console.log(price);
//      let qty=product.querySelector('.cart-quantity').value;console.log(qty);
//      total+=(price * qty);
//      product.querySelector('.amt-box').innerText="₹"+(price * qty);
//    });
//    totalValue.innerHTML='₹'+total;
//    localStorage.setItem('total', total);
//    // Add count in cart
  
//  const countValue=document.querySelector(".count");
//  let count=itemList.length;
//  countValue.innerHTML=count;
//  const cartBox=document.querySelector('.empty');
//   const cartDiv=document.querySelector('.cartcontent');
//  const totalList=document.querySelector('.total-list');
//  const placeOrder=document.querySelector('.place_order');

//  if(count==0){
//    countValue.style.display='none';
//    totalList.style.display='none';
//    placeOrder.style.display='none';
//    cartBox.style.display='block';

//  }
 
//  else{
//    cartBox.style.display='none';
//    totalList.style.display='flex';
//    placeOrder.style.display='block';
//    cartBox.style.display='none';
   
   
//    countValue.style.display='block';
//  }

 



// }
// // loadCartFromLocalStorage();
// // updateTotal();
// // pageLoader();

//  // saveCartToLocalStorage();



 
//  const addToCartButton = document.getElementById('addToCart');
//  const quantityDisplay = document.getElementById('num');
//  quantityDisplay.addEventListener('input', () => {
//    // Update the total based on the new quantity
//    updateTotal();
   
//    // Save the quantity to local storage
//    localStorage.setItem('quanitem', quantityDisplay.textContent);
//  });
// updateTotal();
// // function addItem(){

// // }
//  // Initialize a variable to track the quantity
 

//  addToCartButton.addEventListener('click', () => {
//    // Create an object representing the product
//    // const product = {
//     let title=productInfo.name;
//     let price= productInfo.price;
//     let imgsrc=productInfo.imageSrc;
//     let newProduct = { title, price, imgsrc };

//  // Check if the item already exists in itemList
//  const existingItem = itemList.find((el) => el.title == newProduct.title);

//  if (existingItem) {
//    // If the item already exists, update its quantity
//    existingItem.quantity++;
//  } else {
//    // If the item doesn't exist, add it to itemList
//    newProduct.quantity = 1;
//    itemList.push(newProduct);
//  }
// createCart();
// saveCartToLocalStorage();
// clearCart();
// loadCartFromLocalStorage();
// updateTotal();
// pageLoader();
//    });
 
// let minus1=document.querySelector('.minus');
//    minus1.addEventListener('click',minus);
// function minus(){
//    if (quantity > 0) {
//    quantity -= 1;
//    quantityChange();
//    updateTotal();
//    localStorage.setItem('quanitem', quantity.toString());
//  } else {
//    quantity = 0;
//  }
// }

// let plus1=document.querySelector('.plus');
// plus1.addEventListener('click',plus);
// function plus(event){            
//  let buttonClicked=event.target;
//  console.log(buttonClicked);
//  // let input=buttonClicked.parentElement
//  if (quantity > 0) {
//    quantity += 1;
//    quantityChange();
//    updateTotal();
//    localStorage.setItem('cart-quantity', quantity.toString());
//  } else {
//    quantity = 1;
//  }
// }

// function quantityChange(){
// quantityDisplay.textContent = quantity.toString();
// }
// // // Call initializeQuantity when the page loads for the first time
// // document.addEventListener('DOMContentLoaded', initializeQuantity);

// // // Call loader function when the page loads
// // document.addEventListener('DOMContentLoaded', loader);
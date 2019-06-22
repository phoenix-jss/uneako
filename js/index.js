// Related products Slick slider
$('.related-products').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  dots: true,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 875,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
 
    ]
});

// change button innerHTML to 'added to cart' on click
// var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
// var productsAdded = document.querySelector('.items-on-cart');
// var itemsCount = 0;


// addToCartButtons.forEach(function(button) {
//   button.addEventListener("click", function() {
//     this.innerHTML = 'Added To Cart';
//     this.disabled = true;
//     itemsCount++;
//     updateNav();
//   });
// });

// // update no of products added to cart on navbar
// function updateNav(){
//   productsAdded.innerHTML = itemsCount;
// }


// CHANGE QUANTITY ON INC AND DEC BUTTON

var incButton = document.querySelector('#inc-quantity');
var decButton = document.querySelector('#dec-quantity');
var quantityBox = document.querySelector('#qunatity');
var quantity = 1;

incButton.addEventListener('click', function(){
  quantity++;
  quantityBox.value = quantity;
  console.log('clicked');
});

decButton.addEventListener('click', function(){
  if(quantity > 1){
    quantity--;
  }
  else{
    quantity = 1;
  }
  quantityBox.value = quantity;
  console.log('clicked');
})

// show alert when clicked on add to cart button
var addToCartBtn = document.querySelector('#add-to-cart');
var productName = document.querySelector('#product-title').innerText;

addToCartBtn.addEventListener('click', function(){
  console.log('clicked');
  showAlert();
})

function showAlert(){
  // clear any remaining alerts
  clearAlert();

  // create div
  const div = document.createElement('div');

  // classnames
  const className = 'alert alert-success';

  // message to be shown in alert
  const message = `<a href="cart.html"><button type="button" class="btn btn-info">VIEW CART</button></a>
   &nbsp; ${quantity} &times;  &nbsp;"${productName}" &nbsp; added to cart`;

  // add classes
  div.className = className;
  // add text
  // div.appendChild(document.createTextNode(message));
  div.innerHTML = message;
  // get parent
  const container = document.querySelector('.product-description');
  const share = document.querySelector('.share-icons');
  container.insertBefore(div, share);

  setTimeout(function(){
    clearAlert();
  }, 3000);
}

function clearAlert(){
  const current = document.querySelector('.alert');

  if(current){
    current.remove();
  }
}

// change product main image on click on small images

var mainImage = document.querySelector('.product-main-image');
var otherImages = document.querySelectorAll('.other-images');

// set image src to first image of more images
document.querySelector('.product-main-image').setAttribute('src', document.querySelectorAll('.other-images')[0].getAttribute('src'));

// change image on click
otherImages.forEach(function(image){
  image.addEventListener('click', function(){
    console.log('clicked');
    mainImage.setAttribute('src', this.getAttribute('src'));
  })
})

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

$(function () {  
        
   $('.menu__btn').on('click', function(){  
    $('.menu__list').toggleClass('menu__list--active')
   }) 
    
   $('.menu__link').on('click', function(){ 
      $('.menu__list').removeClass('menu__list--active')
   })
 

    $('.review__slider').slick({ 
      prevArrow:'<button type="button" class="slick-prev slick-arrow"><img src="images/review/arrow-prev.svg" alt=""></button>', 
      nextArrow:'<button type="button" class="slick-next slick-arrow"><img src="images/review/arrow-next.svg" alt=""></button>',  
      fade: true, 
      dots: true, 
      autoplay: true, 
       
      responsive: [
        {
          breakpoint: 850,
          settings: {
            arrows: false,
           }
        },
      ]
    }); 
    
    
    $("#product-1").rateYo({
        rating: 3, 
        starWidth: "23px"
      }); 
       
      $("#product-2").rateYo({
        rating: 4, 
        starWidth: "23px"
      }); 
       
          
      $("#product-3").rateYo({
        rating: 5, 
        starWidth: "23px"
      });
    
       
      $('.reservation__form-btn').on('click', function(e){ 
        e.preventDefault();
      })      
 
});
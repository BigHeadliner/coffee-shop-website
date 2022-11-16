$(function () {  
   
    $('.review__slider').slick({ 
      prevArrow:'<button type="button" class="slick-prev slick-arrow"><img src="images/review/arrow-prev.svg" alt=""></button>', 
      nextArrow:'<button type="button" class="slick-next slick-arrow"><img src="images/review/arrow-next.svg" alt=""></button>',  
      fade: true, 
      dots: true, 
      autoplay: true,
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
   
 
});
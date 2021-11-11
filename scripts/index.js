const element = document.getElementById("navbar");
const positionY = element.scrollTop;
console.log(positionY);


$(document).ready(function(){
    let nav_offset_top=$('.header-area').height()+50;
    function navbarFixed(){
      if($('.header-area').length){
        $(window).scroll(function(){
          let scroll=$(window).scrollTop();
          if(scroll>=nav_offset_top){
            $('.header-area').addClass('navbar-fixed');
          }
          else{
            $('.header-area').removeClass('navbar-fixed');
          }
        })
      }
    }
    
    navbarFixed();
    });
    
    $('.navbar-collapse a').click(function(){
            $(".navbar-collapse").collapse('hide');
    });
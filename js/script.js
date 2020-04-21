//slides options
$(document).ready(function(){
                  $('#header-slider .bxslider').bxSlider({
                      mode: 'fade',
                      auto: true,
                      infiniteLoop: true,
                      easing: 'ease-in-out',
                      speed: 1000,
                      controls: true,
                      pager: true,
                      pause: 12000
                  });
});
$(document).ready(function(){
                  $('#tastemonials .bxslider').bxSlider({
                      mode: 'fade',
                      auto: true,
                      infiniteLoop: true,
                      easing: 'ease-in-out',
                      speed: 1000,
                      controls: false,
                      pager: true,
                      pause: 12000
                  });
});

//site options
var w = document.documentElement.clientWidth;
 var isTechHeadBlock = false;
var isTechSupBlock = false; 

/*$(window).resize(function(){
   
    w = document.documentElement.clientWidth;
   
    if(w < 994){
         document.getElementById("tech-body").style.display = "block";
    }
  
});*/
    
$('#tech-head').click( function(){
    
    $('#tech-body').slideToggle();
});




$('#nav-login').click(function(){
   $('#login').fadeIn();
    
}) ;


$('#menu-toggle').click(function(){
    $('#main-nav').slideToggle();
    
});

$('#close').click(function(){
       $('#login').fadeOut();
    });

var isSearchBoxBlock = false;


$('#search-icon').click( function(){
    
   if(!isSearchBoxBlock){
            document.getElementById("nav-items").style.visibility = "hidden";
            document.getElementById("search-box").style.display = "block";
            isSearchBoxBlock = true;
        }
    else if (isSearchBoxBlock){
            document.getElementById("nav-items").style.visibility = "visible";
            document.getElementById("search-box").style.display = "none";
        isSearchBoxBlock = false;
        }
    });

$('#tech-icon').click( function(){
    
            $('#tech-support').fadeToggle();
    });
    

//mobile nav

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//nav scroll color change
$(document).ready(function(){
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 10) { 
        $(".header").css({"background-color": "black","transition":".5s"});
        
      
      } else {
        $(".header").css({"background-color": "transparent"}); 
  
      }
    });
 });
    
//back to top scroll 50%
 document.addEventListener("scroll", handleScroll);
 var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
 
 function handleScroll() {
   var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   var GOLDEN_RATIO = 0.5;
 
   if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
     //show button
     scrollToTopBtn.style.display = "block";
   } else {
     //hide button
     scrollToTopBtn.style.display = "none";
   }
 }
 
 scrollToTopBtn.addEventListener("click", scrollToTop);
 
 function scrollToTop() {
   window.scrollTo({
     top: 0,
     behavior: "smooth"
   });
 }

 //carousel
 function defer(method) {
  if (window.jQuery)
    method();
  else
    setTimeout(function() {
      defer(method)
    }, 50);
}
defer(function() {
  (function($) {
    
    function doneResizing() {
      var totalScroll = $('.resource-slider-frame').scrollLeft();
      var itemWidth = $('.resource-slider-item').width();
      var difference = totalScroll % itemWidth;
      if ( difference !== 0 ) {
        $('.resource-slider-frame').animate({
          scrollLeft: '-=' + difference
        }, 500, function() {
          // check arrows
          checkArrows();
        });
      }
    }
    
    function checkArrows() {
      var totalWidth = $('#resource-slider .resource-slider-item').length * $('.resource-slider-item').width();
      var frameWidth = $('.resource-slider-frame').width();
      var itemWidth = $('.resource-slider-item').width();
      var totalScroll = $('.resource-slider-frame').scrollLeft();
      
      if ( ((totalWidth - frameWidth) - totalScroll) < itemWidth ) {
        $(".next").css("visibility", "visible");
      }
      else {
        $(".next").css("visibility", "visible");
      }
      if ( totalScroll < itemWidth ) {
        $(".prev").css("visibility", "visible");
      }
      else {
        $(".prev").css("visibility", "visible");
      }
    }
    
    $('.arrow').on('click', function() {
      var $this = $(this),
        width = $('.resource-slider-item').width(),
        speed = 500;
      if ($this.hasClass('prev')) {
        $('.resource-slider-frame').animate({
          scrollLeft: '-=' + width
        }, speed, function() {
          // check arrows
          checkArrows();
        });
      } else if ($this.hasClass('next')) {
        $('.resource-slider-frame').animate({
          scrollLeft: '+=' + width
        }, speed, function() {
          // check arrows
          checkArrows();
        });
      }
    }); // end on arrow click
    
    $(window).on("load resize", function() {
      checkArrows();
      $('#resource-slider .resource-slider-item').each(function(i) {
        var $this = $(this),
          left = $this.width() * i;
        $this.css({
          left: left
        })
      }); // end each
    }); // end window resize/load
    
    var resizeId;
    $(window).resize(function() {
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 500);
    });
    
  })(jQuery); // end function
});


//image generator
$(".nextCat").click(function(){
  $.getJSON("https://aws.random.cat/meow")
  .done(function(data){
    $("#catPic1").attr("src", data.file);
  })
  .fail(function(){
    alert("There was an error");
  });
});

$(".nextCat").click(function(){
  $.getJSON("https://aws.random.cat/meow")
  .done(function(data){
    $("#catPic2").attr("src", data.file);
  })
  .fail(function(){
    alert("There was an error");
  });
});


$(".nextCat").click(function(){
  $.getJSON("https://aws.random.cat/meow")
  .done(function(data){
    $("#catPic3").attr("src", data.file);
  })
  .fail(function(){
    alert("There was an error");
  });
});

$(".nextCat").click(function(){
  $.getJSON("https://aws.random.cat/meow")
  .done(function(data){
    $("#catPic5").attr("src", data.file);
  })
  .fail(function(){
    alert("There was an error");
  });
});

$(".nextCat").click(function(){
  $.getJSON("https://aws.random.cat/meow")
  .done(function(data){
    $("#catPic4").attr("src", data.file);
  })
  .fail(function(){
    alert("There was an error");
  });
});
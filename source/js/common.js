$(document).ready(function() {





    $('section.question .slider').on('init', function(event, slick){
        $('.counter .progress p').attr("style", "width:"+ (1/slick.slideCount)*100 +"%");
    });
    
    var surveySlider = $('section.question .slider').slick({
        autoplay:false,
        speed: 1000,
        dots:false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:$('.next'),
        prevArrow:$('.prev')
        
    });
    
    var slideCalc;

    surveySlider.on('afterChange', function(event, slick, currentSlide) {
        $('.next').removeClass("hide");
        $('.prev').removeClass("hide");
        $('.finish').addClass("hide");

        //If we're on the first slide hide the Previous button and show the Next
        if (currentSlide == 0) {
            $('.prev').addClass("hide");
        }
      
        //If we're on the last slide hide the Next button.
        if (slick.slideCount == currentSlide + 1) {
          $('.next').addClass("hide");
          $('.finish').removeClass("hide");
        }

        slideCalc = ((currentSlide + 1) / slick.slideCount)*100;
        
        $('.counter .progress p').attr("style", "width:"+ slideCalc+"%");

      });

      $("article.counter .go-first").on("click", function(){
        surveySlider.slick("slickGoTo", 0);
      })

});


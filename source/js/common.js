$(document).ready(function() {






    
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
    var slideCalcResult;

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

        slideCalc = (currentSlide / slick.slideCount)*100;
        slideCalcResult = Math.round(slideCalc / 10);
        
        $('.counter .progress p').attr("class", "p"+ slideCalcResult + "0");

        console.log(slideCalcResult);
      });

});


/*
** Template name : Unifox
** Creation date : 18/03/2018
** Author        : Mohssine Aboutaj
** Description   : This is template single page for your portfolio
** Contact Me    : mohssineaboutajtemplates@gmail.com
*/

$(function(){
var mainColor = $('body').attr('data-main-color');

/* Start customize plugins */

  // TriggerFire the jquery.niceScroll.js plugin and customiz it
  $("body").niceScroll({
    cursorcolor: mainColor,
    cursoropacitymin: 0.5,
    cursorwidth: '5px',
    cursorborder: 'none'
  });

  // Trigger the wow.js library
  new WOW().init();

  // Trigger typedJs script
  var typed = new Typed('#typed', {
      strings: [
        "front end developer",
        "back end developer",
        "android app developer",
        "javaScript developer",
        "php developer"
      ],
      typeSpeed: 50,
      backSpeed: 10,
      smartBackspace: true, // this is a default
      loop: true
    });

  // Trigger slick plugin
  $('.projects').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // Trigger slick plugin
  // Trigger slick plugin
  $('.fiverr-team').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

/* End customize plugins */

/* Start my function and codes */

  // change nav backgroundColor onscroll
  var nav = document.querySelector('nav');
  window.onscroll = function(){
    if (window.pageYOffset >= nav.clientHeight) {
      nav.classList.add("fix")
    } else {
      nav.classList.remove("fix")
    }
  };

  // Hide navbar on click for any link
  $('nav div#navbarSupportedContent li').on('click', function(){
    $('div#navbarSupportedContent').removeClass('show');
  });

  // Make smothing scroll to element on link clicked
  $('nav a, footer a').on("click", function(){
    // add class Active on active link
    $(this).parent().addClass('active').siblings().removeClass('active');

    // make a smoth scrolling
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
  });

  // calculate textarea char length
  var limit = 150;
  $('#contact form textarea').keyup(function(){
    if($('#textLength').html() == limit - 1) {
      $('#textLength').css('color', 'red');
    } else {
      $('#textLength').css('color', '#212121');
    }
    $('#textLength').html($(this).val().length);
  });

  // testimonials slider
  (function autoslider() {
   $("#testimonials .slider .active").each( function () {
     if (!$(this).is(":last-child")){
       $(this).delay(3000).fadeOut(900, function (){
         $(this).removeClass("active").next().addClass("active").fadeIn();
         autoslider();
       });
     } else {
       $(this).delay(3000).fadeOut(900, function(){
         $(this).removeClass("active");
         $("#testimonials .slider .opin").eq(0).addClass("active").fadeIn();
         autoslider();
       });
     }
   });
  }());

  // blogs show/hide info
  $('#blog .card .open-info').on('click', function(){
    $(this).prev('.card-body').find('.blog-info').slideToggle();
    $(this) + $('i').toggleClass('fa-chevron-down');
    $(this) + $('i').toggleClass('fa-chevron-up');
  });

  // move pleceholder to up on focus
  var theInput = $('#contact form .form-control input,#contact form .form-control textarea');
  theInput.on('focus', function(){
    $(this).prev('label').css({
      top: '-8px',
      fontSize: '.8em'
    });
  });
  theInput.on('blur', function(){
    if ($(this).val() == '') {
      $(this).prev('label').css({
        top: '10px',
        fontSize: '1em'
      });
    }
  });

  // set the tags in: footer > #tags
  var tags = [
          'Html5',
          'Css3',
          'javaScript',
          'jQuery',
          'Sass',
          'Bootstrap',
          'Font Awesome',
          'Responsive',
          'Design',
          'Templates',
          'Parallax',
          'mixitUp',
          'Slick',
          'Shuffle',
          'Slider Show',
          'Plugins',
          'Scripts',
          'Compatibility',
          'Forms',
          'Website',
          'Awesome design',
          'Hight Quality',
          'Githup',
          'Codepen',
          'Social Icons',
          'Fiverr',
          'Best Work',
          'Professional Team',
          'Modern Design',
          'Long Support'
      ],
      tagsContent = document.getElementById('tags');
  // ES6 loop
  for(tag of tags) {
    var theTag = document.createElement('span');
    theTag.textContent = tag;
    tagsContent.appendChild(theTag);
  }
  
  // animated progress bar
  $(function () {
    $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
  });

  $( window ).scroll(function() {
    if($( window ).scrollTop() > $("#skills").offset().top){  // scroll down abit and get the action
      $(".progress-bar").each(function(){
        each_bar_width = $(this).attr('aria-valuenow');
        $(this).width(each_bar_width + '%');
      });
    }
  });

  /* End my function and codes */
  jssor_1_slider_init = function() {
    var jssor_1_SlideshowTransitions = [
      {$Duration:500,$Delay:50,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationRectangleCross,$Easing:$Jease$.$OutQuad},
      {$Duration:500,$Delay:12,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Easing:{$Clip:$Jease$.$InSine}},
      {$Duration:500,$Delay:40,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$Easing:$Jease$.$InSine},
      {$Duration:1200,x:0.2,y:-0.1,$Delay:16,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InWave,$Top:$Jease$.$InWave,$Clip:$Jease$.$OutQuad},$Round:{$Left:1.3,$Top:2.5}},
      {$Duration:1200,x:0.3,y:-0.3,$Delay:80,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$Assembly:260,$ChessMode:{$Column:15,$Row:15},$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$Swing},$Round:{$Left:0.8,$Top:0.8}},
      {$Duration:500,y:1,$Opacity:2,$Easing:$Jease$.$InQuad}
    ];

    var jssor_1_options = {
      $AutoPlay: 2,
      $Idle: 1000,
      $SlideDuration: 400,
      $SlideEasing: $Jease$.$Early,
      $FillMode: 2,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_1_SlideshowTransitions
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 1400;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
  };
  jssor_1_slider_init();
});

// Trigger google maps API
function myPosition() {
  var output = document.getElementById('show-map'),
      pos = {
        lat: 33.5731,
        lng: -7.5898
      },
      map = new google.maps.Map(output, {
        zoom: 6,
        center: pos,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: ['roadmap', 'terrain']
        }
      }),
      marker = new google.maps.Marker({
        position: pos,
        map: map
      });
}

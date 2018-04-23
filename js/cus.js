/*
** Template name : Unifox
** Creation date : 18/03/2018
** Author        : Mohssine Aboutaj

** Description   : This is template single page for your portfolio
** Contact Me    : mohssineaboutajtemplates@gmail.com
*/

$(function(){

/* Start customize plugins */

  // TriggerFire the jquery.niceScroll.js plugin and customiz it
  $("body").niceScroll({
    cursorcolor: $('body').attr('data-main-color'),
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


  // Customize the Bootstrap slider
//  $('#whatTheySay .carousel').carousel({});

/* End customize plugins */

/* Start my function and codes */

  // change nav backgroundColor onscroll
  var nav = document.querySelector('nav');
  window.onscroll = function(){
    if (window.pageYOffset >= 30) {
      nav.style.backgroundColor = '#212121';
    } else {
      nav.style.backgroundColor = 'transparent';
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

  // Create a circular progress bar using canvas
  /* Global variables for circular progress */
  var circlularProgress = document.querySelectorAll('.circularProgressMAF');

  // some colors as Default
  var progressColor = ['#029eff', '#febe02', '#87D37C', '#F89406','#029eff', '#febe02', '#87D37C', '#F89406','#029eff', '#febe02', '#87D37C', '#F89406','#029eff', '#febe02', '#87D37C', '#F89406'];

  // radian
  var rad = Math.PI / 180;

  // Start Arc from top at 12 O'clock
  var startArc = 270;
  var fontSize = 22;
  var i;

  for (i = 0;i < circlularProgress.length;i++) {
    var ctx = circlularProgress[i].getContext('2d');
    var cd = circlularProgress[i].parentElement.clientWidth;
    circlularProgress[i].width = circlularProgress[i].height = cd;
    var progressValue = circlularProgress[i].getAttribute('data-progress-value');
    var endArc = (progressValue / 100) * 360;

    // create the circle
    ctx.arc(cd/2, cd/2, cd/6, startArc * rad,(startArc + endArc) * rad, false);

    // set the colors
    ctx.strokeStyle = progressColor[i];
    ctx.lineWidth = 7;
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.font = fontSize + 'px arial';
    ctx.fillText(progressValue + '%', cd/2, (fontSize + cd)/2);
    ctx.stroke();
  }

  // Hide the loading animation if the page finish the loading
  $(function(){
    $('.loadingMAF').hide();
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

/* End my function and codes */
// animated progress bar
$(function () {
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});

// $( window ).scroll(function() {
 // if($( window ).scrollTop() > 10){  // scroll down abit and get the action
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });
});

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

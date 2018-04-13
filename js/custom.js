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

  // Trigger mixitUp plugin
  var mixer = mixitup('.projects');

  // Trigger slick plugin
  $('.fiverr-team').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    speed: 300,
    centerMode: true
  });

  // Customize the Bootstrap slider
//  $('#whatTheySay .carousel').carousel({});

/* End customize plugins */

/* Start my function and codes */

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


/* End my function and codes */

});
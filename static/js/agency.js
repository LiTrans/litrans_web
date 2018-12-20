// Trigger CSS animations on scroll.
// Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/

// Looking for a version that also reverses the animation when
// elements scroll below the fold again?
// --> Check https://codepen.io/bramus/pen/vKpjNP

jQuery(function($) {

  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {

    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }

    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 200) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};

  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

// Smooth scrolling via animate()
$(document).ready(function(){
  if ($('.g-recaptcha')) {
    checkReCaptcha()
  }

  $("a").on('click', function(event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  // Navigation change on scroll
  var maxOffset = 300;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
      $('.navbar-default').addClass('navbar-shrink');
    }
    else {
      $('.navbar-default').removeClass('navbar-shrink');
    }
  });

  var maxOffset = 300;
  if ($(window).scrollTop() >= maxOffset) {
    $('.navbar-default').addClass('navbar-shrink');
  }
  else {
    $('.navbar-default').removeClass('navbar-shrink');
  }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Async contact form
$('form[id=contactForm]').submit(function(){
  $.post($(this).attr('action'), $(this).serialize(), function(data, textStatus, jqXHR){
    $('form[id=contactForm] #success').hide();
    $('form[id=contactForm] #error').hide();
    if (jqXHR.status == 200) {
      $('form[id=contactForm] #success').show();
    }}, 'json').fail(function(){
      $('form[id=contactForm] #success').hide();
      $('form[id=contactForm] #error').hide();
      $('form[id=contactForm] #error').show();
  });
  return false;
});

// Contact form validation
$.validate({
  modules : 'html5, toggleDisabled'
});

function onContactCaptcha($form) {
  $('form#contactForm').submit();
}

function checkReCaptcha() {
  if (typeof grecaptcha === "undefined") {
    $('.captcha-error').show();
    setTimeout(checkReCaptcha, 200);
  } else {
    $('.captcha-error').hide();
    $('.g-recaptcha-filler').hide();
    $('.g-recaptcha').attr('disabled', true);
  }
}

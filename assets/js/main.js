(function ($) {
 "use strict";
            
    if (window.matchMedia('(min-width: 768px)').matches){
      $('.navbar .nav-item').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(400);
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(300);
      });
    }  
   
    // STICKY ACTIVE
      var activeSticky = $('#active-sticky'),
          winD = $(window);
        winD.on('scroll',function() {
          var scroll = $(window).scrollTop(),
                isSticky = activeSticky;
          if (scroll < 2) {
                isSticky.removeClass("is-sticky");
          }
          else{
            isSticky.addClass("is-sticky");
          }
       });
    
     
    //Project Slider
    $('.project-slide').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      centerPadding: '0',
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    
    // Fun Fact
    
     $('.counter').counterUp({
            delay: 10,
            time: 1000
        });


    //Banner Slider
    $('.banner-slide').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<img class="prev" src="assets/img/icons/arrow-2.png">',
          nextArrow: '<img class="next" src="assets/img/icons/arrow-1.png">'
        });
    
    
    //Testimonial Slider
    
    $('.testimonial-slider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      arrows: true,
      prevArrow: '<i class="ti-angle-left"></i>',
      nextArrow: '<i class="ti-angle-right"></i>',
      slidesToScroll: 1
    });
	
    // Brand Logo
    
        $('.brand-logo').slick({
          dots: false,
          arrows: false,
          infinite: true,
          speed: 300,
          centerPadding: '10px',
          slidesToShow: 5,
          autoplay: true,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 2
              }
            }
          ]
        });
    
    
    
    /* Portfolio PopUp */
    $('.venobox').venobox();
    
    $('.venobox_custom').venobox({
        framewidth: '',
        frameheight: '',
        titleattr: 'data-title',
        arrowsColor: 'transparent',
        autoplay: true,
        infinigall: true         
    });
    
     /* Isotope menu */
     var folioMenuLi = $('.portfolio_filter li');
		 if (folioMenuLi.length) {
            folioMenuLi.on('click', function() {
				var folioGrid = $('.grid');
				folioMenuLi.removeClass("active");
				$(this).addClass("active");
				var selector = $(this).attr('data-filter');
				folioGrid.isotope({
					filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
            });
         }
    
	jQuery(window).on('load', function(){
		
        // Masonry grid
        var masonryGrid = $('.masonry-grid');
			if (masonryGrid.length) {
				masonryGrid.isotope({
					itemSelector: '.grid-item',
					// layout mode options
					layoutMode: 'masonry',
					masonryHorizontal: {
						rowHeight: 200
					}
				});
			}
	});
    //pricing-tab-switcher

        $('.pricing-tab-switcher').on('click', function () {
            $(this).toggleClass('active');

            $('.pricing-amount').toggleClass('change-subs-duration');
        });
    
    
    /* Preloader */
    
    var preloader = document.getElementById("preloader");

        window.addEventListener('load', function(){
          overlay.style.display = 'none';
        })
    
      /* Mailchimp */
        $('#mc-form').ajaxChimp({
                language: 'en',
                callback: mailChimpResponse,
                // ADD YOUR MAILCHIMP URL BELOW HERE!
                url: 'YOUR_MAILCHIMP_URL_HERE'
            });

            function mailChimpResponse(resp) {
                if (resp.result === 'success') {
                    $('.tm-mailchimp-success').html('' + resp.msg).fadeIn(900);
                    $('.tm-mailchimp-error').fadeOut(400);
                } else if (resp.result === 'error') {
                    $('.tm-mailchimp-error').html('' + resp.msg).fadeIn(900);
                }
            }

     /* Wow JS */
    var wow = new WOW(
      {
        boxClass:     'wow',      
        animateClass: 'animated', 
        offset:       0, 
        mobile:       true,
        live:         true,
        callback:     function(box) {
          
        },
        scrollContainer: null,
        resetAnimation: true,
      }
    );
    wow.init();
    
    
    /*Ajax Contact Form*/
    function ajaxContact(){
        
    // Get the form.
    var form = $('#tm-contactform');

    // Get the messages div.
    var formMessages = $('.form-messages');

    // TODO: The rest of the code will go here...

    // Set up an event listener for the contact form.
    $(form).submit(function (event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })


            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#tm-contactform input:not([type="submit"]), #tm-contactform textarea').val('');
            })

            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });
        
    }
    ajaxContact();

})(jQuery);

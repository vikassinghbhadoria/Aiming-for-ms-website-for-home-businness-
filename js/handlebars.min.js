$(document).ready(function() {

    Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    });

	// Global Variables
	var navbarToggleButton = $('.navbar-toggler');
	var navbarLight = $('.navbar-light');

  $('[data-toggle="tooltip"]').tooltip();


	// on opening the burger menu
	navbarToggleButton.on("click", function() {
        //$('.navbar-light').removeClass('bg-mob-white');
		//$('.ff-nav').removeClass('mob-head-bg-white');
        //$('.ff-nav').toggleClass('black-nav');
		// $(".burger-line1").toggleClass("opened-line-1");
        // $(".burger-line2").toggleClass("opened-line-2");
		// $(".burger-line3").toggleClass("opened-line-3");
		$("body").toggleClass("overflow-content");
		$(".menu").toggleClass("view");
        $(".company-name").toggleClass("company-name-head");
        $('.ff-nav .brand-container').toggleClass('logo-nav-btn');
        $(this).toggleClass('logo-nav-btn');
    });


    if($("body").hasClass("overflow-content")){
        //console.log($(this))
        $(".ff-nav").removeClass("mob-head-bg-white");
    }else{
        $(".ff-nav").addClass("mob-head-bg-white")
    }


    $(".close-black-div").on("click", function(){
        $(".menu").removeClass("view");
        $("body").removeClass("overflow-content");
        $(".ff-nav").removeClass("black-nav");
    });

	// home page service section hover
	$(".service-content")
  .mouseenter(function() {
     $(".service-img").hide();
     var imgid = $(this).data("id");
     $(".service-img" + imgid).show();
 })
  .mouseleave(function() {
     $(".service-img").hide();
     $(".service-img2").show();
 });

    // $('.service-section .service-content')
    //     .mouseenter(function() {
    //         var checkId = $(this).data("id");
    //         if(checkId == 1) {
    //             $('.service-section .service-content-wrap .service-content').eq(0)
    //                 .find('.service-title').addClass('arrow-animate');
    //         }
    //         else {
    //             $('.service-section .service-content-wrap .service-content').eq(0)
    //                 .find('.service-title').removeClass('arrow-animate');
    //         }
    //     })
    //     .mouseleave(function() {
    //         var checkId = $(this).data("id");
    //         if(checkId == 1) {
    //             $('.service-section .service-content-wrap .service-content').eq(0)
    //                 .find('.service-title').removeClass('arrow-animate');
    //         }
    //         else {
    //             $('.service-section .service-content-wrap .service-content').eq(0)
    //                 .find('.service-title').addClass('arrow-animate');
    //         }
    //     })


    // get blogs list from api call
    // function getBlogs(page ="1",limit ="6",url) {
    //     $.ajax({
    //         method: 'GET',
    //         url: url,
    //         data : {
    //             perspective : true,
    //             page : page,
    //             limit: limit
    //         },
    //         success: function(data) {
    //             source = $('#blog-list-script').html();
    //             template = Handlebars.compile(source);
    //             $(".blog-listing").find('.row').remove();
    //             $(".blog-listing").append(template(data.data));

    //             activePage = data.meta.pagination.current_page;

    //             if(data.meta.pagination.total_pages <= data.meta.pagination.current_page){
    //                 showmoreBtn.remove();
    //             }
    //         },
    //         error: function(error) {
    //             $(".blog-list").html('<p class="alert alert-danger">'+error.responseJSON.error.message+'</p>');
    //         }
    //     })
    // }
    // get blogs list from api call functionality end

    $('.service-section .service-content').on('mouseenter', function() {
        var checkId = $(this).data("id");
        if(checkId == 2) {
            $('.service-section .service-content-wrap .service-content').eq(0)
            .find('.service-title').addClass('arrow-animate');
            $('#s-design').css('color', '#f9a61f');
        }
        else {
            $('.service-section .service-content-wrap .service-content').eq(0)
            .find('.service-title').removeClass('arrow-animate');
            $('#s-design').css('color', 'black');
        }
    });

    $('.service-section .service-content').on('mouseleave click', function() {
        var checkId = $(this).data("id");
        if(checkId == 2) {
            $('.service-section .service-content-wrap .service-content').eq(0)
            .find('.service-title').removeClass('arrow-animate');
            $('#s-design').css('color', '#f9a61f');
        }
        else {
            $('.service-section .service-content-wrap .service-content').eq(0)
            .find('.service-title').addClass('arrow-animate');
            $('#s-design').css('color', '#f9a61f');
        }
    });


    $('.service-section .service-wrapper')
    .mouseleave(function() {
        $('.service-section .service-content-wrap .service-content').eq(0)
        .find('.service-title').addClass('arrow-animate');
    })


    //for iphone, ipad to avoid double click because of existing hover effect
    $('.service-section .service-content a').on('click', function(e) {
        var el = $(this);
        var link = el.attr('href');
        window.location = link;
    });

    //Team quote
    $(".our-team-content")
    .mouseenter(function() {
        var quoteid = $(this).data("img");
        $(".team-quote-" + quoteid).show();
    })
    .mouseleave(function() {
        $('.team-quote').hide();
    });


	// career job description application form
	$(".application-form-section").hide();
    $('.thank-you-wrap').hide();
    $(".apply-btn").on("click", function() {
      $(".jd-section").hide();
      $(".application-form-section").show();
      $("html, body").animate(
      {
        scrollTop: $(".jd-section").offset().top
    }
    );
  });


	// navbar background for mobile screen
    if ($(window).width() <= 991) {
        navbarToggleButton.on("click", function() {
            $('.company-name').toggleClass('white-toggle-heading');
        });
    }


    // Add static white background in navbar section

	// if ($(window).width() <= 1299) {
		// $(window).scroll(function() {
		// 	if ($('body').scrollTop() > 10 || $(document).scrollTop() > 10) {
		//		$('.ff-nav').addClass('mob-head-bg-white');
		// 	}
		// 	else {
		// 		$('.ff-nav').removeClass('mob-head-bg-white');
		// 	}
		// });
	// }


	// on window scroll
	$(window).scroll(function() {
       if ($(document).scrollTop() > 0) {
        $('.main-navbar .company-name').css('visibility','hidden');
    }
    else {
        $('.main-navbar .company-name').css('visibility','visible');
    }
});


	// google re-captcha border
	setTimeout(function() {
		$('.g-recaptcha>div>div').css({
          "border": "1px solid black",
          "height": "100%",

      })
	}, 1000);
	

	$(".bootstrap-filestyle .buttonText").text("Attach (Upto 10mb only)");


	//Dynamic Navbar
	var pageURL = $(location)
  .attr("href")
  .split("/")
  .pop();
  
  if (pageURL != "") {
      $(".navbar-brand").css("color", "black");
      navbarToggleButton
      .find('.burger-line1')
      .addClass('burger-line1-scroll');
      navbarToggleButton
      .find('.burger-line2')
      .addClass('burger-line2-scroll');
      navbarToggleButton
      .find('.burger-line3')
      .addClass('burger-line3-scroll');
      if ($(window).width() <= 991) {
        navbarToggleButton.on('click', function() {
                //$('.ff-nav').addClass('mob-head-bg-white');
                $('.ff-nav').toggleClass('black-nav');
            })
    }
}

if (pageURL == "") {
    if ($(window).width() <= 1299) {
        $('.company-name').addClass('ff-white-heading');
        navbarToggleButton.on('click', function() {
                // $('.ff-nav').addClass('mob-head-bg-white');
                // $('.ff-nav').toggleClass('black-nav');
                $('.company-name').toggleClass('ff-white-heading');
            });
        $(window).scroll(function() {
            if ($(document).scrollTop() > 5) {
                navbarToggleButton
                .find('.burger-line1')
                .addClass('burger-line1-scroll');
                navbarToggleButton
                .find('.burger-line2')
                .addClass('burger-line2-scroll');
                navbarToggleButton
                .find('.burger-line3')
                .addClass('burger-line3-scroll');
            } else {
                navbarToggleButton
                .find('.burger-line1')
                .removeClass('burger-line1-scroll');
                navbarToggleButton
                .find('.burger-line2')
                .removeClass('burger-line2-scroll');
                navbarToggleButton
                .find('.burger-line3')
                .removeClass('burger-line3-scroll');
            }
        });
    } 
    else {
        $(window).scroll(function() {
            if ($(document).scrollTop() > 700) {

                // $('.main-navbar img').addClass('header-position');
                navbarToggleButton
                .find('.burger-line1')
                .addClass('burger-line1-scroll');
                navbarToggleButton
                .find('.burger-line2')
                .addClass('burger-line2-scroll');
                navbarToggleButton
                .find('.burger-line3')
                .addClass('burger-line3-scroll');
            }
            else {
                navbarToggleButton
                .find('.burger-line1')
                .removeClass('burger-line1-scroll');
                navbarToggleButton
                .find('.burger-line2')
                .removeClass('burger-line2-scroll');
                navbarToggleButton
                .find('.burger-line3')
                .removeClass('burger-line3-scroll');
            }
        });
    }
}



/* slider functionality start */
$(".slider").slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    centerMode: false,
            // variableWidth: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
            {
			        breakpoint: 768, // or whatever breakpoint you want to render below
			        settings: {
                       variableWidth: false,
                       slidesToShow: 1,
                       slidesToScroll: 1,
                       centerMode: false,
                   }
               }
               ]
           });

        //ticking machine
        var percentTime;
        var tick;
        var time = 1;
        var progressBarIndex = 0;

        var progress = $('.inProgress');

        $('.progressBarContainer .progressBar').each(function (index) {
            var progress = "<div class='inProgress inProgress" + index + "'></div>";
            $(this).html(progress);
        });

        function startProgressbar() {
            resetProgressbar();
            percentTime = 0;
            tick = setInterval(interval, 20);
        }

        function interval() {
            if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
                progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");

                
                startProgressbar();

            } else {
                percentTime += 1 / (time + 2);
                $('.inProgress' + progressBarIndex).css({
                    width: percentTime + "%"
                });
                if (percentTime >= 100) {
                    $('.single-item').slick('slickNext');

                    progressBarIndex++;

                    if (progressBarIndex > 2) {
                        progressBarIndex = 0;
                    }
                    startProgressbar();
                    

                }

            }
        }

        function resetProgressbar() {
            $('.inProgress').css({
                width: 0 + '%'
            });
            clearInterval(tick);
        }
        startProgressbar();
        // End ticking machine

        $('.progressBarContainer div').click(function () {
            clearInterval(tick);
            var goToThisIndex = $(this).find("span").data("slickIndex");
            $('.single-item').slick('slickGoTo', goToThisIndex, false);
            startProgressbar();
        });

        /* slider functionality end */



        var body = $('body');

        $('.read-more-humanise').on('click', function() {
        	// $('.pop-up-humanise').show().addClass('pop-up-wrap background-light-green');
        	// body.append($('.pop-up-humanise').show().addClass('pop-up-wrap background-light-green'));
        	body.append($('.pop-up-humanise').show().addClass('popup-add background-light-green'));
            $('.popup-add').addClass('overflow-popup');
        });

        $('.read-more-design').on('click', function() {
        	body.append($('.pop-up-design').show().addClass('popup-add background-light-yellow'));
            $('.popup-add').addClass('overflow-popup');
        });

        $('.read-more-reimagine').on('click', function() {
        	body.append($('.pop-up-reimagine').show().addClass('popup-add background-light-red'));
            $('.popup-add').addClass('overflow-popup');
        });

        $('.read-more-digital').on('click', function() {
        	body.append($('.pop-up-digital').show().addClass('popup-add background-light-grey'));
            $('.popup-add').addClass('overflow-popup');
        });

        $('.popup-close').on('click', function() {
        	// $('.pop-up-wrap').hide();
        	$('.popup-add').hide();
            $('.popup-add').removeClass('overflow-popup');
        });

        $('.view-related').on('click', function() {
        	// $('.pop-up-wrap').hide();
        	$('.popup-add').hide();
        });


        /* featured-work page */
        $('.service-list').hide();

        $('.case-study-wrap .title-cs-btn').on('click', function() {
        	$('.service-list').hide();
        	$('.case-study-wrap-content').show();
        });

        $('.fw-tabs .p-view-all').on('click', function() {
        	$('.case-study-wrap-content').hide();
        	var service_division_id = $(this).data("servicebtn");
        	$('.service-display'+service_division_id).show();
        });

        // $('.service-list').hide();

        $('.fw-search-container .search-input').on('click', function() {
            $('.fw-search-container .search-btn').hide();
            $('.fw-search-container .search-close-btn').show();
            // $('.search-input').addClass('grey-placeholder');

        });

        


        /* to hide the left-side icons */

        ;(function($) {
            $.fn.visible = function(partial) {

              var $t            = $(this),
              $w            = $(window),
              viewTop       = $w.scrollTop(),
              viewBottom    = viewTop + $w.height(),
              _top          = $t.offset().top,
              _bottom       = _top + $t.height(),
              compareTop    = partial === true ? _bottom : _top,
              compareBottom = partial === true ? _top : _bottom;

              return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

          };

      })(jQuery);
      
      var win = $(window);

      win.scroll(function(event) {
        var el = $('.lets-connect-section');
        if(pageURL !== '') {

            if (el.visible(true)) {
              $('.icon-contact').hide();
              $('.vertical-icons-container').hide();
          }  
          else {
            $('.icon-contact').show();
            $('.vertical-icons-container').show(); 
        }

    }
    
    
});    

        //Add active class to nav-pill in contact and career page
        if(window.location.pathname == "/contact-careers"){
            $('#pills-tab').find('.career').addClass('active').parent()
            .siblings().children();
        }
        if(window.location.pathname == "/contact-business"){
            $('.contact').addClass('active').parent()
            .siblings().children().removeClass('active');
        }

        if(window.location.pathname == "/contact-community"){
            $('#pills-tab').find('.community').addClass('active').parent()
            .siblings().children().removeClass('active')
        }

        //Add active class to nav-pill in blogs page
        if(window.location.pathname == "/insights"){
            $('#pills-tab').find('.blogs').addClass('active').parent()
            .siblings().children();
        }
        if(window.location.pathname == "/insights/perspective"){
            $('#pills-tab').find('.perspective ').addClass('active').parent()
            .siblings().children().removeClass('active')
        }

        if(window.location.pathname == "/insights/news-and-events"){
            $('#pills-tab').find('.news-and-events').addClass('active').parent()
            .siblings().children().removeClass('active')
        }

        // if(window.location.pathname == "/contact-business/#" || 
        //     window.location.pathname == "/contact-careers/#"){
        //     $('#pills-tab').find('.career').addClass('active').parent()
        //         .siblings().children();
        // }

        //link to our studio section
        $('.link-to-our-studio').click(function(e){
            e.preventDefault();
            var target = $($(this).attr('href'));
            
            var scrollTo = target.offset().top-70;
            $('body, html').animate({scrollTop: scrollTo}, 800);
            
        });


        //community page on click on here scroll to form
        $('.email-ul').click(function(e){
            e.preventDefault();
            var target = $($(this).attr('href'));
            
            var scrollTo = target.offset().top-40;
            $('body, html').animate({scrollTop: scrollTo}, 500);
            
        });

        //active link on click for engage with us section
        var engageNav = $('.nav-for-engage'),
        present = $('.presentation');

        engageNav.on('click', '.link-to-our-studio', function(){

            engageNav.find('.activate').removeClass('activate');
            $(this).addClass('activate');

            $('.v-img-container').find()

        });

        // $(".ff-nav").offset().top;


        /* to load career tab */
        var url = document.location.toString();
        if (url.match('#')) {
            $('.nav-pills a[href="#' + url.split('#')[1] + '"]').tab('show');
        } 

        // Change hash for page-reload
        $('.nav-pills a').on('shown.bs.pill', function (e) {
            window.location.hash = e.target.hash;
        })


        /* privacy policy black banner */
        $('.got-it-btn').on('click', function() {
            $('.privacy-policy-container').remove();
        });


        /* checkbox validation */
        $('#community-form .cb-error-msg').hide();
        $('.community-btn').click(function(e) {
          var checked = $("input[type=checkbox]:checked").length;

          if(!checked) {
            e.preventDefault();
            // $('.community-form').append('<p class="error-msg">You must check at least one checkbox.</p>')
            $('#community-form .cb-error-msg').show()
            return false;
        }

    });

        
        /* To show the service block based on service page view related url */
        // if(pageURL == "featured-work#service-section") {
        //     $('.nav-pills a[href="#services"]').tab('show');
        // }

        if(pageURL == "featured-work#services#design-services") {
            $('.case-study-wrap-content').hide();
            $('#design-services').show();
            // $("#design-services").offset().top;
            // console.log(true);
        }


        // if(pageURL == "featured-work#services#research-cs") {
        //     $('#research-cs').show();
        //     $('.case-study-wrap-content').hide();
        // }


        /* To avoid space at start of the input box */
        $(".first-space-check").on("keypress", function(e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        var searchInput = $('#search-product');
        var productSearch = $('.product-search');
        var searchClear = $('.search-close-btn');
        var saearchIcon = $('.search-btn');
        var searchInput = $('.search-input');
        var title = $('.cs-title-wrap');
        // var title = $('.case-study-wrap');
        var len = productSearch.length;


        searchClear.on('click', function(){
            $(this).hide();
            searchInput.val('');
            saearchIcon.show();
            productSearch.show();
            $('.no-result').remove();
        });


        /* search product */
        searchInput.on("keypress", function(e) {

            if(e.which == 13) {

                productSearch.show();
                $('.no-result').remove();

                var count = 0;

                var inputData = $(this).val().toLowerCase();

                if(inputData.length === 0){
                    return true;
                }
                
                for(var i=0; i<len; i++) {

                    var searchableData = productSearch.eq(i).data('search');
                    if(!searchableData.toLowerCase().match(inputData)){
                        productSearch.eq(i).hide();
                        count++;
                    }
                }


                if(count === len){
                    title.append('<p class="no-result alert-danger">No Matching Data Found!</p>');
                }

            }
        });

        if($(window).width() < 425){
            if ($(window).width() <= 1299) {
                $('.explore-more').on('click', function() {
                    $('html, body').animate({
                        scrollTop: $(".home-service-section").offset().top
                    }, 800);
                })
            }
            else {
                $('.explore-more').on('click', function() {
                    $('html, body').animate({
                        scrollTop: $(".home-service-section").offset().top + 80
                    }, 800);
                })
            }
        }

        if(pageURL == '') {
            if ($(window).width() <= 991) {
                // $(window).scroll(function() {
                    navbarToggleButton.on("click", function() {
                        if ($('body').scrollTop() > 10 || $(document).scrollTop() > 10) {
                            $('.ff-nav').toggleClass('black-nav');
                            //$('.ff-nav').toggleClass('mob-head-bg-white');    
                        }
                    });
                    
                // });
            }    
        }
        

        // $(".icon").animate({
        //     top: "20px"
        // }, 400, "easeOutBounce").delay(100).animate({
        //     top: "0px"
        // }, 300, "easeOutExpo");
        

    // To get all Blogs on type [ all, perspective, news ]
    function getBlogs(type="",page ="1",limit ="6") {
        $.ajax({
            method: 'GET',
            url: '/api/blogs/list',
            data : {
                type : type,
                page : page,
                limit: limit
            },
            success: function(data) {
                source = $('#blog-list-script').html();
                template = Handlebars.compile(source);
                $(".blog-listing").find('.row').remove();
                $(".blog-listing").append(template(data.data));
            },
            error: function(error) {
                $(".blog-list").html('<p class="alert alert-danger">'+error.responseJSON.error.message+'</p>');
            }
        })
    }


});

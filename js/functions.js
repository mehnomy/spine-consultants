(function ($) {
  'use strict';

  // *** On ready *** //
  $(document).on('ready', function () {
    responsiveClasses();
    dataCustomOptions();
    fullscreenSection();
    imageBG();
    fitVideos();
    BGVideoYTPlayer();
    lightboxImage();
    lightboxGallery();
    lightboxIframe();
    scrollProgress();
    mobileMenu();
    superfishMenu();
    onePageNav();
    scrollToAnchor();
    stickyHeaderBar();
    bannerParallaxImageBG();
    sectionParallaxImageBG();
    bannerSlider();
    sliderPopularClasses();
    sliderTestimonials();
    sliderClients();
    sliderImageBG();
    optimizeSliderImageBG();
    formRegisterMemeber();
    scrollTopIcon();
    showBanner();
  });

  // *** On load *** //
  $(window).on('load', function () {
    parallaxStellar();
  });

  // *** On resize *** //
  $(window).on('resize', function () {
    optimizeSliderImageBG();
    responsiveClasses();
    fullscreenSection();
    parallaxStellar();
  });

  // *** On scroll *** //
  $(window).on('scroll', function () {
    stickyHeaderBar();
    scrollTopIcon();
    scrollProgress();
  });

  // *** On Scroll In On load *** //
  $(window).on('load', function () {
    $(window).on('scroll', function () {});
  });

  // *** jQuery noConflict *** //
  var $ = jQuery.noConflict();

  // *** General Variables *** //
  var $window = $(window),
    $this = $(this),
    $body = $('body');

  // *** Data Custom Options *** //
  function dataCustomOptions() {
    $('*[data-pattern-overlay-darkness-opacity]').each(function () {
      var a = $(this).data('pattern-overlay-darkness-opacity');
      $(this).css('background-color', convertHex('#000000', a));
    }),
      $('*[data-pattern-overlay-background-image]').each(function () {
        'none' == $(this).data('pattern-overlay-background-image')
          ? $(this).css('background-image', 'none')
          : 'yes' == $(this).data('pattern-overlay-background-image') &&
            $(this).css('background-image');
      }),
      $('*[data-remove-pattern-overlay]').each(function () {
        'yes' == $(this).data('remove-pattern-overlay') &&
          $(this).css('background', 'none');
      }),
      $('*[data-bg-color]').each(function () {
        var a = $(this).data('bg-color');
        $(this).css('background-color', a);
      }),
      $('*[data-bg-color-opacity]').each(function () {
        var a = $(this).data('bg-color-opacity'),
          t = $(this)
            .css('background-color')
            .replace('rgb', 'rgba')
            .replace(')', ', ' + a + ')');
        $(this).css('background-color', t);
      }),
      $('*[data-bg-img]').each(function () {
        var a = $(this).data('bg-img');
        $(this).css('background-image', "url('" + a + "')");
      }),
      $('*[data-parallax-bg-img]').each(function () {
        var a = $(this).data('parallax-bg-img');
        $(this).css(
          'background-image',
          "url('./images/files/parallax-bg/" + a + "')"
        );
      });
  }

  // Custom banner height
  $('.banner-parallax').each(function () {
    var customBannerHeight = $(this).data('banner-height'),
      boxContent = $(this).find(".row > [class*='col-']");
    $(this).css('min-height', customBannerHeight);
    $(boxContent).css('min-height', customBannerHeight);
  });

  // *** Responsive Classes *** //
  function responsiveClasses() {
    var jRes = jRespond([
      {
        label: 'smallest',
        enter: 0,
        exit: 479,
      },
      {
        label: 'handheld',
        enter: 480,
        exit: 767,
      },
      {
        label: 'tablet',
        enter: 768,
        exit: 991,
      },
      {
        label: 'laptop',
        enter: 992,
        exit: 1199,
      },
      {
        label: 'desktop',
        enter: 1200,
        exit: 10000,
      },
    ]);
    jRes.addFunc([
      {
        breakpoint: 'desktop',
        enter: function () {
          $body.addClass('device-lg');
        },
        exit: function () {
          $body.removeClass('device-lg');
        },
      },
      {
        breakpoint: 'laptop',
        enter: function () {
          $body.addClass('device-md');
        },
        exit: function () {
          $body.removeClass('device-md');
        },
      },
      {
        breakpoint: 'tablet',
        enter: function () {
          $body.addClass('device-sm');
        },
        exit: function () {
          $body.removeClass('device-sm');
        },
      },
      {
        breakpoint: 'handheld',
        enter: function () {
          $body.addClass('device-xs');
        },
        exit: function () {
          $body.removeClass('device-xs');
        },
      },
      {
        breakpoint: 'smallest',
        enter: function () {
          $body.addClass('device-xxs');
        },
        exit: function () {
          $body.removeClass('device-xxs');
        },
      },
    ]);
  }

  // *** Fullscreen Section *** //
  function fullscreenSection() {
    $('.fullscreen, #home-header, #home-banner').css(
      'height',
      $(window).height()
    );
    $('#banner.fullscreen').css('height', $(window).height());
  }

  // *** RTL Case *** //
  var HTMLDir = $('html').css('direction'),
    owlRtl;

  // If page is RTL
  if (HTMLDir == 'rtl') {
    // Owl Carousel
    owlRtl = true;
  } else {
    owlRtl = false;
  }

  // *** Image Background *** //
  function imageBG() {
    $('.img-bg').each(function () {
      var $this = $(this),
        imgSrc = $this.find('img').attr('src');

      if ($this.parent('.section-image').length) {
        $this.css('background-image', "url('" + imgSrc + "')");
      } else {
        $this.prepend("<div class='bg-element'></div>");
        var bgElement = $this.find('.bg-element');
        bgElement.css('background-image', "url('" + imgSrc + "')");
      }
      $this.find('img').css({ opacity: 0, visibility: 'hidden' });
    });
  }

  // *** Stellar Parallax *** //
  function parallaxStellar() {
    $(function () {
      if (
        $body.hasClass('device-lg') ||
        $body.hasClass('device-md') ||
        $body.hasClass('device-sm')
      ) {
        $.stellar({
          horizontalScrolling: false, // don't change this option
          // verticalScrolling: false,
          verticalOffset: 0,
          responsive: true, // false
        });
      }
    });
  }

  // *** Fit Videos *** //
  function fitVideos() {
    $('#full-container').fitVids();
  }

  // *** Background Videos *** //
  function BGVideoYTPlayer() {
    $('.video-background').each(function () {
      $(this).YTPlayer({
        mute: false,
        autoPlay: true,
        opacity: 1,
        containment: '.video-background',
        showControls: false,
        startAt: 0,
        addRaster: true,
        showYTLogo: false,
        stopMovieOnBlur: false,
      });
    });
  }

  // *** Lightbox Iframe *** //
  function lightboxIframe() {
    $('.lightbox-iframe').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }

  // *** Lightbox Image *** //
  function lightboxImage() {
    $('.lightbox-img').magnificPopup({
      type: 'image',
      gallery: {
        enabled: false,
      },
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }

  // *** Lightbox Gallery *** //
  function lightboxGallery() {
    $('.lightbox-gallery').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }

  // *** Scroll Top Icon *** //
  function scrollTopIcon() {
    var windowScroll = $(window).scrollTop();
    if ($(window).scrollTop() > 800) {
      $('.scroll-top-icon').addClass('show');
    } else {
      $('.scroll-top-icon').removeClass('show');
    }
  }

  $('.scroll-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1200,
      'easeInOutExpo'
    ); //1200 easeInOutExpo
  });

  // *** Scroll Progress *** //
  function scrollProgress() {
    var docheight = $(document).height();
    var winheight = $(window).height();
    var height = docheight - winheight;
    var scroll = $(document).scrollTop();
    var scrollperc = scroll / (height / 100);
    $('#scroll-progress .scroll-progress').width(scrollperc + '%');
    $('.scroll-percent').text(scrollperc.toFixed(0) + '%');
  }

  // *** Mobile Menu *** //
  function mobileMenu() {
    // Cloning Main Menu to Mobile Menu
    $('#menu-main')
      .clone()
      .appendTo('#menu-mobile')
      .removeClass()
      .addClass('menu-mobile');

    // For Scroll Purpose
    if ($('.menu-mobile').length) {
      var mobMenuScroll = document.querySelector('#menu-mobile');
      SimpleScrollbar.initEl(mobMenuScroll);
    }

    $('.menu-mobile a').each(function (e) {
      if ($(this).next('.sub-menu').length) {
        // $( this ).addClass( "ddddddd" );
        $(this).closest('li').addClass('has-ul');
      }
    });

    $('.menu-mobile a').on('click', function (e) {
      var $this = $(this);
      $this.next('.sub-menu').length &&
        (e.preventDefault(),
        $this.next().hasClass('viewed')
          ? ($this.next().removeClass('viewed'),
            $this.parent().find('.active').removeClass('active'),
            $this.next().slideUp(250))
          : ($this.parent().parent().find('.active').removeClass('active'),
            $this.parent('ul').find('.active').removeClass('active'),
            $this.parent().parent().find('li .sub-menu').removeClass('viewed'),
            $this.parent().parent().find('li .sub-menu').slideUp(250),
            $this.toggleClass('active'),
            $this.next().toggleClass('viewed'),
            $this.next().slideToggle(250)));
    });

    // Toggle Mobile Menu
    $('.menu-mobile-btn').on('click', function (e) {
      e.preventDefault();
      $(this).find('.hamburger').toggleClass('is-active');
      $('#menu-mobile-wrap').stop().slideToggle(250);
    });
  }

  // *** Dropdown Menu *** //
  function superfishMenu() {
    // Firing Superfish plugin
    $('.menu-main').superfish({
      popUpSelector: 'ul',
      cssArrows: true,
      delay: 300,
      speed: 200,
      speedOut: 150,
      animation: { opacity: 'show', height: 'show' }, //  , height : "show"
      animationOut: { opacity: 'hide' },
    });
  }

  // *** One Page Nav *** //
  function onePageNav() {
    var stickyBar = $('.header-bar.sticky'),
      stickyBarHeight = stickyBar.height(),
      offsetDifference = !stickyBar ? 0 : stickyBarHeight;

    $.scrollIt({
      upKey: false,
      downKey: false,
      scrollTime: 600,
      activeClass: 'current',
      onPageChange: null,
      topOffset: -offsetDifference,
    });

    $('.menu-mobile > li > a').on('click', function (e) {
      var classCases =
        $body.hasClass('device-md') ||
        $body.hasClass('device-sm') ||
        $body.hasClass('device-xs') ||
        $body.hasClass('device-xxs');

      if (classCases) {
        $('#menu-mobile-wrap').slideUp(250);
        $('.menu-mobile-btn .hamburger').removeClass('is-active');
      }
    });
  }

  // *** Scroll To Anchor *** //
  function scrollToAnchor() {
    var stickyBar = $('.header-bar.sticky'),
      stickyBarHeight = stickyBar.height(),
      offsetDifference = !stickyBar ? 0 : stickyBarHeight;

    $('.scroll-to').on('click', function (e) {
      e.preventDefault();
      var $anchor = $(this);

      // scroll to specific anchor
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - offsetDifference,
          },
          1200,
          'easeInOutExpo'
        );
    });
  }

  // *** Sticky Nav *** //
  var logo = $('.logo-header img'),
    logoSrc = logo.attr('src'),
    logoAlt = logo.data('logo-alt');

  function stickyHeaderBar() {
    var windowScroll = $(window).scrollTop(),
      headerBar = $('.header-bar');
    headerBar.each(function () {
      var s = $(this);
      s.hasClass('sticky') &&
        (windowScroll > s.offset().top
          ? s.addClass('is-sticky')
          : (s.removeClass('is-sticky'), s.hasClass('text-white')));
    });
  }

  // *** Banner Parallax Image BG *** //
  function bannerParallaxImageBG() {
    var bannerParallax = $('.banner-parallax'),
      imgSrc = bannerParallax.children('img:first-child').attr('src');

    bannerParallax.prepend("<div class='bg-element'></div>");
    var bgElement = bannerParallax.find('> .bg-element');
    bgElement
      .css('background-image', "url('" + imgSrc + "')")
      .attr('data-stellar-background-ratio', 0.2);
  }

  // *** Section Parallax Image BG *** //
  function sectionParallaxImageBG() {
    $('.parallax-section').each(function () {
      var parallaxSection = $(this),
        imgSrc = parallaxSection.children('img:first-child').attr('src');

      parallaxSection.prepend("<div class='bg-element'></div>");
      var bgElement = parallaxSection.find('> .bg-element');
      bgElement
        .css('background-image', "url('" + imgSrc + "')")
        .attr('data-stellar-background-ratio', 0.2);
    });
  }

  // *** Banner Slider *** //
  function bannerSlider() {
    var bannerSlider = $('.banner-slider > .owl-carousel');
    bannerSlider.owlCarousel({
      items: 1,
      rtl: owlRtl,
      autoplay: false,
      autoplaySpeed: 800, // Sliding autoplay speed
      autoplayTimeout: 4000, // Autoplay interval timeout.
      dragEndSpeed: 600, // Sliding speed by mouse drag
      autoplayHoverPause: true, // Stop autoplay on mouse hover
      loop: true,
      slideBy: 1, // Number of item are slided for each one transition
      margin: 10, // space between each item. Very useful!
      stagePadding: 0, // This used to see part of left an right items as preview style
      nav: true, // show prev and next buttons
      dots: true, // Show dots navigation
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ], // prev and next buttons content
      responsive: {
        0: {
          // items : 1
        },
        480: {
          // items : 2
        },
        768: {
          // items : 3
        },
      },
      autoHeight: true,
      autoWidth: false,
      animateOut: 'owl-fadeUp-out',
      animateIn: 'owl-fadeUp-in',
      navRewind: true,
      center: false, // It's used to make the carousel start from the centered item
      dotsEach: 1, // Number of items per dot
      dotData: false,
      lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
      smartSpeed: 600, // Sliding speed when hover next or prev nav
      fluidSpeed: 5000,
      navSpeed: 600,
      // fallbackEasing: "ease-in-out",
      dotsSpeed: 600, // Sliding speed by using dots
    });

    bannerSlider.on('translated.owl.carousel', function (e) {
      var n = bannerSlider.find('.owl-item.active .banner-center-box');
      0 != parseInt(n.children('.bs-elem').css('top'), 10) &&
        setTimeout(function () {
          setTimeout(function () {
            n.children('h1.bs-elem')
              .css('top', 50)
              .animate({ opacity: 1 }, { duration: 500, queue: !1 })
              .animate({ top: 0 }, { duration: 500, easing: 'easeOutExpo' });
          }, 0),
            setTimeout(function () {
              n.children('.description.bs-elem')
                .css('top', 50)
                .animate({ opacity: 1 }, { duration: 500, queue: !1 })
                .animate({ top: 0 }, { duration: 500, easing: 'easeOutExpo' });
            }, 40),
            setTimeout(function () {
              n.children('.btn.bs-elem')
                .css('top', 50)
                .animate({ opacity: 1 }, { duration: 500, queue: !1 })
                .animate({ top: 0 }, { duration: 500, easing: 'easeOutExpo' });
            }, 80);
        }, 150);
    }),
      bannerSlider.on('drag.owl.carousel', function (e) {
        bannerSlider
          .find('.owl-item:not( .active )')
          .find('.banner-center-box > .bs-elem')
          .animate({ opacity: 0 }, 150)
          .css('top', 1);
      }),
      bannerSlider.on('changed.owl.carousel', function (e) {
        bannerSlider
          .find('.banner-center-box > .bs-elem')
          .animate({ opacity: 0 }, 150)
          .css('top', 1),
          setTimeout(function () {}, 150);
      }),
      bannerSlider.on('resized.owl.carousel', function (e) {
        bannerSlider
          .find('.banner-center-box > .bs-elem')
          .animate({ opacity: 1 }, 150);
      });
  }

  // *** Slider Image BG *** //
  function sliderImageBG() {
    $('.slider-img-bg .owl-item > li').each(function () {
      var $this = $(this),
        imgSrc = $this.find('.slide').children('img').attr('src');
      $this.prepend("<div class='bg-element'></div>");
      var bgElement = $this.find('> .bg-element');
      bgElement.css('background-image', "url('" + imgSrc + "')");
    });
  }

  // *** Optimize Slider Image BG *** //
  function optimizeSliderImageBG() {
    $('.slider-img-bg').each(function () {
      var imgHeight = $(this).closest('div').height();

      if ($('.banner-parallax').children('.banner-slider').length > 0) {
        // $( ".banner-parallax, .banner-parallax .row > [class*='col-']" ).height( $( ".banner-slider" ).height() );
      }

      $(this).find('.owl-item > li .slide').children('img').css({
        display: 'none',
        height: imgHeight,
        opacity: 0,
      });
    });
  }

  // *** Slider Popular Classes *** //
  function sliderPopularClasses() {
    var sliderPopularClasses = $('.slider-popular-classes > .owl-carousel');
    sliderPopularClasses.owlCarousel({
      // items: 3,
      rtl: owlRtl,
      autoplay: 3000,
      autoplaySpeed: 500, // Sliding autoplay speed
      autoplayTimeout: 5000, // Autoplay interval timeout.
      dragEndSpeed: 400, // Sliding speed by mouse drag
      autoplayHoverPause: true, // Stop autoplay on mouse hover
      loop: false,
      slideBy: 1, // Number of item are slided for each one transition
      margin: 30, // space between each item. Very useful!
      stagePadding: 0, // This used to see part of left an right items as preview style
      nav: false, // show prev and next buttons
      dots: true, // Show dots navigation
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ], // prev and next buttons content
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
      autoHeight: false,
      autoWidth: false,
      // animateOut: 'goDownOut',
      // animateIn: 'goDownIn',
      navRewind: true,
      center: false, // It's used to make the carousel start from the centered item
      dotsEach: 1, // Number of items per dot
      dotData: false,
      lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
      smartSpeed: 600, // Sliding speed when hover next or prev nav
      fluidSpeed: 5000,
      navSpeed: 400,
      // fallbackEasing: "ease-in-out",
      dotsSpeed: 400, // Sliding speed by using dots
    });
  }

  // *** Slider Testimonials *** //
  function sliderTestimonials() {
    var sliderTestimonials = $('.slider-testimonials > .owl-carousel');
    sliderTestimonials.owlCarousel({
      // items: 3,
      rtl: owlRtl,
      autoplay: 3000,
      autoplaySpeed: 500, // Sliding autoplay speed
      autoplayTimeout: 5000, // Autoplay interval timeout.
      dragEndSpeed: 400, // Sliding speed by mouse drag
      autoplayHoverPause: true, // Stop autoplay on mouse hover
      loop: false,
      slideBy: 1, // Number of item are slided for each one transition
      margin: 30, // space between each item. Very useful!
      stagePadding: 0, // This used to see part of left an right items as preview style
      nav: false, // show prev and next buttons
      dots: true, // Show dots navigation
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ], // prev and next buttons content
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
      autoHeight: false,
      autoWidth: false,
      // animateOut: 'goDownOut',
      // animateIn: 'goDownIn',
      navRewind: true,
      center: false, // It's used to make the carousel start from the centered item
      dotsEach: 1, // Number of items per dot
      dotData: false,
      lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
      smartSpeed: 600, // Sliding speed when hover next or prev nav
      fluidSpeed: 5000,
      navSpeed: 400,
      // fallbackEasing: "ease-in-out",
      dotsSpeed: 400, // Sliding speed by using dots
    });
  }

  // *** Slider Clients *** //
  function sliderClients() {
    var sliderClients = $('.clients-slider > .owl-carousel');
    sliderClients.owlCarousel({
      items: 6,
      rtl: owlRtl,
      autoplay: 3000,
      autoplaySpeed: 500, // Sliding autoplay speed
      autoplayTimeout: 3000, // Autoplay interval timeout.
      dragEndSpeed: 400, // Sliding speed by mouse drag
      autoplayHoverPause: true, // Stop autoplay on mouse hover
      loop: true,
      slideBy: 1, // Number of item are slided for each one transition
      margin: 30, // space between each item. Very useful!
      stagePadding: 0, // This used to see part of left an right items as preview style
      nav: false, // show prev and next buttons
      dots: false, // Show dots navigation
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ], // prev and next buttons content
      responsive: {
        0: {
          items: 2,
        },
        480: {
          items: 3,
        },
        768: {
          items: 4,
        },
        992: {
          items: 5,
        },
        1200: {
          items: 6,
        },
      },
      autoHeight: false,
      autoWidth: false,
      // animateOut: 'goDownOut',
      // animateIn: 'goDownIn',
      navRewind: true,
      center: false, // It's used to make the carousel start from the centered item
      dotsEach: 1, // Number of items per dot
      dotData: false,
      lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
      smartSpeed: 600, // Sliding speed when hover next or prev nav
      fluidSpeed: 5000,
      navSpeed: 400,
      // fallbackEasing: "ease-in-out",
      dotsSpeed: 400, // Sliding speed by using dots
    });
  }

  // *** Scroll To *** //
  $('.scroll-to').on('click', function (e) {
    e.preventDefault();
    var $anchor = $(this);

    // scroll to specific anchor
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top,
        },
        1200,
        'easeInOutExpo'
      );
  });

  // *** Form Register Memeber *** //
  function formRegisterMemeber() {
    $('#form-register-member').validate({
      // rules
      rules: {
        rmName: {
          required: true,
          minlength: 3,
        },
        rmEmail: {
          required: true,
          email: true,
        },
        rmPhoneNum: {
          required: true,
          number: true,
          minlength: 12,
          maxlength: 12,
        },
        rmClassName: {
          required: true,
        },
      },
    });

    var errorMsgData = $('.rm-notifications').data('error-msg'),
      errorMsgDefault = 'Please Follow Error Messages and Complete as Required',
      errorMsg = errorMsgData ? errorMsgData : errorMsgDefault;

    // Submit event
    $('#form-register-member').on('submit', function (event) {
      if (event.isDefaultPrevented()) {
        var errorContent =
          '<i class="rm-error-icon fa fa-close"></i>' + errorMsg;
        rmSubmitMSG(false, errorContent);
        rmError();
      } else {
        event.preventDefault();
        rmSubmitForm();
      }
    });
  }

  function rmSubmitForm() {
    // Initiate Variables With Form Content
    var name = $('#rmName').val(),
      email = $('#rmEmail').val(),
      phoneNum = $('#rmPhoneNum').val(),
      className = $('#rmClassName').val();

    $.ajax({
      type: 'POST',
      url: './php/rm-process.php',
      data:
        'rmName=' +
        name +
        '&rmEmail=' +
        email +
        '&rmPhoneNum=' +
        phoneNum +
        '&rmClassName=' +
        className,
      success: function (text) {
        if (text == 'success') {
          rmSuccess();
        } else {
          rmError();
          rmSubmitMSG(false, text);
        }
      },
    });
  }

  function rmSuccess() {
    var i = $('.rm-notifications').data('success-msg'),
      n = i || 'Thank you for your submission :)';
    $('#form-register-member')[0].reset(),
      rmSubmitMSG(!0, '<i class="rm-success-icon fa fa-check"></i>' + n),
      $('.rm-notifications-content').addClass('sent'),
      $('.rm-notifications').css('opacity', 0),
      $('.rm-notifications')
        .slideDown(300)
        .animate({ opacity: 1 }, 300)
        .delay(5e3)
        .slideUp(400);
  }
  function rmError() {
    $('.rm-notifications').css('opacity', 0),
      $('.rm-notifications').slideDown(300).animate({ opacity: 1 }, 300),
      $('.rm-notifications-content').removeClass('sent');
  }
  function rmSubmitMSG(i, n) {
    var t;
    (t = 'shake animated'),
      $('.rm-notifications')
        .delay(300)
        .addClass(t)
        .one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function () {
            $(this).removeClass('shake bounce animated');
          }
        ),
      $('.rm-notifications').children('.rm-notifications-content').html(n);
  }
})(jQuery);

function convertHex(hex, opacity) {
  // "use strict";
  // var r, g, b, result;
  hex = hex.replace('#', '');
  r = parseInt(hex.substring(0, 2), 16);
  g = parseInt(hex.substring(2, 4), 16);
  b = parseInt(hex.substring(4, 6), 16);

  result = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity + ')';
  return result;
}

function showBanner() {
  var url = window.location.href;
  // Get DIV
  var msg = document.getElementById('Uplift__banner');
  // Check if URL contains the keyword
  if (url.search('uplift') > 0) {
    // Display the message
    msg.style.display = 'block';
  }
}

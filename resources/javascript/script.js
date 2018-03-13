$(document).ready(function() {
    
    /* Sticky Navigation */
    $('.js--section-feature').waypoint(function(direction) {
        if(direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    },  {
          offset: '60px'
    });
   
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-feature').offset().top}, 1000);
    });
    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=]' + this.hash.slice(1) + ']');
          if(target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* Animation on scroll */
    $('.js--wp-1').waypoint(function() {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function() {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function() {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function() {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /* Mobile Nav */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        
        nav.slideToggle(200);
    });
	
	/* Maps */
	
	var map = new GMaps({
	  div: '.map',
	  lat: 38.7436057,
	  lng: -9.05,
		zoom: 12
	});
	
	
	map.addMarker({
	  lat: 38.7436057,
	  lng: -9.2302432,
	  title: 'Lisbon',
	  infoWindow: {
	  content: '<p>Our Lisbon HQ</p>'
	}
});
    
});
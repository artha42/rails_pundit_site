jQuery(function($) {
	// Register each section as a waypoint.
  $('.link-active').removeClass('link-active');
  $("a[href=#about]").addClass("link-active");
	$('#about').waypoint({offset: '10%'});
	$('#summary').waypoint({ offset: '50%' });
	$('#details').waypoint({ offset: '50%' });
  $("#register_link").waypoint();
	
	$('body').delegate('#register_link', 'waypoint.reached', function(event, direction) {
		if (direction === "down") {
      $(".register_link_vertical").show();
		}
    else{
      $(".register_link_vertical").hide();
    }
	});
	
	$('body').delegate('#summary', 'waypoint.reached', function(event, direction) {
		var link_name="sdetails";
		if (direction === "up") {
      link_name = "about";
      $('.link-active').removeClass('link-active');
      $('a[href=#'+link_name+']').addClass('link-active');
		}
    else{
		//$('.link-active').removeClass('link-active');
		//$('a[href=#'+link_name+']').addClass('link-active');
    }
	});

	$('body').delegate('#details', 'waypoint.reached', function(event, direction) {
		var link_name="details";
    if (direction === "up") {
      link_name="summary";
		}
		$('.link-active').removeClass('link-active');
		$('a[href=#'+link_name+']').addClass('link-active');
	});
	$('body').delegate('#about', 'waypoint.reached', function(event, direction) {
		var link_name = "summary";
		if (direction === "up") {
      var link_name="about";
		}
		$('.link-active').removeClass('link-active');
		$('a[href=#'+link_name+']').addClass('link-active');
	});
	
	
	// Smooth scrolling for internal links
	$("a[href^='#']").click(function(event) {
		var $this = $(this),
		target = this.hash,
		$target = $(target);
		
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 500, 'swing', function() {
			window.location.hash = target;
		});
		event.preventDefault();
	});
  $('.link-active').removeClass('link-active');
  $("a[href=#about]").addClass("link-active");
});


// loader

$(window).on('load',function(){
	setTimeout(function(){
	$('.loader-body').fadeOut('slow');
	},1000);
});

// fixed header

$(window).scroll(function() {     
    var scroll = $(window).scrollTop();     
    if (scroll > 200) { 
        $(".page-header").addClass("fixed"); 
    } 
    else {
    $(".page-header").removeClass("fixed"); 
    }
  })
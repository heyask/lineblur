function moveToLeft() {
	$('.moveToLeft').each(function() {
		elemOffset = $(this).offset();
		elemPosition = $(this).position();
		if(elemOffset.top - elemPosition.top - 650 >= 0 || elemOffset.top + 500 < $(window).scrollTop()) {
			$(this).stop().animate({
				left : '3000px'
			}, 1);
		} else {
			$(this).stop().animate({
				left : '0px'
			}, 1000 , 'easeOutBounce');
		}
	});
}

function moveToRight() {
	$('.moveToRight').each(function() {
		elemOffset = $(this).offset();
		elemPosition = $(this).position();
		if(elemOffset.top - elemPosition.top - 650 >= 0 || elemOffset.top + 500 < $(window).scrollTop()) {
			$(this).stop().animate({
				left : '-3000px'
			}, 1);
		} else {
			$(this).stop().animate({
				left : '0px'
			}, 1000 , 'easeOutBounce');
		}
	});
}

$(document).ready(function() {

	
	$(".fancy").fancybox();
	$('.fancy-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		},
		beforeShow: function() {
			$('#bgm').hide();
		},
		afterClose : function() {
			$('#bgm').show();
		}
	});

	$('.adi').find('.bg_white').stop().animate({
		'opacity' : 0
	});
	$('.adi').mouseover(function() {
		$(this).find('.bg_white').stop().animate({
			'opacity' : 0.3
		});
		$(this).find('img').stop().css({
			'box-shadow' : '0px 0px 5px 1px #333'
		});
	}).mouseout(function() {
		$(this).find('.bg_white').stop().animate({
			'opacity' : 0
		});
		$(this).find('img').stop().css({
			'box-shadow' : '0px 0px 0px 0px #333'
		});
	});







	$('.moveToLeft').css({
		position : 'relative',
		top : '0px',
		left : '3000px'
	});
	$('.moveToRight').css({
		position : 'relative',
		top : '0px',
		left : '-3000px'
	});

	moveToLeft();
	moveToRight();


	$('.all_wrap').bind('mousewheel', function(event, delta) {
		// if(delta < 0) { //마우스업
		// 	$('.all_wrap').stop().animate({scrollTop : $(this).scrollTop() + 150} , 'slow');
		// } else {
		// 	$('.all_wrap').stop().animate({scrollTop : $(this).scrollTop() - 150} , 'slow');
		// }

		moveToLeft();
		moveToRight();
		// return false;
	});

});
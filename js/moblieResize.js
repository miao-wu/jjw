$(document).ready(function() {
	var $winWidth = $(window).width(),
	    $winHeight = $(window).height(),
	    $restartW = $('.restart').width(),
	    $restartH = $('.restart').height(),
	    $loadingW = $('.loading').width(),
	    $loadingH = $('.loading').height(),
	    $rsX = ($winWidth-$restartW)/2,
	    $rsY = ($winHeight-$restartH)/2,
	    $ladX = ($winWidth-$loadingW)/2,
	    $ladY = ($winHeight-$loadingH)/2,
	    $canT = ($winHeight-($winWidth/750*1206))/2;
	    console.log($canT);
	$('.restart').css({
		position: 'absolute',
		top: $rsY,
		left: $rsX
	});
	$('.loading').css({
		position: 'absolute',
		top: $ladY,
		left: $ladX
	});
	$('#container').css({
		height: $winHeight+'px',
		overflow: 'hidden',
	});
    if ($canT >= 0) {
		$('#canvasWrapBox').css({
			top: $canT
		});
    };
	

	var tmv=function(e){e.preventDefault();};
	function stoptouchmove(){
	        document.body.style.overflow='hidden';       
	        document.addEventListener("touchmove",tmv,false);
	};
	stoptouchmove();

	$('.restartBtn').on('click', function() {
		location.reload();
	});

});
var slides = ['experience', 'academics', 'technical', 'projects'];

function hideAllSlides(){
	for(var i=0;i<slides.length;i++)
		$('#'+slides[i]).css('display', 'none');
}

function showSlide(i){
	hideAllSlides();
	$('#'+slides[i]).css('display', 'inline-block');
}

function slide(n, event, color){
	$('body').append('<div class="expandable '+color+'"></div>');
	var expandable = (document.getElementsByClassName('expandable'))[0];
	var x = event.clientX;
	var y = event.clientY;
	expandable.style.top = y-25+'px';
	expandable.style.left = x-25+'px';
	$(function(){$('.expandable').css('transform', 'scale(50)');});
	event = event || window.event;
	tab(event.target.parentElement);
	setTimeout(function(){showSlide(n); $('.expandable').css('opacity', '0');}, 300);
	setTimeout(function(){$('.expandable').remove();}, 400);
}

function init() {
	setTimeout(function(){
		$('.pseudo-title h4').css('display', 'none');
		$('.pseudo-title').css({
			'top': $('.slide-title').offset().top + 'px'
		});
		setTimeout(function(){
			$('.pseudo-title').remove();
			$('.slides-wrapper').css('opacity', '1');
			$('.foot-bar').css('opacity', '1');
			$('.slider').slider({indicators: false});
			tab(document.getElementById('a-experience').parentElement);
			showSlide(0);
			clearInterval(interval);
		}, 300)
	}, 3000);
}

function tab(tab){
	var tabLine = $('#tab-line-wrapper');
	if(window.outerWidth <= 992){
		$('.mtab li').css('border-bottom', '');
		$(tab).css('border-bottom', '2px solid white');
		return;
	}
	var l = tab.offsetLeft;
	var r = tab.offsetLeft + tab.offsetWidth;
	r = tab.parentElement.offsetWidth - r;
	if(r<0) r = 0;
	var f = (parseInt(tabLine.css('padding-left'))>=l);
	setTimeout(function(){tabLine.css('padding-left',  l+'px');}, (1-f)*200);
	setTimeout(function(){tabLine.css('padding-right', r+'px');}, f*200);
}
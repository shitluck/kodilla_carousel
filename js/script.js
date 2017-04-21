$(function(){
	var carouselList = $("#carousel ul");

    setInterval(changeSlideLeft, 3000);

    $('.btn-left').click(function() {
		changeSlideLeft();
	});

	function changeSlideLeft() {
		carouselList.animate({'marginLeft':-940}, 800, moveFirstSlide);
	}

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

    $('.btn-right').click(function() {
		changeSlideRight();
	});

	function changeSlideRight() {
		carouselList.animate({'marginLeft':0}, 800, moveLastSlide);
	}

	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-940});
	}
});
//Loads images and then initializes Datatables
$(window).load(function() {
	var tableTitle = $('.tableImage');
	var imageTitle = $('.tableTitle a');
	var i = 0;
	
	for (i; i < tableTitle.length; i++) {
		$('.tableImage')[i].innerHTML = "<a href=''><img src='http://cdn.allghostthemes.com/assets/images/" + imageTitle[i].innerText + ".jpg' /></a>";
	}
});
/*var flickerApi = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";*/
$(document).ready(function(){
 var $gallery = $('.gallery'),
      $lightbox = $('.lightbox'),
      $figure = $('figure'),
      $close = $('.close');

var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
 $.getJSON( flickrAPI, {
	tags: "animals",
	format: "json"
 }, getImages);
 function getImages(data){
 	$.each(data.items, function(m,item){
 		var imgSource = item.media.m;	
 		$('<img src=' + imgSource + '>').appendTo(".img");
 	if(m==11) {
 		return false;
 	}	
 	})
 }
 
 $(function() {	
 		var gallery = $('.gallery');
 		gallery.on('click', 'img', function (){

 	if($(this).attr('data-click-state') == 1) {
		$(this).attr('data-click-state', 0)	
		$(this).css('width', 'hue-rotate(180deg)');
		$(this).css('-webkit-filter','hue-rotate(180deg)');
	}
	else {
		$(this).attr('data-click-state', 1)
		$(this).css('width', 'grayscale(100%)');
		$(this).css('-webkit-filter','grayscale(100%)');
	
}
});
});
$('.toggle-click').on('click',function(){

	if($(this).attr('data-click-state') == 1) {
		$(this).attr('data-click-state', 0)
		document.body.style.backgroundColor="#ddffcc";
		$(this).css('background-color', 'red')
		$(this).removeClass('toggle-color-click').addClass('toggle-color-onclick');

	} else {
		$(this).attr('data-click-state', 1)
		document.body.style.backgroundColor="#E1E7F5";
		$(this).css('background-color', 'orange')
		$(this).removeClass('toggle-color-onclick').addClass('toggle-color-click');
	}
});
});
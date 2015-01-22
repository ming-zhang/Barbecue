var conWidth = $(".carousel-inner .item").width();
var imgWidth = $(".carousel-inner .item img").width();
var conHeight = $(".carousel-inner .item").height();
var imgHeight = $(".carousel-inner .item img").height();
if (conWidth / conHeight > imgWidth / imgHeight) {
	$(".carousel-inner .item img").css("width", conWidth);
	$(".carousel-inner .item img").css("height", imgHeight / imgWidth * conWidth);
} else {
	$(".carousel-inner .item img").css("height", conHeight);
	$(".carousel-inner .item img").css("width", imgWidth / imgHeight * conHeight);
}
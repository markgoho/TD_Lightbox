// Overlay structure, image element, caption element
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//Add image element to overlay
$overlay.append($image);

//Add caption to overlay (after image element)
$overlay.append($caption);

//Add overlay to body
$("body").append($overlay);

//Show the overlay when a link is clicked
$("#gallery a").click(function() {
	event.preventDefault();  //prevent the browser from following the link url
	var imageURL = $(this).attr("href");  //assign the clicked image url to a variable
	$image.attr("src", imageURL);  //set the img element's src attribute to that url
	$overlay.show();  //show the overlay

	//Caption
	var captionText = $(this).children("img").attr("alt"); //set the alt text of the img to a variable
	$caption.text(captionText);  //add the alt text variable to the caption element
})

//Hiding the overlay
$overlay.click(function () {  //when the overlay is clicked
	$overlay.hide(); //hide the overlay
})
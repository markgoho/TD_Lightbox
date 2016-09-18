//Search box
$("#searchBox").keyup(function() {
    var search = $(this).val();
    $("#gallery img").each(function() {
    	//console.log($(this).attr("alt").search);
        var searchAttr = $(this).attr("alt");
        if(searchAttr.toLowerCase().search(search.toLowerCase()) > -1) {
            $(this).show();
        } else {
            $(this).fadeOut("slow");
        }
    });
});




// Overlay structure, image element, caption element
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//Add image element to overlay
$overlay.append($image);

//Add caption to overlay (after image element)
$overlay.append($caption);

//Divs for putting arrows in
var $leftArrow = $('<div id="leftArrow"></div>');
var $rightArrow = $('<div id="rightArrow"></div>');

//Add divs before and after image element
$image.before($leftArrow);
$image.after($rightArrow);

//Add overlay to body
$("body").append($overlay);

//Show the overlay when a link is clicked
$("#gallery a").click(function() {
	event.preventDefault();  //prevent the browser from following the link url
	getCurrentImage(this); //call function to get image from image that was clicked
	$overlay.show();  //show the overlay
})

$leftArrow.click(function() {
	getPreviousImage();
});

$rightArrow.click(function() {

	getNextImage();
});

function getCurrentImage (currentImage) {
	thisImage = currentImage; //set the current image to a variable that's available outside the function
	var imageURL = $(currentImage).attr("href");  //assign the clicked image url to a variable
	$image.attr("src", imageURL);  //set the img element's src attribute to that url
	
	//Caption
	var captionText = $(currentImage).children("img").attr("alt"); //set the alt text of the img to a variable
	$caption.text(captionText);  //add the alt text variable to the caption element
}

function getPreviousImage () {
	imageParent = $(thisImage).parent().prev(); //find the parent of the current image, then go to the previous element
	if (imageParent.length != 0) { //if one actually exists (len != 0)
		thisImage = $(imageParent).children("a"); // set the current image to the first child link
	}
	getCurrentImage(thisImage); //call the function on the updated current image
}

function getNextImage () {
	imageParent = $(thisImage).parent().next(); //find the parent of the current image, then go to the next element
	if (imageParent.length != 0) { //if one actually exists (len != 0)
		thisImage = $(imageParent).children("a"); // set the current image to the first child link
	}
	getCurrentImage(thisImage); //call the function on the updated current image
}


//Hiding the overlay
$image.click(function () {  //when the image is clicked
	$overlay.hide(); //hide the overlay
})
//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - "Lightbox"

//Following jQuery representation of objects - dollar sign in variable name is just to make sure its a jquery representation. We do this to avoid having to re-write annoying code

var $overlay = $('<div id="overlay"></div>'); 
var $image = $("<img>");
var $caption = $("<p></p>")

//Add an image to overlay
$overlay.append($image) //adds <img> inside the <div>

// Add overlay
$("body").append($overlay); //places <div> at the end of the the body element
    //Add a caption

//A caption to overlay
$overlay.append($caption);

//Capture click event on a link to an image.
$("#imageGallery a").click(function (event) {
    event.preventDefault(); //Stops browser from following link and opening another tab
    var imageLocation = $(this).attr("href"); //everytime we click a different image, get the image's corresponding path
    
    //Update overlay with the image linked in the link
    $image.attr("src", imageLocation); //add attribute "src" and the location of the image 
    
    //Show the overlay
    $overlay.show();

    //Get child's alt attribute and set caption
    var captionText = $(this).children("img").attr("alt"); //string of alt atrribute
    $caption.text(captionText);
    
});
    
//When overlay is clicked
$overlay.click( function() {
    
    //Hide the overlay
    $(this).hide();
});
    























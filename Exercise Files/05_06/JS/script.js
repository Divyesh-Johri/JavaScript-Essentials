// Inserting elements into DOM (in a way that supports all browsers)

// Find the targeted image
const FEATURED = document.querySelector(".featured-image")
const THEIMAGE = FEATURED.querySelector("img")

var altText = THEIMAGE.getAttribute("alt")

// create figcaption element
var captionElement = document.createElement("figcaption")

// create and append image text to new element node
// 
// captionElement.append(altText)
// ^^ This could work too, but isn't supported by all browsers
var captionText = document.createTextNode(altText)
captionElement.appendChild(captionText)


// append the element to the FEATURED node in the DOM
FEATURED.appendChild(captionElement)

// fix the original image element
THEIMAGE.setAttribute("alt","")
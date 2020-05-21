// Get all images
const IMAGES = document.querySelectorAll("img")

for(let i = 0; i<IMAGES.length; i++){
    // Obtain source strings for each image
    let imgSrc = IMAGES[i].getAttribute("src")

    // Get rid of  '-800.jpg' from each string
    imgSrc = imgSrc.slice(0,-8)

    // Get datatype
    let type = IMAGES[i].getAttribute("data-type")    
}


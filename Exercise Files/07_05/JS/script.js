const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e,current) { // Clicked object (cta link)
    e.preventDefault();
    
    current.innerHTML == "Book Now!" ? CTA.innerHTML = "Oops!" : CTA.innerHTML = "Book Now!"

    ALERT.classList.toggle("hide");
}

// Putting reveal in an anonymous func ensures it's not run before the event occurs
// and allows us to pass it the clicked object (cta link)
// 
// Event e is passed through accordingly
CTA.addEventListener('click', function(e){reveal(e,this)}, false);

CTA.addEventListener('click', function(){console.log("The button was clicked!")}, false);


const CTA = document.querySelector(".cta a")
const ALERT = document.querySelector("#booking-alert")


// By default, the Book Now button will not be hidden
CTA.classList.remove("hide")
ALERT.classList.add("hide")

function reveal(e){ // Event object e
    
    e.preventDefault()  // Ensures original behavior is stopped (navigating to link)

    CTA.classList.toggle("hide")
    ALERT.classList.toggle("hide")
}

// Event handler
CTA.onclick = reveal    // No parantheses; ensures function isn't initially run
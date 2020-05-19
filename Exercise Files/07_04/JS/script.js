const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

// Event listener approach: so multiple functions can occur per event
CTA.addEventListener("click", reveal, false)
CTA.addEventListener("click", function(){console.log("woah")}, false)
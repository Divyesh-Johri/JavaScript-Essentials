const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hrPosition = 40 // random numbers
let minPosition = 130
let secPosition = 267

// move the hands by setting the transform value
HOURHAND.style.transform = "rotate("+hrPosition+"deg)"
MINUTEHAND.style.transform = "rotate("+minPosition+"deg)"
SECONDHAND.style.transform = "rotate("+secPosition+"deg)"
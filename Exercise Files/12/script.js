
// Arrow functions

// Can turn this:
var sumTotal = function(price, tax){
    return price*((tax/100)+1)
}
console.log("sucky version: " + sumTotal(6,12))   

// Into this:
var newSumTotal = (price, tax) => price*((tax/100)+1)
console.log("cool version: " + newSumTotal(6, 12))
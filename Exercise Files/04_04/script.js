function findBiggestFraction(a,b) {
    var result;
    a>b ? result = ["first fraction", a] : result = ["second fraction", b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var fracResult = findBiggestFraction(firstFraction,secondFraction);

console.log(fracResult);

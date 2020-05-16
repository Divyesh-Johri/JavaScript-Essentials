function doSomeMath() {
	var a = 5;
	var b = 4;
	var sum = a + b;

	// "Closure": When an inner function relies on variables from its
	// outer function, it will still close its memory of the outer function
	// except for the required variables.
	function multiply(){
		var result = a*b;
		return result;
	}

	return multiply;
}

var theResult = doSomeMath();

console.log("The result: ", theResult());

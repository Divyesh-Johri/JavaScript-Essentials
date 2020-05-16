// Constant variable defined as "const"
const CONSTANT = 10;
console.log(CONSTANT);

// Block scope variabel defined as "let"
function logScope(){
    var localVar = 2;

    if (localVar){
        let localVar = "I'm different!"; //scope becomes the if block
        console.log("nested localVar: ", localVar);
    }

    console.log("localScope: ", localVar);
}

logScope();
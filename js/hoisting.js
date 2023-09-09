var variable;
console.log(`value of variable: ${variable}`); // value of variable: undefined
console.log(`type of variable: ${typeof variable}`); // 

let a = 5;
var b = 50;

console.log(`let a: ${a}`);
console.log(`var b: ${b}`);

function variableFunction() {
    a = 10;
    b = 15;
    var c = a * b;
    
    return c;
}      

console.log(variableFunction); //[Function: variableFunction]
console.log(`c inside function is: ${variableFunction()}`);

variableFunction();

console.log(`var a after value changing in function: ${a}`);
console.log(`var b after value changing in function: ${b}`);

// console.log(c); // ReferenceError: c is not defined
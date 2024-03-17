let result;
let num1 = 5;
let num2 = 2;

result = num1>num2;

console.log(result);  // output = true
// js compares beteen variables by type conversion, for example between 5 and "3"
// == in js, comparsion between varibales just by their values
// === in js, comparsion between varibales by their values and their datatypes

if(test){
    statement;
}
// when test be true, statement will be implemented

let number = 1;
if(number > 1){
    console.log("over one");
}
else if(number === 1){
    console.log("number is one!");
}
else{
    console.log("under one");
}

let isRich = true; // default
let isKind = true;
 
if(isRich && isKind){
    console.log("its OK!");
}

let names;

if(name === "Hadi"){
    console.log("Hadi is OK!");
}
else if(name === "Abtin"){
    console.log("Abtin is OK!");
}
else{
    console.log("no one is OK!");
}
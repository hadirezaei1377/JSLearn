let result;
result = 5 + 2;
console.log(sum);
// reference error, sum is undefined

// type error
// for example when we define a string for first parameter in a function and pass int to it
// or using things that doesnt exist ,,, for example method of null doesnt exist ,,, null.SayHello()

// we can use try catch strucure , in try section we define the part of code that can has an error and  
// in catch section we can set a logical message for clients about this error

try{
    let result;
result = 5 + 2;
console.log(sum);
}
catch(err){
    console.log("try again!!!");
}

// primitive data types: string, bool, number, undefined, null
// they are not object, they dont have any related method
// save in stack(limited space)

// undefined
let number;
console.log(number);

let FirstName = undefined;

// string
let name = "Hadi";

// number
let age = 42;
let temp = 5.6;

// bool
let IsCold = true;

// null
let LastName = null;

// undefined is a type in JS, when we declare a variable and dont asign anything to it
// when we declare a variable and asign enpty value to it we have empty
// when we declare a variable and we are waiting for clients to fill it and they dont, we have null.

// refrence data types: object, array, function
// save in heap(more space) 

// array 
let numbers = [5, 9, 1];
console.log(numbers[1]); // output = 9

let ages = [5, 9, 1];
ages[3] = 15;
console.log(ages); // output = 5, 9, 1, 15

let names = [Abtin, Sadra, Ashvan];
ages[2] = Khashayar;
console.log(names); // output = Abtin, Sadra, Khashayar


let natijeh = [Abtin, 20, true];
ages[2] = Khashayar;
console.log(names); // output = Abtin, Sadra, Khashayar

// object
let person = {
    name: "nader",
    age:  30,
    gender:  male,
    address: {
        country: "Iran",
        City: "Tehran"
    },
    hobbies: ["watching movies", "codding", "learning"]
}
console.log(person);
// console.log(person.name);
// console.log(person.address.country);
// console.log(person.hobbies[1]);

// add : person.email = "nader@gmail.com";

// function
function SayHello(){
    console.log("Hello World!");
}

SayHello();

function SayCong(name){
    console.log("congragulation" + name);
}

SayCong("Mahdi");

function SayWelcome(name, age){
    console.log("Hi" + name + "you are " + age + "years old");
}

SayWelcome("Mahdi", 22);
SayWelcome("Melika", 7);
SayWelcome("parya", 28);
SayWelcome("Amin", 41);

function square(number){
    return number * number;
}

let nu;
nu = square(2);

console.log(nu);

// while loop:

// while(test){
//     statement:
// }

let i = 0;

while(i < 5){
    console.log("Hello World!");
    i = i + 1;
}

// for loop
for(let i=0; i<5; i++){
    if(i%2 === 0)
    console.log(i);
}

let numbers = [1, 2, 3, 4];

for(let i=0; i<numbers.length; i++){
    if(numbers[i] === 21){
        console.log("yeah thats right!");
    }
}
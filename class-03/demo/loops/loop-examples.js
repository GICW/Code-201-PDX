/*
for (start, conditon, change){
the code we are repeating}
*/

for (let i =0; i < 5; i++){
  console.log(i);
}

let fruits = ["apple", "banana","orange", "grapes"];

for (let i=0; i< fruits.length; i++){
  console.log(fruits[i])
};

//while loop
/* 
while (condition){
code you want to repeat
i++
}
*/
let count= 0;

while (count < 3){
  console.log(count);
  count++;
}

// real-world example
let isLoggedIn= false;

while(isLoggedIn) {
  console.log("Waiting for user to log in.");
  isLoggedIn=true;
}

//infinite loop
let count1= 0;

while(count1 < 3){
  console.log(count1);
}

// do while
/* 
do {
repeated code
} while (condtion);
*/

let number= 5;

do {
  console.log(number);
  number++;
} while (number < 5);

// real-world example
let password;

do {
  console.log("Ask user for password");
  password = '1234';
} while (password !== "1234");

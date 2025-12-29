// Declare a variable named wife and assign
// it the value "Cathy"
let wife = "Cathy";
console.log(wife);
// document.write(wife);

// = is an assignment
// == and ==== are comparisons
// Comparators return a boolean (true/false)

console.log(wife == "Cathy");  // Value Match
console.log(wife === "Cathy"); // Value & Type Match

console.log("========================");

let age = "55";
console.log( "==", age == 55 );
console.log( "===", age == 55 );
// Type Coersion
console.log( ">", age > 50);
console.log( "Add Bad", age + 10 );

// Normalization
console.log( "Add Good", Number(age) + 10)

console.log("========================");

// Pretend we prompted: "Are you alive?"
// Valid: Yes, Y, y, Yah, Yep, ...
// Starts with a Y or an N
// We as developers need to protect our code from
// dum dums. Assume the user will NOT follow directions
// We should convert what they typed into "y"

let alive = "Yep";
console.log(alive);

// get the first, then convert it
let first = alive.charAt(0);
first = first.toLowerCase();
console.log("Long Way", first);

// Shorthand version of same
let firstCharacter = alive.charAt(0).toLowerCase();
console.log("Short Way", firstCharacter);

if( firstCharacter === "y" ) {
  console.log("Whew");
} else if (firstCharacter === "n") {
  console.log("How did you write that???");
} else {
  console.log("huh???")
}

// Switch Statements
switch(firstCharacter) {
  case "y":
    console.log("Good!");
    break;
  case "n":
    console.log("Um ... you can still type?");
    break;
  default:
     console.log("What?");
     break;
}

console.log("========================");

// Declare a variable called 'numbers'
// Assign it the value of ... an array of number
//       index 0, 1, 2, 3
// To reference, use [#] where # is the index
// Say: "array" "at" #
// In other words, "number at position 0"
let numbers = [2, 4, 6, 8];
console.log("How many numbers?", numbers.length);

// [#] is the position or index of an array "node"
console.log("First One:", numbers[0]);

// Beware of the "off by 1 errors..."
for( let i = 0; i < numbers.length; i++ ) {
  if ( numbers[i] === 4 ) {
    console.log("Love 4's too");
  }
  // Log the value in the array at position "i"
  // console.log(i, numbers[i]);
}


let pets = ["Rosie", "Geno", "Rocky"];
for( let i = 0; i < pets.length; i++ ) {
  console.log( pets[i].toUpperCase() );
}

if( pets.includes("Rosie") ) {
  console.log("I know a dog named Rosie too!");
}


// // Dice
// let diceCombinations = [1,2,3,4,5,6];
// let d1 = randomElementFrom(diceCombinations);
// let d2 = randomElementFrom(diceCombinations);
// let total = d1 + d2;

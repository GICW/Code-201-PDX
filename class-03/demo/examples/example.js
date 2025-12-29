// From ChatGPT, an example of a function that uses a param so it can scale.
// Function to calculate and display squares for any number of numbers
function showSquareNumbers(nums) {
  for (let i = 1; i <= nums; i++) {
      const square = i * i;
      console.log(`The square of ${i} is ${square}`);
  }
}

// Call the function to display square numbers
showSquareNumbers(5);
console.log('==========================')


// Create a list of pets as a javascript array
// Declare a variable called pets and assign it an array of pet names
let pets = ["Rocky", "Rosie", "bear"];

// Iterate the list of pets and print each pet name
for (let i = 0; i < pets.length; i++) {
  console.log(i, pets[i]);
}

let searchString = "bear"

// Is what we're searching for in the list of pets?
console.log(searchString, pets.includes(searchString));

if ( pets.includes(searchString) ) {
  console.log(searchString, "is in the list of pets");
}

console.log('==========================')

let number = 0;

// As long as the number is not 5, keep looping
while( number !== 5 ) {
  console.log(number, "Is not 5");
  number++;
}

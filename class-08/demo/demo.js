let numbers = [];

for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}

console.log("Numbers", numbers);

let ages = [];

for (let i = 0; i < numbers.length; i++ ) {
  ages.push(numbers[i]);
  for( let x = 0; x < numbers.length; x++) {
    ages[x] = ages[x] + x;
  }
}

console.log("Ages", ages)

let bald = true; // boolean
let name = "John"; // string
let age = 55; // number
let pets = ["Rosie", "Geno"]; // array (object)
let thing = {}; // object

// Objects are a list of key:value pairs
// "key" = "value"
// This is a "Plain Old Javascript Object"
// this.something refers to the object from within the object ("my property");
let geno = {
  name: "Geno",
  hair: "short",
  color: "white",
  legs: 4,
  tail: true,
  walk: function() { console.log("I'm walkin with a linp..."); },
  speak: function() { console.log("Woooooooooof"); },
  getAge: function() { this.age = getRandomNumberBetween(2, 8); },
  siblings: ["Rosie", "Rocky"]
}

// returnj a random age ...
function getRandomNumberBetween(min,max) {
    return Math.floor( Math.random() * (max-min+1) + min);
}

geno.getAge();
console.log(geno.age);
geno.speak();
geno.walk();


// = is an assignment
// == is equality
// === is equality + type
function guessTeam() {
    let guess = prompt("Guess my favorite team");
    guess = guess.toLowerCase();
    if(guess === person.favoriteSportsTeam) { 
        alert("YES!");
    }
}


// ===================  RENDERING TO THE DOM =====================

// DOM CREATION PATTERN:

// 1. Find a parent element (hopefully by "id")
// 2. Assign that to a variable like "parentElement" or "dogSection" or "container"
// 3. Create a new element with document.createElement() -- this creates (<p></p>)
// 4. Add text content to that new element (this adds <p>text!</p>)
// 5. Append the newly created element to that parent you defined in step 2

let dogSection = document.getElementById("dog");
let dogName = document.createElement("p");
dogName.textContent = `Name: ${geno.name}`;
dogSection.appendChild(dogName);

let dogHair = document.createElement("p");
dogHair.textContent = `Hair: ${geno.hair}`;
dogSection.appendChild(dogHair)

let siblingsHeader = document.createElement('h2');
siblingsHeader.textContent = "Siblings";
dogSection.appendChild(siblingsHeader);

let siblingList = document.createElement("ul");
dogSection.appendChild(siblingList);

for(let i = 0; i < geno.siblings.length; i++ ) {
    let sibling = document.createElement("li");
    sibling.textContent = geno.siblings[i];
    siblingList.appendChild(sibling);
}

console.log('dog section:', dogSection);


// Stretch Goal ...
// Can you write a function that would do those steps?
function addElementTo( elementId, newElement, text ) {
    // do the 5 steps
}

addElementTo("dog", "p", `Name: ${geno.name}`);
addElementTo("dog", "p", `Hair: ${geno.hair}`);
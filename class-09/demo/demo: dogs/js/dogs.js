
let likes = ["Dogs", "Cats", "Adults", "Kids"]

let allDogs = [];

function randomNumberBetween( min, max ){
  return Math.floor( Math.random() * (max - min + 1) + min );
}


// Dog Constructor Function (Factory)
// Initializes an instance of "Dog"
//   As a part of that, we randomly assign Likes and
//   push it to the allDogs array
function Dog(name, breed, color, likesDogs, likesCats, likesAdults, likesKids) {
  // Defines the shape of the object (a Dog)
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.getsAlongWith = [likesDogs, likesCats, likesAdults, likesKids];
  allDogs.push(this);
}

// Prototype Method
// "this" is still "me" ...
// The difference here is in memory and how the
// factory works behind the scenes
Dog.prototype.bark = function() {
  console.log(`${this.name} says "Woof!"`);
}


// Take a dog Object and render it on screen
Dog.prototype.render = function() {

  // not a section, but a table
  let dogContainer = document.getElementById("tableBody");

  // Create a row for the dog
  let row = document.createElement("tr");
    dogContainer.appendChild(row);

      let cellName = document.createElement("td");
          cellName.textContent = this.name;
          row.appendChild(cellName);
      let cellBreed = document.createElement("td");
          cellBreed.textContent = this.breed;
          row.appendChild(cellBreed);
      let cellColor = document.createElement("td");
          cellColor.textContent = this.color;
          row.appendChild(cellColor);


  for(let i=0; i<likes.length; i++){
    let cellLike = document.createElement("td");
    if( this.getsAlongWith[i] ) {
      cellLike.textContent += " Yes";
    } else {
      cellLike.textContent += " No";
    }
    row.appendChild(cellLike);
  }


}

let geno = new Dog("Geno", "Staff/Pit Mix", "White", true, false, false, false);
let rosie = new Dog("Rosie", "Lab/ Boxer Mix", "Tan", false, false, true, true);
let rocky = new Dog("Rocky", "Border Collie", "Black/White", true, true, true, true);
let luna = new Dog("Luna", "Great Dane", "Grey/White", false, false, false, true);

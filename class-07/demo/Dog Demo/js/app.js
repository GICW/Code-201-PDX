let likes = ["Dogs", "Cats", "Adults", "Kids"]

let allDogs = [];

function randomNumberBetween( min, max ){
  return Math.floor( Math.random() * (max - min + 1) + min );
}


// Dog Constructor Function (Factory)
// Initializes an instance of "Dog"
//   As a part of that, we randomly assign Likes and
//   push it to the allDogs array
function Dog(name, breed, color) {
  // Defines the shape of the object (a Dog)
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.getsAlongWith = [];

  // Defines a method that dogs can do
  this.randomizeLikes = function() {
    for(let i = 0; i<likes.length; i++ ) {
      let value = randomNumberBetween(0,1);
      this.getsAlongWith.push( !! value);

    }
  }

  // Does some doggie initialization and stores it
  this.randomizeLikes();
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
  let dogContainer = document.getElementById("dogs");

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


function renderTableHeader() {
  let dogContainer = document.getElementById("dogs");
  let head = document.createElement("thead");
  dogContainer.appendChild(head);
  let headerRow = document.createElement("tr");
    head.appendChild(headerRow);
      let headerName = document.createElement("th");
          headerName.textContent = "Name";
          headerRow.appendChild(headerName);
      let headerBreed = document.createElement("th");
          headerBreed.textContent = "Breed";
          headerRow.appendChild(headerBreed);
      let headerColor = document.createElement("th");
          headerColor.textContent = "Color"
          headerRow.appendChild(headerColor);

    // a new header cell for each "Like"
    for(let i=0; i<likes.length; i++) {
      let headerLike = document.createElement("th");
      headerLike.textContent = likes[i];
      headerRow.appendChild(headerLike);
    }
}

function renderTableFooter() {

}

function startApp() {

  let geno = new Dog("Geno", "Staff/Pit Mix", "White");
  let rosie = new Dog("Rosie", "Lab/ Boxer Mix", "Tan");
  let rocky = new Dog("Rocky", "Border Collie", "Black/White");
  let luna = new Dog("Luna", "Great Dane", "Grey/White");

  renderTableHeader();

  for( let i=0; i<allDogs.length; i++ ) {
     // 1st time, i is 0, allDogs[0] is geno (which is an instance of Dog)
     // 2nd time, i is i, allDogs[1] is rosie (which is an instance of Dog)
     // All dogs have a "render" prototye method
     // Therefore that method can see the actual dog instance as "this"
    allDogs[i].render();
  }

  // console.log(rosie);
  // rosie.bark();
  // geno.bark();


}

startApp();

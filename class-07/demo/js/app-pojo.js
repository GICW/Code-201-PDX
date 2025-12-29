let likes = ["Dogs", "Cats", "Adults", "Kids", "Turtles"]



let geno = {
  name: "Geno",
  breed: "Staff/Pit Mix",
  color: "White",
  getsAlongWith: [],
  generate: function() {
    // This will create an array the same length as the likes array
    // and fill it with random "true" or "false" values
    for(let i = 0; i<likes.length; i++ ) {
      let value = randomNumberBetween(0,1);
      this.getsAlongWith.push( !! value);
    }
  },
};

let rosie = {
  name: "Rosie",
  breed: "Lab/Boxer Mix",
  color: "Tan",
  getsAlongWith: [],
  generate: function() {
    for(let i = 0; i<likes.length; i++ ) {
      let value = randomNumberBetween(0,1);
      this.getsAlongWith.push( !! value);

    }
  },
}


function randomNumberBetween( min, max ){
  return Math.floor( Math.random() * (max - min + 1) + min );
}

// Take a dog Object and render it on screen
function renderDog( dog ) {
  let dogContainer = document.getElementById("dogs");

  let title = document.createElement("h3");
  title.textContent = `Hi, I am ${dog.name}`;

  let details = document.createElement("ul");

  let breed = document.createElement("li");
  breed.textContent = `Breed: ${dog.breed}`;
  details.appendChild(breed);

  let color = document.createElement("li");
  color.textContent = `Color: ${dog.color}`;
  details.appendChild(color);

  for(let i=0; i<likes.length; i++){
    let likeItem = document.createElement("li");
    likeItem.textContent = `Likes: ${likes[i]}?`;
    if( dog.getsAlongWith[i] ) {
      likeItem.textContent += " Yes";
    } else {
      likeItem.textContent += " No";
    }
    details.appendChild(likeItem);
  }


  dogContainer.appendChild(title);
  dogContainer.appendChild(details);
}


function startApp() {

  // let allDogs = [geno, rosie];
  let allDogs = [];
  allDogs.push(geno);
  allDogs.push(rosie);

  geno.generate();
  rosie.generate();

  for( let i=0; i<allDogs.length; i++ ) {
     // 1st time, i is 0, allDogs[0] is geno
     // 2nd time, i is i, allDogs[1] is rosie
    renderDog( allDogs[i] );
  }

}

startApp();

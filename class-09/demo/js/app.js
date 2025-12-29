function renderTableHeader() {
  let dogContainer = document.getElementById("dogs");
  let head = document.getElementById("tableHeader");
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

  let table = document.getElementById("dogs");
  let footer = document.getElementById("tableFooter");

  // Remove the old <tr> from the footer
  // If we don't do this, we end up with 2 footers
  footer.innerHTML = "";

  // Re-Create the footer from the <tr> all the way down
  let footerRow = document.createElement("tr");
  table.appendChild(footer);
  footer.appendChild(footerRow);

  let blankCell1 = document.createElement("td");
  footerRow.appendChild(blankCell1);
  let blankCell2 = document.createElement("td");
  footerRow.appendChild(blankCell2);
  let blankCell3 = document.createElement("td");
  footerRow.appendChild(blankCell3);

  for(let i=0; i<likes.length; i++) {
    let footerCell = document.createElement("td");
    let total = 0;

    for( let x=0; x < allDogs.length; x++ ) {
      if( allDogs[x].getsAlongWith[i] ) {
        total++;
      }
    }

    footerCell.textContent = total;
    footerRow.appendChild(footerCell);
  }

}

function startApp() {

  renderTableHeader();

  for( let i=0; i<allDogs.length; i++ ) {
     // 1st time, i is 0, allDogs[0] is geno (which is an instance of Dog)
     // 2nd time, i is i, allDogs[1] is rosie (which is an instance of Dog)
     // All dogs have a "render" prototye method
     // Therefore that method can see the actual dog instance as "this"
    allDogs[i].render();
  }

  renderTableFooter();

}

startApp();


let fetchButton = document.getElementById("fetch");
let ballDiv = document.getElementById("ball");
let form = document.getElementById("dog-form");

// Registers an "event handler" for the "click" event on that button

// You can handle events at a "Higher" level like the document...
// document.addEventListener("click", goFetch);
// function goFetch(event) {
//   ballDiv.textContent = "Document Click Handler ...";
// }

fetchButton.addEventListener("click", function(event) {
  // Makes sure that ONLY THE BUTTON handles the event
  // Otherwise, the document will also handle the event
  // because events bubble up
  event.stopPropagation();
  console.log(event.target);
  ballDiv.textContent = "Button Click Handler";
});

dogForm.addEventListener("submit", function(event) {
  // By default, forms will send data to a server and refresh
  // we want to keep the screen clean.
  event.preventDefault();

  // event.target is the form
  // event.target.breed is the input in the form with a name of "breed"

  let breed = event.target.breed.value;
  let color = event.target.color.value;
  let name = event.target.name.value;
  let likesDogs = event.target.likesDogs.checked;
  let likesCats = event.target.likesCats.checked;
  let likesAdults = event.target.likesAdults.checked;
  let likesKids = event.target.likesKids.checked;

  // Make a new dog from the input fields
  let dog = new Dog(name, breed, color, likesDogs, likesCats, likesAdults, likesKids);

  // Add the dog to the table
  dog.render();

  // Recaluclate and render the footer
  renderTableFooter();

});

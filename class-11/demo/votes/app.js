// Declare a single "state" variable (object) to store application level variables
state = {
  goats: [],
  maxVotes: 10,
  votesCast: 0,
}

// Identify elements in the markup where we will inject our goat pics and results
let goatImage1 = document.querySelector('.goat1 img');
let goatImage2 = document.querySelector('.goat2 img');
let goatContainer = document.querySelector('.goats');
let resultsContainer = document.querySelector('.results');


// Goat Constructor
function Goat(name, src) {
  this.name = name;
  this.src = src;
  this.votes = 0;
  this.views = 0;
  state.goats.push( this );
}

function getRandomNumber() {
  return Math.floor(Math.random() * state.goats.length);

}

// Select 2 goats at random from the state.goats array
// Get a random number between 0 and the length of the goats array and find that goat in the array
// Then, update the image src and alt attributes so the goat renders
// Also, update it's "view" count
function renderGoats() {
  let goat1 = getRandomNumber();
  let goat2 = getRandomNumber();

  while(goat1 === goat2) {
    goat2 = getRandomNumber();
  }

  // Show the goat on screen
  goatImage1.src = state.goats[goat1].src;
  goatImage1.alt = state.goats[goat1].name;

  goatImage2.src = state.goats[goat2].src;
  goatImage2.alt = state.goats[goat2].name;

  // add 1 to the number ov view for each goat
  state.goats[goat1].views++;
  state.goats[goat2].views++;

}

// This will show at the very end of the voting, when max votes are reached
// Iterate the goats array and display the name, votes, and views of each goat
function showTotals() {
  for(let i =0  ; i < state.goats.length; i++) {
    let goatData = document.createElement('div');
    goatData.textContent = `${state.goats[i].name} had ${state.goats[i].votes} votes and was shown ${state.goats[i].views} times`;
    resultsContainer.appendChild(goatData)
  }
}

// When we click a goat, find it in the array and add 1 to it's vote count
// Note the number of total votes cast and stop if we exceed it.
goatContainer.addEventListener('click', voteForTheGoat);

function voteForTheGoat(event) {

  let name = event.target.alt;
  for(let i =0  ; i < state.goats.length; i++) {
    if(state.goats[i].name === name) {
      state.goats[i].votes++;
      break;
    }
  }

  state.votesCast++;

  if(state.votesCast >= state.maxVotes) {
    showTotals();
    // prevenet them from voting!
    // You can also add class to the section to grey it out or whatever
    goatContainer.removeEventListener('click', voteForTheGoat);
  } else {
    renderGoats();
  }

};

let cruisin = new Goat('Cruisin', './assets/cruisin-goat.jpg');
let float = new Goat('Float', './assets/float-your-goat.jpg');
let away = new Goat('Away', './assets/goat-away.jpg');
let logo = new Goat('Logo', './assets/goat-logo.png');
let hand = new Goat('Out Of Hand', './assets/goat-out-of-hand.jpg');
let kissin = new Goat('Kissin', './assets/kissing-goat.jpg');
let sassy = new Goat('Sassy', './assets/sassy-goat.jpg');
let smiling = new Goat('Smiling', './assets/smiling-goat.jpg');
let sweater = new Goat('Sweater', './assets/sweater-goat.jpg');


renderGoats();

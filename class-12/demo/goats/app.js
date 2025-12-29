'use strict';

// Create a state object to hold the list of goats, totals
let state = {
  goats: [],
  totalVotes: 0,
  maxVotes: 10
}

let goatContainer = document.querySelector('.goats');
goatContainer.addEventListener('click', handleVoting);

let results = document.querySelector('.results');

// Create a constructor function to make goat objects
function Goat( name, image ) {
  this.name = name;
  this.image = image;
  this.votes = 0;
  this.views = 0;
  state.goats.push( this );
}

// Make a bunch of goat objects
function createGoats() {
  let imagesList = ['cruisin-goat', 'float-your-goat', 'goat-away', 'goat-logo', 'goat-out-of-hand', 'kissing-goat', 'sassy-goat', 'smiling-goat', 'sweater-goat'];
  for( let i = 0; i < imagesList.length; i++ ) {
    new Goat( imagesList[i], `./assets/${imagesList[i]}.jpg` );
  }
}


// Render 2 random goats
function getRandomNumber() {
  return Math.floor( Math.random() * state.goats.length );
}

function renderGoats() {
  let goat1Number = getRandomNumber();
  let goat2Number = getRandomNumber();

  // Prevent duplicate on the same page
  // ... also prevent duplicates from the previous page
  while( goat1Number === goat2Number ) { goat2Number = getRandomNumber(); }

  let goat1 = state.goats[goat1Number];
  let goat2 = state.goats[goat2Number];

  // We have 2 goats from the state.goats[array]
  // Update the views for each goat
  goat1.views++;
  goat2.views++;

  // Put them into the images...
  let goat1Image = document.querySelector('.goat1 img');
  goat1Image.src = goat1.image;
  goat1Image.alt = goat1.name;

  let goat2Image = document.querySelector('.goat2 img');
  goat2Image.src = goat2.image;
  goat2Image.alt = goat2.name;

}

// Up-Vote a Goat if it's clicked on
// Requires a click event handler/listnener

function handleVoting(event) {
  // event.target is the <img> that was clicked on
  // event.target.alt is the name of the goat

  // Cast a vote for the goat that was clicked on
  let goatName = event.target.alt;
  for( let i = 0; i < state.goats.length; i++ ) {
    if( state.goats[i].name === goatName ) {
      state.goats[i].votes++;
      state.totalVotes++;
      break;
    }
  }

  // When we get to the max # of votes allowed:
  if(state.totalVotes >= state.maxVotes ) {
    // Stop Voting by removing the click handler/listener
    goatContainer.removeEventListener('click', handleVoting);

    // Show the totals
    showResults();
  } else {
    renderGoats();
  }

}

function showResults() {

  let goatNames = [];
  let votes = [];
  let views = [];
  for( let i=0; i < state.goats.length; i++ ) {
    goatNames.push( state.goats[i].name );
    votes.push( state.goats[i].votes );
    views.push( state.goats[i].views );
  }

  // Create a canvas context
  const ctx = document.getElementById('myChart').getContext('2d');

  // chartJS Options
  let options = {
    type: 'bar',
    data: {
      labels: goatNames,
      datasets: [
        {
          label: '# of Votes',
          data: votes,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
       },
       {
        label: '# of Views',
        data: views,
        backgroundColor: [
            'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
     },
     ]
    },
    options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
    }
  };

  // Make a new chart with the canvas context and some options ...
  const myChart = new Chart(ctx, options);

}

createGoats();
renderGoats();

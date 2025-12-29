function guessHowManyPets_Forever() {
  let correct = false;
  let numberOfGuesses = 0;
  while( ! correct ) {
    let guess = prompt("How many pets do I have?");
    guess = Number(guess);
    numberOfGuesses++;
    if( guess === 3 ) { correct = true; }
  }

  document.write(numberOfGuesses);

}

function guessHowManyPets(maxGuesses) {

  // creates a flag so that we can conditionally output a final answer after the loop
  let gotItCorrect = false;
  let numberOfGuesses = 0;

  // A good comment explains why a for loop instead of a while loop?
  // TODO: change this to a while loop
  // FIXME: we have an off by 1 error
  for( let i = 1; i<= maxGuesses; i++ ) {
    let guess = prompt("How many pets do I have?");
    guess = Number(guess);

    // Use this section to break out and update the flags before the loop ends on a correct guess
    if( guess === 3 ) {
      gotItCorrect = true;
      numberOfGuesses = i;
      break;
    }
  }

  // Maybe write that they never got it?
  if( gotItCorrect ) {
    document.write(numberOfGuesses);
  } else {
    document.write("Sorry.");
  }
}


// STRETCH GOAL:
// Can you write this so that one function can handle ANY question?

function askQuestionUnlimitedTries( question, correctAnswer) {

}

function askQuestionWithTries( maxGuesses, question, correctAnswer ) {

}

askQuestionUnlimitedTries("What is my favorite pet's name?", "bear");
askQuestionWithTries(5, "How many pets do I have?", 3);
askQuestionWithTries(10, "What is my friend's name?", "sally");

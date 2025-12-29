
function getName() {
  let name = prompt("What is your name?");
  document.write("Nice to meet you " + name);
}

function getAge() {
  let age = prompt("Are you over 50?");
  // Normalize!
  // Convert "yes/Yeah, ..." into "y"
  let answer = age.charAt(0).toLowerCase();
  if( answer === "y" ) {
    document.write("Cool, GenX ROCKS!");
  } else {
    document.write("Booo You");
  }
}

function guessMyFavoriteColor() {
  let favoriteColors = ["black", "orange"];
  let guess = prompt("Guess one of my favorite colors");
  guess = guess.toLowerCase();
  if( favoriteColors.includes(guess) ) {
    document.write("You have good taste!");
  } else {
    document.write("That almost made my list");
  }
}


// this uses a for loop to check if their guess is in the array
// TODO: Use .includes to make this more readable
// TODO: Launch the question with a button like we saw in class
function guessFavoriteTeam() {

    let teams = ["seahawks", "eagles", "flyers", "mariners", "phillies"];

    let guess = prompt("Guess my favorite sports team");
    guess = guess.toLowerCase();

    let correct = false;
    for (let i = 0; i < teams.length; i++) {
        if (guess === teams[i]) {
            correct = true;
        }
    }

    if (correct) {
        alert("Good Job!!!!");
    } else {
        alert("You don't know me very well");
    }

}
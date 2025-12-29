// this is an "active" object
// means: I can interact with it in my code, directly.
// import("./person.json");


let count = localStorage.getItem("count") || 0;
let counter = document.getElementById("counter");
counter.textContent = count;

let personDisplay = document.getElementById("person");
let person = localStorage.getItem("person") || {};

console.log("got", person);
console.log(typeof person);

person = JSON.parse(person);

console.log("parsed", person);
console.log(typeof person);

personDisplay.textContent = person.name;

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

let input = document.querySelector("input");
input.addEventListener("change", (event) => {
   person.name = event.target.value;
   let personAsString = JSON.stringify(person);
   localStorage.setItem("person", personAsString);
   personDisplay.textContent = person.name;
});

document.addEventListener("click", () => {
  count++;
  counter.textContent = count;
  localStorage.setItem("count", count);
});



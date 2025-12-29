// Debuggin Notes

// 1. What did I expect to have happen?
// 2. What actually happened?
// 3. What have I tried to fix it?
// 4. What do I think the problem is?
// 5. What do I need to do to fix it?


function greet(personsName) {
  let p = personsName.toUpperCase();
  showName(p);
}

// There's an error ...
function showName(person) {
  let section = content.getElementById("content");
  section.textContent = `Hello, ${person}!`;
}

let name = "John";
greet(name);

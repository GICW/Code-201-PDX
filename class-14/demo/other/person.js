let name = localStorage.getItem("name");
let nameShower = document.querySelector('.stuff');
nameShower.textContent = `How are you, ${name}`;
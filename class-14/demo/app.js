let name = localStorage.getItem("name");
let nameShower = document.querySelector('.stuff');
nameShower.textContent = `Welcome Back, ${name}`;
function listDogs() {
  let list = document.getElementById("dogs");
  for( let i=0; i<allDogs.length; i++ ) {
     let item = document.createElement("li");
     item.textContent = allDogs[i].name;
     list.appendChild(item);
  }
}


listDogs();

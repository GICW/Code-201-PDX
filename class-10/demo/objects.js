let person = { 
    name: "John",
    hair: false,
    age: 55,
    pets: ["Rosie", "Geno"],
    kids: ["Zach", "Allie"]
}

let props = Object.keys(person);
let values = Object.values(person);

// Get one property value ...
// All of these would print "false"

  person.hair;

  person["hair"]; 

  let key = "hair";
  person[key];

// Loop over the object's keys and print values
for( let i = 0; i < props.length; i++ ) { 
    let key = props[i];
    let value = person[key];
    console.log(key, value);
}


const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

let personKeys = Object.keys(person);

for (let i = 0; i < personKeys.length; i++) {
  console.log(Object.keys(person)[i] + ": " + Object.values(person)[i]);
}

// Print values of person using Object.keys

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

// l'oggetto person2 non cambia perché è una shallow copy con lo stesso riferimento
// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

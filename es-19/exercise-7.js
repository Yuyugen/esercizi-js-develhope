class Person {
  constructor(firstName, lastName, age) {
    this.setFirstName(firstName);
    this.setLastName(lastName);
    this.setAge(age);
  }

  setFirstName(prsnName) {
    this.firstName = prsnName;
  }

  setLastName(prsnLastName) {
    this.lastName = prsnLastName;
  }

  setAge(prsnAge) {
    this.age = prsnAge;
  }

  get getFirstName() {
    return this.firstName;
  }

  get getLastName() {
    return this.lastName;
  }

  get getAge() {
    return this.age;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);

class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  set firstName(newVal) {
    if (typeof newVal === "string") {
      this._firstName = newVal;
    } else {
      this._firstName = String(newVal);
    }
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(newVal) {
    if (typeof newVal === "string") {
      this._lastName = newVal;
    } else {
      this._lastName = String(newVal);
    }
  }

  get lastName() {
    return this._lastName;
  }

  set age(newVal) {
    if (typeof newVal === "number") {
      this._age = newVal;
    } else {
      this._age = Number(newVal);
    }

    if (newVal < 1) {
      this._age = 1;
    } else if (newVal > 100) {
      this._age = 100;
    } else {
      this._age = newVal;
    }
  }

  get age() {
    return this._age;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);

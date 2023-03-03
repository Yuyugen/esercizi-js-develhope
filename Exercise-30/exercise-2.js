class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static toJson() {
    return JSON.stringify(this);
  }

  static fromJson(json) {
    let parsed = JSON.parse(json);
    return new Person(parsed.id, parsed.firstName, parsed.lastName, parsed.age);
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);

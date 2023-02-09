function printName() {
  const helloName = "Hello John";
  function inner() {
    console.log(helloName);
  }
  inner();
}

printName();

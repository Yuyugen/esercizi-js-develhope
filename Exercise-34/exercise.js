function printAsyncName(callback, name) {
  let sayHello = setInterval(callback, 1000);

  let sayName = () => {
    console.log(name);
    clearInterval(sayHello);
    sayHello = setInterval(callback, 1000);
  };

  setInterval(sayName, 2000);
}

printAsyncName(() => console.log("Hello"), "Mario");

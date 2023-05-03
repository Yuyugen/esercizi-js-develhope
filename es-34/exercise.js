function printAsyncName(callback, name) {
  let sayHello = setInterval(callback, 1000);

  setInterval(() => {
    clearInterval(sayHello);
    console.log(name);
    sayHello = setInterval(callback, 1000);
  }, 2000);
}

printAsyncName(() => console.log("Hello"), "Mario");

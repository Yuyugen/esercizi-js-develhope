function repeatHello(callback) {
  let sayHello = setInterval(callback, 1000);

  setTimeout(() => clearInterval(sayHello), 5000);
}

repeatHello(() => console.log("hello"));

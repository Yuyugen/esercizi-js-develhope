function repeatHello(callback) {
  setInterval(callback, 1000);
}

repeatHello(() => console.log("Hello"));

//Setinterval prende un'arrow function come argomento

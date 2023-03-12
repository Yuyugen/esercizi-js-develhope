function repeatHello(callback) {
  setInterval(callback, 1000);
}

repeatHello(() => console.log("hello"));

//la callback deve essere una funzione arrow, poiché setInterval prende una funzione come argomento

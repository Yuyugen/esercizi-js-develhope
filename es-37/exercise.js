const number = 8;

let numberCheck = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(number);
  } else {
    reject(number);
  }
});

numberCheck
  .then((val) => console.log("Il numero " + val + " è maggiore di 10"))
  .catch((err) => console.log("numero minore di 10"));

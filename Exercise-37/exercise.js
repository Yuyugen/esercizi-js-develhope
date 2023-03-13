const number = 15;

const numberCheck = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(number);
  } else {
    reject(number);
  }
});

numberCheck
  .then((val) => console.log(val))
  .catch(() => console.error(`errore: numero minore di 10`));

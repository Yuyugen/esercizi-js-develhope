const isLogged = true;

function loginCheck(isLogged) {
  let rand = Math.random();
  return new Promise((resolve, reject) => {
    if (isLogged) {
      resolve(rand);
    } else {
      reject(rand);
    }
  });
}

function objCreate(number) {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(number);
    }
  });
}

loginCheck(isLogged)
  .then((val) => objCreate(val))
  .then((obj) => console.log(obj))
  .catch((err) => console.log(Error("An error occurred", { cause: err })))
  .finally(() => console.log("query completed"));

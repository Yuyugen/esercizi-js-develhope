const isLogged = true;

function loginCheck(isLogged) {
  let rand = Math.random();
  return new Promise((resolve, reject) => {
    if (isLogged) {
      resolve(rand);
    } else {
      reject(new Error("User is not logged in."));
    }
  });
}

function objCreate(number) {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("A processing error occurred."));
    }
  });
}

loginCheck(isLogged)
  .then((val) => objCreate(val))
  .then((obj) => console.log(obj));

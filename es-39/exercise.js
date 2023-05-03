const isLogged = true;

function logCheck(logStatus) {
  let rand = Math.random();

  return new Promise((resolve, reject) => {
    if ((logStatus = true)) {
      resolve(rand);
    } else {
      reject(new Error("Login failed"));
    }
  });
}

function numCheck(num) {
  return new Promise((resolve, reject) => {
    if (num > 0.5) {
      resolve(`{name: "John", age: 24}`);
    } else {
      reject(new Error("User error"));
    }
  });
}

logCheck(isLogged)
  .then((randNum) => numCheck(randNum))
  .then((userObj) => console.log(userObj))
  .catch((err) => console.error(err))
  .finally(() => console.log("Cycle Complete"));

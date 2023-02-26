function sum(...args) {
  let total = 0;
  for (let i of args) {
    total += i;
  }
  return total;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

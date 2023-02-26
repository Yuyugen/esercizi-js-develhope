function sum(...args) {
  let result = 0;
  for (i of args) {
    result += i;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));

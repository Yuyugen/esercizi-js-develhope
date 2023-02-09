function sumUntil(maxValue) {
  if (maxValue > 0) {
    let sum = maxValue;
    for (i = 0; i < maxValue; i++) {
      sum += i;
    }
    return sum;
  } else {
    return "numero non valido";
  }
}

console.log(sumUntil(5));

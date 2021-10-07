function narcissistic(value) {
  let valueAsString = value.toString().split("").map(Number);
  let sum = 0;

  for (let number of valueAsString) {
    // sum += Math.pow(number, valueAsString.length);
    sum += number ** valueAsString.length;
  }

  return sum == value;
}

console.log(narcissistic(105));
console.log(narcissistic(371));
console.log(narcissistic(7));

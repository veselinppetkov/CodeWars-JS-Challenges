function score(dice) {
  const resultObj = {
    1: 1000,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
  };
  let result = 0;
  for (let i = 1; i <= 6; i++) {
    let current = dice.filter((x) => x == i);
    if (current.length >= 3) {
      result += resultObj[i];
    }

    if (i == 1 && current.length >= 3) {
      current.length -= 3;
      result += 100 * current.length;
    } else if (i == 1 && current.length < 3) {
      result += 100 * current.length;
    } else if (i == 5 && current.length >= 3) {
      current.length -= 3;
      result += 50 * current.length;
    } else if (i == 5 && current.length < 3) {
      result += 50 * current.length;
    }
  }
  return result;
}

console.log(score([1, 1, 1, 5, 5]));

// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

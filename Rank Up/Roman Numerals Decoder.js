function solution(roman) {
  const romanToDecimal = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  roman = roman.split("");

  for (let i = 0; i < roman.length; i++) {
    let currentNum = romanToDecimal[roman[i]];
    let previousNum = romanToDecimal[roman[i - 1]];
    let previousLetter = roman[i - 1];

    if (previousLetter == "I" && currentNum > previousNum) {
      result -= previousNum;
      result += currentNum - previousNum;
    } else {
      result += currentNum;
    }
  }
  return result;
}
solution(`XXI`); // 21
solution(`I`); // 1
solution(`XXIV`); // 24
solution(`IV`); // 4
solution(`MMVIII`); // 2008
solution(`MDCLXVI`); // 1666

function solution(roman) {
  const romanToDecimal = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  roman = roman.split("");

  for (let i = 0; i < roman.length; i++) {
    if (
      roman[i - 1] == "I" &&
      Number(romanToDecimal[roman[i]]) > Number(romanToDecimal[roman[i - 1]])
    ) {
      result -= Number(romanToDecimal[roman[i - 1]]);
      result +=
        Number(romanToDecimal[roman[i]]) - Number(romanToDecimal[roman[i - 1]]);
    } else {
      result += romanToDecimal[roman[i]];
    }
  }
  return result;
}

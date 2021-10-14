function solution(string) {
  let stringToLower = string.toLowerCase().split("");
  let originalString = string.split("");
  let result = "";
  if (string != stringToLower) {
    for (let i = 0; i < originalString.length; i++) {
      if (stringToLower[i] != originalString[i]) {
        result += ` ${originalString[i]}`;
      } else {
        result += `${originalString[i]}`;
      }
    }
    return result;
  }
}
solution("camelCasing");
solution("camelCasingTest");

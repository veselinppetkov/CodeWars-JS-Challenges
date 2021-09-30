function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));

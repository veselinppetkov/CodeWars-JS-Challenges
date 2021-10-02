function findShort(s) {
  let dictionary = s.split(" ");
  let shortestLength = Number.MAX_SAFE_INTEGER;

  for (let word of dictionary) {
    if (word.length < shortestLength) {
      shortestLength = word.length;
    }
  }
  return shortestLength;
}
findShort("turns out random test cases are easier than writing out basic ones");

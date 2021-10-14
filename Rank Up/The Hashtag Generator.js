function generateHashtag(str) {
  let result = "#";
  if (str.trim() == "") {
    return false;
  }
  str = str.split(" ");
  for (let word of str) {
    result += word.charAt(0).toUpperCase() + word.substring(1);
  }
  if (result.split("").length > 140) {
    return false;
  }
  return result;
}

generateHashtag("");
generateHashtag(" ".repeat(200));
generateHashtag("Do We have A Hashtag");
generateHashtag("Codewars");
generateHashtag("a".repeat(140));

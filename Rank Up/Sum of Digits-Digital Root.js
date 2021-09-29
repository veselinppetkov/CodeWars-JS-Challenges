function digital_root(n) {
  n = n.toString().split("");
  while (true) {
    n = n.reduce((a, b) => Number(a) + Number(b));
    if (n.toString().split("").length == 1) {
      break;
    }
    n = n.toString().split("");
  }
  return Number(n);
}

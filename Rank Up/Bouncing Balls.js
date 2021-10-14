function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    return h < window ? -1 : 2 + bouncingBall(h * bounce, bounce, window);
  } else {
    return -1;
  }
}
console.log(bouncingBall(3.0, 0.66, 1.5)); // expected 3
console.log(bouncingBall(30.0, 0.66, 1.5)); // expected 15

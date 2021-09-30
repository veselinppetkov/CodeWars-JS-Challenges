function validatePIN(pin) {
  let pattern = /^\d{4}$|^\d{6}$/g;
  return pattern.test(pin);
}
validatePIN(1234);
validatePIN(123456);

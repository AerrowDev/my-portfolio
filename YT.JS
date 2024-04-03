const isPowerOfFour = function (n) {
  if (n ===1) return true;
  if (n <= 0) return false;
  if (n % 4 !== 0) return false;
  return isPowerOfFour(n / 4);
};

const n1 = 16;
console.log(isPowerOfFour(n1));

const n2 = 5;
console.log(isPowerOfFour(n2));

const n3 = 1;
console.log(isPowerOfFour(n3));

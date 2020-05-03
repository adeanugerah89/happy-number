var isHappy = function happy(num) {
  let output = [];
  let sum = num.toString().split('').map(val => val*val).reduce((accumulator, currentItem) => accumulator + currentItem, 0)

  if (output.includes(sum)) {
    // breaks for infinite loop
    return sum === 1;
  }

  output.push(sum);
  if (sum === 1) {
    output = [];
    return true;
  }

  return happy(sum);
};

console.log(isHappy(19))

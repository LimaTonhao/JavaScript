const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];

let mult = 0;
let result1 = 0;
let result2 = 0;

for (let x = 0; x < numbers.length; x++) {
  if (x == 0) {
    for (let y = 0; y < numbers.length; y++) {
      if (y == 0) {
        mult = numbers[x][y] * numbers[x][y + 1];
      } else {
        result = mult * numbers[x][y + 1];
        console.log("O resultado da multiplicação da primeira linha é", result);
      }
    }
  } else {
    for (let y = 0; y < numbers.length; y++) {
      if (y == 0) {
        mult = numbers[x][y] * numbers[x][y + 1];
      } else {
        result = mult * numbers[x][y + 1];
        console.log("O resultado da multiplicação da segunda linha é", result);
      }
    }
  }
}

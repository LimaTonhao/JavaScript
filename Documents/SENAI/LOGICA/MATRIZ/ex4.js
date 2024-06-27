const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];

let soma = 0;

for (let x = 0; x < numbers.length; x++) {
  for (let y = 0; y <= numbers.length; y++) {
    soma = soma + numbers[x][y];
  }
}

console.log("A soma dos números da matriz é", soma);

const numbers = [
  [10, 20, 30],
  [10, 20, 30],
];

let linha = 0;
let c = 0;

for (let y = 0; y <= numbers.length; y++) {
  for (let x = 0; x < numbers.length; x++) {
    linha = linha + x++;
    let mult = numbers[x][y] * numbers[linha][y];
    console.log("A multiplicação da coluna " + c + " é", mult);
    c++;
  }
}

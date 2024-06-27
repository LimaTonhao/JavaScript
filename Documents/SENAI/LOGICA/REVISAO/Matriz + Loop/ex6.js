const prompt = require("prompt-sync")();

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let number = Number(prompt("Digite um número: "));

for (let i = 0; i < matriz.length; i++) {
  for (let x = 0; x < matriz.length; x++) {
    matriz[i][x] = matriz[i][x] * number;
  }
}

console.log(matriz);

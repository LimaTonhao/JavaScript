const prompt = require("prompt-sync")();

let i = 1;
let maior = 0;
let menor = 0;

do {
  let n = prompt("Digite um número: ") * 1;
  if (i == 1) {
    maior = n;
    menor = n;
  }
  if (n > maior) {
    maior = n;
  }
  if (n < menor) {
    menor = n;
  }
  i++;
} while (i <= 10);

console.log(maior, menor);

const prompt = require("prompt-sync")();

function maxmin(number, numero) {
  number = Number(prompt("Digite um número: "));
  numero = Number(prompt("Digite um número: "));
  let maior = 0;
  let menor = 0;
  if (number > numero) {
    maior = number;
  } else {
    maior = numero;
  }
  if (number < numero) {
    menor = number;
  } else {
    menor = numero;
  }
  return console.log("O maior número é", maior, "e o menor número é", menor);
}

maxmin();

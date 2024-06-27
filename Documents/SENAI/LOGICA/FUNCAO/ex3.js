const prompt = require("prompt-sync")();

function quadrado(number) {
  number = prompt("Digite um número: ");
  return number * number;
}

console.log("O número digitado ao quadrado é igual à", quadrado());

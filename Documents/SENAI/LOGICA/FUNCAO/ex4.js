const prompt = require("prompt-sync")();

function soma(number, numero) {
  number = Number(prompt("Digite um número: "));
  numero = Number(prompt("Digite outro número: "));
  return number + numero;
}

console.log("A soma dos dois números é", soma());

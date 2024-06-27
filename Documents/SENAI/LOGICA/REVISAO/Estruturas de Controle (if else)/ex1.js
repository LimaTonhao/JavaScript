const prompt = require("prompt-sync")();

let numero = prompt("Digite um número: ") * 1;

if (numero > 5) {
  console.log("O número é maior que 5");
}

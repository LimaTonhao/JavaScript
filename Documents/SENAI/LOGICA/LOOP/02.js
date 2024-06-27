const prompt = require("prompt-sync")();

let number = prompt("Digite um número maior que 0: ");

for (let i = 1; i <= number; i++) {
  console.log(i);
}

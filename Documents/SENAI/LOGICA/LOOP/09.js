const prompt = require("prompt-sync")();

let max;
let min;

for (let i = 1; i <= 5; i++) {
  let number = prompt("Digite um número: ") * 1;

  if (i == 1) {
    max = number;
    min = number;
  }
  if (number > max) {
    max = number;
  }
  if (number < min) {
    min = number;
  }
}
console.log(max, min);

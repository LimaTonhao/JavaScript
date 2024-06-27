const prompt = require("prompt-sync")();

let i = 1;

let max = 0;
let min = 0;

while (i < 11) {
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
  i++;
}
console.log(max, min);

const prompt = require("prompt-sync")();

let number = prompt("Digite um número: ") * 1;

let i;
let count = 0;

for (i = 1; i <= number; i++) {
  if (i == 1) {
    console.log(" ".repeat(number), "*".repeat(i));
  }
  if (i > 1) {
    console.log(" ".repeat(number - count), "*".repeat(i + count));
  }
  count++;
}

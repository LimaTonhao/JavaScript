const prompt = require("prompt-sync")();

let i = 1;

let n = prompt("Digite um número: ") * 1;

let fat;

let result;

do {
  if (i == 1) {
    fat = n - 1;
    result = n * fat;
  }
  fat = fat - 1;
  result = result * fat;
  i++;
} while (fat > 1);

console.log(n + "!" + " = " + result);

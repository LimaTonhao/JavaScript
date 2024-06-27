const prompt = require("prompt-sync")();

let number = 0;
let media;

for (let i = 1; i <= 10; i++) {
  let q = prompt("Digite um número maior que 0: ") * 1;
  number = number + q;
  if (i == 10) {
    media = number / i;
  }
}
console.log(media);

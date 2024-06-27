const prompt = require("prompt-sync")();

const number = 50;

while (true) {
  let q = prompt("Digite um número: ") * 1;
  if (q == number) {
    console.log("Parabéns");
    break;
  } else if (q != number) {
    if (q > number) {
      console.log("Tente um número menor");
    } else if (q < number) {
      console.log("Tente um número maior");
    }
  }
}

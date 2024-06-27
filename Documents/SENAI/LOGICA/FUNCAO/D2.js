const prompt = require("prompt-sync")();

function soma(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mult(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

const x = prompt("Digite um número: ") * 1;

const y = prompt("Digite outro número: ") * 1;

console.clear();

console.log(
  ` 1 - SOMA
 2 - SUBTRAÇÃO
 3 - MULTIPLICAÇÃO
 4 - DIVISÃO`
);
const operation = prompt("Qual operação deseja realizar? ") * 1;

switch (operation) {
  case 1:
    console.log(soma(x, y));
    break;
  case 2:
    console.log(sub(x, y));
    break;
  case 3:
    console.log(mult(x, y));
    break;
  case 4:
    console.log(div(x, y));
    break;
  default:
    console.log("Opção inválida, digite outro número");
    console.clear();
}

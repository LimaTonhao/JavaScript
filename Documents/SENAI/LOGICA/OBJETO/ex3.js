const prompt = require("prompt-sync")();

let arr = [];

for (let i = 0; i < 5; i++) {
  let name = prompt("Digite um nome: ");
  const obj = { id: 1 + i, nome: name };
  arr.push(obj);
}

console.log(arr);

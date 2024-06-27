const carro = {
  marca: "Porsche",
  modelo: "Capoteira",
  ano: 2023,
  cor: "Rosa Pink",
};

console.log(carro.modelo, carro.cor);

carro.cor = "Jacinto";
carro.condicao = "Usado/Capotado";

delete carro.ano;

console.log(carro);

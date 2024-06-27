const prompt = require("prompt-sync")();

const cambioMoedas = {
  dolar_us: {
    nome: "Dólar Americano",
    codigo: "USD",
    valor_em_real: 5.4,
  },
  euro: {
    nome: "Euro",
    codigo: "EUR",
    valor_em_real: 6.52,
  },
  libra: {
    nome: "Libra Esterlina",
    codigo: "GBP",
    valor_em_real: 7.42,
  },
  iene: {
    nome: "Iene Japonês",
    codigo: "JPY",
    valor_em_real: 0.049,
  },
  dolar_au: {
    nome: "Dólar Australiano",
    codigo: "AUD",
    valor_em_real: 4.14,
  },
};

function BRL() {
  const real = prompt("Digite um valor: ") * 1;
  console.clear;
  return real;
}

function info() {
  console.log(
    `   1 - Dólar Americano
   2 - Euro
   3 - Libra Esterlina
   4 - Iene Japonês
   5 - Dólar Australiano`
  );
  console.log("");
  let option = prompt("Escolha uma das opções acima: ") * 1;
  console.clear;
  switch (option) {
    case 1:
      option = cambioMoedas.dolar_us.valor_em_real;
      break;
    case 2:
      option = cambioMoedas.euro.valor_em_real;
      break;
    case 3:
      option = cambioMoedas.libra.valor_em_real;
      break;
    case 4:
      option = cambioMoedas.iene.valor_em_real;
      break;
    case 5:
      option = cambioMoedas.dolar_au.valor_em_real;
  }
  return option;
}

console.clear;

const a = BRL();
const b = info();

function calculo() {
  return a * b;
}

console.log("O valor convertido em reais é igual a", calculo(a, b));

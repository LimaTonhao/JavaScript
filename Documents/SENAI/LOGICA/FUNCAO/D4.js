const prompt = require("prompt-sync")();

const dicionario = {
  relacao:
    "vinculação de alguma ordem entre pessoas, fatos ou coisas; ligação, conexão, vínculo.",
  semelhanca: "comparação entre duas coisas; confronto, cotejo, paralelo.",
  aleatorio:
    "que depende das circunstâncias, do acaso; casual, fortuito, contingente.",
  incerteza: "falta de certeza; dúvida, hesitação, indecisão, imprecisão.",
  for: "expressão que remete a facilidade; mais fácil impossível.",
};

function verDicio() {
  console.log(dicionario);
}

function search() {
  const palavra = prompt("Procure uma palavra: ");
  console.log("");
  console.log("Seu significado é:", dicionario[palavra]);
}

function addDicio() {
  const palavra = prompt("Digite uma palavra: ");
  const sign = prompt("Digite o significado dessa palavra: ");
  dicionario[palavra] = sign;
}

function operation() {
  return prompt("Você deseja realizar mais alguma ação? ");
}

function continuar() {
  prompt.hide("pressione Enter para continuar ...");
}

while (true) {
  console.log(
    `Opções
    1 - ver dicionário
    2 - procurar palavra
    3 - adicionar palavra
    4 - encerrar`
  );

  const option = Number(prompt("Digite o que você deseja fazer: "));

  if (option == 4) {
    console.clear();
    const baby = operation();
    if (baby == "nao" || baby == "n" || baby == "Nao") {
      console.log("O dicionário será fechado...");
      break;
    }
  }

  console.clear();

  switch (option) {
    case 1:
      verDicio();
      continuar();
      break;
    case 2:
      search();
      continuar();
      break;
    case 3:
      addDicio();
      continuar();
      break;
  }
  console.clear();
}

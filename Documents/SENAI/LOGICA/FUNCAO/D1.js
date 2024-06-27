// Lista de Tarefas

const prompt = require("prompt-sync")();

/*
  Exemplo do Objeto da Tarefa
  {
    id: number,
    tarefa: string,
    marcada: boolean
  }
*/

const lista = [];

console.clear();

function mostrarLista() {
  console.log(lista);
}

let id = 0;

function adicionarTarefa() {
  let add = prompt("Adicione algo na lista: ");
  let marc = false;
  lista.push({ id: (id = id + 1), tarefa: add, marcada: marc });
}

function marcarTarefa() {
  const escolha = prompt("Escolha qual tarefa deseja marcar: ");
  lista[escolha - 1].marcada = true;
  if (lista[escolha - 1].marcada == true) {
    lista[escolha - 1].marcada = "Concluida";
  }
}

function removerTarefa() {
  const remove = prompt("Digite qual tarefa deseja remover: ");
  lista.splice(remove - 1, 1);
}

function continuar() {
  prompt.hide("pressione Enter para continuar ...");
}

while (true) {
  console.log(
    `MENU
    1 - ver lista
    2 - adicionar tarefa
    3 - marcar tarefa
    4 - remover tarefa
    5 - encerrar`
  );

  const option = Number(prompt("Digite a opção: "));

  if (option === 5) {
    console.clear();
    console.log("Programa encerrado!");
    break;
  }

  console.clear();

  switch (option) {
    case 1:
      mostrarLista();
      continuar();
      break;
    case 2:
      adicionarTarefa();
      continuar();
      break;
    case 3:
      marcarTarefa();
      continuar();
      break;
    case 4:
      removerTarefa();
      continuar();
      break;
    default:
      console.log("Opção inválida");
      continuar();
  }

  console.clear();
}

// criando os elementos.
const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#pergunta");

// criando as respostas.
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem que não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Concentre-se e pergunte novamente.",
  "Sim.",
  "Claro que não.",
  "Claro que sim.",
  "Os sinais apontam que sim.",
  "Os sinais apontam que não.",
  "Óbvio que sim.",
  "Óbvio que não.",
  "Os astros não indicam isso!",
  "Os astros estão ao seu favor!",
];

function fazerPergunta() {
  if (inputPergunta.value == "" || null) {
    alert("Digite sua pergunta");
    return;
  }
  // gerar numero de resposta aleátorio.
  const totalRespostas = respostas.length;
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);
  elementoResposta.innerHTML = respostas[numeroAleatorio];

  // sumir resposta
  setTimeout(function () {
    elementoResposta.style.opacity = 0;
  }, 3000);
}

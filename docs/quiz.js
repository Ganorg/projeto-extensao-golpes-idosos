/* ==========================================================================
   Quiz "Isto é golpe?"
   Exemplo simples de LÓGICA DE PROGRAMAÇÃO:
   - uma lista (array) de perguntas
   - uma variável que guarda em qual pergunta estamos
   - condicional (if/else) para checar se a resposta está certa
   - funções para organizar o código
   ========================================================================== */

// Lista de perguntas. Cada item tem: o texto, e se a resposta certa é "golpe".
var perguntas = [
  {
    texto: 'SMS: "CAIXA: seu benefício está bloqueado. Regularize em: caixa-gov-br.net/liberar"',
    ehGolpe: true,
    explicacao: "É golpe. Bancos não mandam links por SMS. O endereço é falso (não é caixa.gov.br)."
  },
  {
    texto: 'Ligação: "Somos do seu banco. Para cancelar uma compra suspeita, informe o código que você acabou de receber por SMS."',
    ehGolpe: true,
    explicacao: "É golpe. O banco NUNCA pede o código do SMS por telefone."
  },
  {
    texto: 'WhatsApp de número desconhecido: "Oi pai, meu celular quebrou, esse é o número novo. Preciso que você faça um PIX urgente."',
    ehGolpe: true,
    explicacao: "É golpe. Ligue para o número antigo e ouça a voz da pessoa antes de qualquer coisa."
  },
  {
    texto: 'Seu neto liga do número dele, você reconhece a voz numa conversa normal e ele convida para o almoço de domingo.',
    ehGolpe: false,
    explicacao: "Não é golpe. Número conhecido, ligação normal, sem pedido de dinheiro ou senha com pressa."
  },
  {
    texto: 'Vídeo no Facebook: um apresentador famoso "garante" que você dobra a aposentadoria investindo num aplicativo hoje.',
    ehGolpe: true,
    explicacao: "É golpe. Vídeo pode ser feito por Inteligência Artificial. Promessa de lucro fácil é sempre suspeita."
  },
  {
    texto: 'E-mail do seu banco, sem links, avisando que a fatura está disponível no aplicativo. Você abre o aplicativo por conta própria e confere.',
    ehGolpe: false,
    explicacao: "Não é golpe se você NÃO clicou em link e conferiu abrindo o aplicativo você mesmo."
  }
];

var indice = 0;   // pergunta atual
var acertos = 0;  // quantas o usuário acertou

// Mostra a pergunta atual na tela
function mostrarPergunta() {
  var p = perguntas[indice];
  document.getElementById("contador").textContent =
    "Pergunta " + (indice + 1) + " de " + perguntas.length;
  document.getElementById("pergunta").textContent = p.texto;
  var area = document.getElementById("resultado");
  area.textContent = "";
  area.className = "";
  document.getElementById("proxima").hidden = true;
  // Reabilita os botões de resposta para a nova pergunta
  document.getElementById("btnGolpe").disabled = false;
  document.getElementById("btnSeguro").disabled = false;
}

// Recebe a resposta do usuário: verdadeiro = ele disse "é golpe"
function responder(disseQueEhGolpe) {
  var p = perguntas[indice];
  var area = document.getElementById("resultado");

  if (disseQueEhGolpe === p.ehGolpe) {
    acertos = acertos + 1;
    area.textContent = "✔ Você acertou! " + p.explicacao;
    area.className = "certo";
  } else {
    area.textContent = "✖ Atenção: " + p.explicacao;
    area.className = "errado";
  }
  // Trava as respostas até avançar, para evitar cliques repetidos
  document.getElementById("btnGolpe").disabled = true;
  document.getElementById("btnSeguro").disabled = true;
  document.getElementById("proxima").hidden = false;
}

// Avança para a próxima pergunta ou mostra o resultado final
function proxima() {
  indice = indice + 1;
  if (indice < perguntas.length) {
    mostrarPergunta();
  } else {
    document.getElementById("contador").textContent = "Fim do teste";
    document.getElementById("pergunta").textContent =
      "Você acertou " + acertos + " de " + perguntas.length + " perguntas.";
    document.getElementById("botoes").hidden = true;
    document.getElementById("resultado").textContent =
      "Lembre-se: na dúvida, pare e confirme por outro caminho.";
    document.getElementById("resultado").className = "certo";
    document.getElementById("proxima").hidden = true;
  }
}

// Liga os botões às funções quando a página carrega
window.onload = function () {
  document.getElementById("btnGolpe").onclick = function () { responder(true); };
  document.getElementById("btnSeguro").onclick = function () { responder(false); };
  document.getElementById("proxima").onclick = proxima;
  mostrarPergunta();
};

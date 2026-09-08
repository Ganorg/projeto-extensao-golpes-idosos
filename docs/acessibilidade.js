/* ==========================================================================
   Barra de acessibilidade da cartilha
   Cria, no topo de cada página, botões para:
   - aumentar / diminuir o tamanho da letra (A+ / A-)
   - ligar/desligar o modo de alto contraste
   A preferência do usuário fica salva no navegador (localStorage), então
   ela continua valendo quando ele voltar ou abrir outra página.

   Conceitos de programação usados aqui: funções, condicionais (if),
   eventos de clique e armazenamento local (localStorage).
   ========================================================================== */

(function () {
  // Lê preferências salvas (se não houver, usa valores padrão)
  var escala = parseFloat(lerSalvo("cartilha-escala", "1"));
  var contraste = lerSalvo("cartilha-contraste", "nao") === "sim";

  var MIN = 1;     // tamanho normal
  var MAX = 1.8;   // limite para não quebrar o layout
  var PASSO = 0.15;

  function lerSalvo(chave, padrao) {
    try {
      var v = localStorage.getItem(chave);
      return v === null ? padrao : v;
    } catch (e) {
      return padrao; // se o navegador bloquear, segue sem salvar
    }
  }

  function salvar(chave, valor) {
    try { localStorage.setItem(chave, valor); } catch (e) {}
  }

  // Aplica a escala de fonte e o contraste na página
  function aplicar() {
    document.documentElement.style.fontSize = (escala * 100) + "%";
    if (contraste) {
      document.body.classList.add("alto-contraste");
    } else {
      document.body.classList.remove("alto-contraste");
    }
  }

  function aumentar() {
    if (escala < MAX) escala = escala + PASSO;
    salvar("cartilha-escala", escala);
    aplicar();
  }

  function diminuir() {
    if (escala > MIN) escala = escala - PASSO;
    if (escala < MIN) escala = MIN;
    salvar("cartilha-escala", escala);
    aplicar();
  }

  function alternarContraste() {
    contraste = !contraste;
    salvar("cartilha-contraste", contraste ? "sim" : "nao");
    aplicar();
  }

  // Monta a barra de botões e coloca no início da página
  function montarBarra() {
    var barra = document.createElement("div");
    barra.className = "barra-acessibilidade";
    barra.setAttribute("aria-label", "Ferramentas de acessibilidade");

    var btnMenos = document.createElement("button");
    btnMenos.type = "button";
    btnMenos.textContent = "A−"; // A menos
    btnMenos.title = "Diminuir a letra";
    btnMenos.onclick = diminuir;

    var btnMais = document.createElement("button");
    btnMais.type = "button";
    btnMais.textContent = "A+";
    btnMais.title = "Aumentar a letra";
    btnMais.onclick = aumentar;

    var btnContraste = document.createElement("button");
    btnContraste.type = "button";
    btnContraste.textContent = "Alto contraste";
    btnContraste.title = "Ligar ou desligar o alto contraste";
    btnContraste.onclick = alternarContraste;

    barra.appendChild(btnMenos);
    barra.appendChild(btnMais);
    barra.appendChild(btnContraste);

    document.body.insertBefore(barra, document.body.firstChild);
  }

  window.addEventListener("DOMContentLoaded", function () {
    montarBarra();
    aplicar();
  });
})();

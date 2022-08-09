/*
OBJETIVO 1: Quando clicarmos na seta avançar temos que mostrar o proximo cartão da lista
    passo 1: dar um jeito de pegar o elemento HTML da seta avançar.
    passo 2: dar um jeito de identificar o clique do usuario na seta.
    passo 3: fazer aparecer o proximo cartão da lista.
    passo 4: buscar o cartão selecionado anteriormente e esconder.

OBJETIVO 2: Quando clicarmos na seta voltar temos que mostrar o cartão anterior da lista
    passo 1: dar um jeito de pegar o elemento HTML da seta voltar.
    passo 2: dar um jeito de identificar o clique do usuario na seta.
    passo 3: fazer aparecer o cartão anterior da lista.
    passo 4: buscar o cartão selecionado anteriormente e esconder.
*/
// passo 1: dar um jeito de pegar o elemento HTML da seta avançar.
const btnAvancar = document.getElementById("btn-avancar");
//passo 1: dar um jeito de pegar o elemento HTML da seta voltar.
const btnVoltar = document.getElementById("btn-voltar");

//Função para esconder o cartão
function esconderCartaoSelecionado() {
  //passo 4: buscar o cartão selecionado anteriormente e esconder.
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

//Função de mostrar o cartão
function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
}
//passo 3: fazer aparecer o proximo cartão da lista.
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

//passo 2: dar um jeito de identificar o clique do usuario na seta.
btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  cartaoAtual++;
  mostrarCartao();

  esconderCartaoSelecionado();
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao();
});

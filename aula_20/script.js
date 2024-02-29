let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 0,
  valor: 11.66,
};

let btnAdicionarProduto = document.querySelector('#btn-adicionar-produto-01')
let btnRemoverProduto = document.querySelector("#btn-subtrair-produto-01");
let qtdProduto = document.querySelector("#quantidade-produto-01");



function atualizarSubtotal(){
  quantidadeSubtotal.innerText = 
  subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = 
  (subtotalInfo.valor * subtotalInfo.quantidade).toFixed(2);
}

function adicionarProduto(){
  qtdProduto.value = Number(qtdProduto.value) + 1; 
  subtotalInfo.quantidade = subtotalInfo.quantidade+1;
  atualizarSubtotal();
}

btnAdicionarProduto.addEventListener('click', adicionarProduto)

function subtrairProduto() {
  if(Number(qtdProduto.value) > 0){
    qtdProduto.value = Number(qtdProduto.value) - 1; 
    subtotalInfo.quantidade = subtotalInfo.quantidade - 1;
    atualizarSubtotal();
  }  
}
btnRemoverProduto.addEventListener("click", subtrairProduto);

qtdProduto.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let quantidade = Number(qtdProduto.value);
    subtotalInfo.quantidade = quantidade;
    atualizarSubtotal();
  }
});



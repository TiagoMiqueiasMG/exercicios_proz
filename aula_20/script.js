let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;


// Edilson Santos
// Replicar o que fizemos com o boto de adicionar.
// Criar a funCao para o botoo subtrair e o desafio  que nao pode ficar negativo. 

let btnAdicionarProduto = document.querySelector('#btn-adicionar-produto-01')
let btnRemoverProduto = document.querySelector("#btn-subtrair-produto-01");
let qtdProduto = document.querySelector("#quantidade-produto-01");

function adicionarProduto(){
  qtdProduto.value = Number(qtdProduto.value) + 1; 
}

btnAdicionarProduto.addEventListener('click', adicionarProduto)

function subtrairProduto() {
  if(Number(qtdProduto.value) > 0){
    qtdProduto.value = Number(qtdProduto.value) - 1;
    
  }  
  console.log(qtdProduto.value);
  
}

btnRemoverProduto.addEventListener("click", subtrairProduto);
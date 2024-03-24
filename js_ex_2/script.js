// Capturando os elementos do HTML
const titulo = document.getElementById("titulo");
const listaNaoOrdenada = document.querySelector("ul");
const link = document.querySelector("a");
const listaOrdenada = document.getElementById("lista-ordenada");

// Adicionando conteúdo aos elementos
titulo.innerText = "Título da Página";
link.innerText = "Visite ProZeducação";

// Adicionando itens à lista não ordenada usando innerHTML
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionando itens à lista ordenada usando innerHTML
listaOrdenada.innerHTML = `
    <li><a href="https://inscricao.prozeducacao.com.br/inscricao-proz-geral/?utm_source=google&utm_medium=cpc&utm_campaign=MG_Google_Search_Institucional_CPC&utm_content=ProzExata1&gad_source=1&gclid=CjwKCAjwnv-vBhBdEiwABCYQAyc3kEIyPBX_XfUHqWbhxfxQI_PUUC3_Fnz9gbAD_dJrEVRAUFUjeBoCwIEQAvD_BwE">Link 1</a></li>
    <li><a href="https://inscricao.prozeducacao.com.br/home-2024/">Link 2</a></li>
    <li><a href="https://www.instagram.com/prozeducacaobr/">Link 3</a></li>
`;

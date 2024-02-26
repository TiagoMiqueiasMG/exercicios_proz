// - post 02
// - formulario
// - section com ambos os posts
// - datas dos posts
// - textos dos posts
// - listas com links das redes sociais

const segundoPostElement = document.getElementById('post02');
console.log('Elemento Logo 2:' ,segundoPostElement);

// segundoPostElement.style.background = 'purple';
// segundoPostElement.style.color = 'white';

const formulario = document.getElementById("formulario");
console.log('Form:' , formulario )

formulario.style.border = 'gray 8px solid'
formulario.style.boxShadow = '-8px 4px 10px 4px'

const posts = document.getElementById("posts");
console.log('Posts', posts)



const datas = document.getElementsByClassName("post-data");
console.log('Datas', datas)

const textos = document.getElementsByClassName("post-texto");
console.log('Textos:' , textos)

const links = document.getElementsByClassName("lista_redes");
console.log("Links:", links);

// - O link dentro do texto do primeiro post
// - A palavra em negrito dentro do texto do segundo post
// - O input de nome do formulário
// - Os links da lista de redes no final da página
// - Os links da navegação (só os links, não os elementos de lista)
// - Os 4 "Autor:" e "Data:" em negrito nos dois posts'

const link = document.querySelector(".post-texto a");
console.log('Retorno do elemento: ', link) 


// const negrito = document.querySelector("#post02 .post-texto strong").innerHTML;
// console.log("Retorno do elemento: ", negrito); 


const negrito = document.querySelector("#post02 .post-texto strong");
console.log("Retorno do elemento: ", negrito);

const nome = document.querySelector('#nome')
console.log("Input Nome:", nome )

const listaRedes = document.querySelectorAll('.lista_redes');
console.log("lista das redes sociais: ", listaRedes)

listaRedes.forEach(function(redes){
    console.log('Redes Sociais: ', redes)
})


const button = document.querySelector('button')

button.style.width= '150px'
button.style.height = "100px";
button.style.backgroundColor = "#ECC249";
button.style.borderRadius= "15%"
button.style.fontSize = "40px";


// desafio como selecionar os dois error-text 
// Como acessar mais de uma classe em um código só

const inputStyle = document.querySelectorAll(".error-text, .label");

console.log(inputStyle);

inputStyle[0].style.backgroundColor = "red";
inputStyle[1].style.background= "blue";


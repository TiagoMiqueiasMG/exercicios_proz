// const inputElement = document.getElementsByTagName('input')

// inputElement[0].style.background = 'red'
// inputElement[1].style.background = "#A1F562";

// const labels = document.querySelectorAll("label");

// labels.forEach((element) => {
//     element.style.background = "#62F593";
// });

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").addEventListener("click", function (event) {
    event.preventDefault(); // evitar o envio do formulário

    // variáveis
    const usernameInput = document.getElementById("login-usuario");
    const passwordInput = document.getElementById("login-senha");
    const errorUsername = document.querySelector(".error-text:nth-of-type(1)");
    const errorPassword = document.querySelector(".error-text:nth-of-type(2)");

    // resetar o erro
    usernameInput.classList.remove("error");
    passwordInput.classList.remove("error");
    errorUsername.classList.remove("visible");
    errorPassword.classList.remove("visible");

    // validar nome do usuário
    const valueUsername = usernameInput.value.trim();

    if (valueUsername === "") {
      usernameInput.classList.add("error");
      errorUsername.classList.add("visible");
    } else {
      usernameInput.classList.add("correct"); // adicionar classe 'correct' se o campo for válido
    }

    // validar a senha
    if (passwordInput.value === "") {
      passwordInput.classList.add("error");
      errorPassword.classList.add("visible");
    } else {
      passwordInput.classList.add("correct"); // adicionar classe 'correct' se o campo for válido
    }

    // verificar se ambos estão válidos e verificar o tamanho dos caracteres
    if (
      valueUsername.length > 0 &&
      valueUsername.length <= 20 &&
      passwordInput.value.length >= 6 &&
      passwordInput.value.length <= 20
    ) {
      document.getElementById("loginForm").submit();
      alert("Formulário enviado com sucesso");
    } else {
      alert("Por favor, verifique os campos e preencha corretamente.");
    }
  });
});

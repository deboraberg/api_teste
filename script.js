//script.js
document.addEventListener("DOMContentLoaded"), function() {

    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const submitButton = document.getElementById('submit');

    const erroNome = document.getElementById('erro-nome');
    const erroEmail = document.getElementById('erro-email');
    const erroSenha = document.getElementById('erro-senha');

// Função de validação de nome
function validarNome() {
    if (nomeInput.ariaValueMax.trim()== ""){
        nomeInput.classList.add("invalid");
        erroNome.style.display = "block";
    } else {
        nomeInput.classList.remove("invalid");
        erroNome.style.display = "none";
    }
}
// função de validar email
function validarEmail(){
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-zA-Z]{2,6}$/;
    if (!regexEmail.test(emailInput.value)) {
        emailInput.classList.add("invalid");
        erroEmail.style.display = "block";
    } else {
        emailInput.classList.remove("invalid");
        erroEmail.style.display = "none"
    }
}
//Função de validação de senha
function validarSenha(){
    const senha = senhaInput.value;
    const regexSenha = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if (!regexSenha.test(senha)) {
        senhaInput.classList.add("invalid")
        erroSenha.style.display = "block"
    } else {
        senhaInput.classList.remove("invalid");
        erroSenha.style.display = "none";
    }
}
//Função de habilitar ou desabilitar o botão de envio
function validarFormulario() {
    if(
        nomeInput.value.trim() !== "" &&
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]*\.[a-zA-Z]{2,6}$/.test(emailInput.value)&&
        /^(?=.*[A-Z])(?=.*[0-9]).{8,}/.test(senhaInput.value)
    ) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled =true;
    }
}
//Adicionar event listeners para os campos
nomeInput.addEventListener('input', function (){
    validarNome();
    validarFormulario();
});
emailInput.addEventListener('input', function (){
    validarEmail();
    validarFormulario();
});
senhaInput.addEventListener('input',function(){
});

//evento de subimit (evtar envio caso haja erros)
document.getElementById('Formulario').addEventListener('submit', function(event){
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});

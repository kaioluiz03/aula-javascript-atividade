var click = document.getElementById('botao');
let nome = document.getElementById('nome');
let senha = document.getElementById('senha');

click.addEventListener('click', () => {
    if(nome.value != '' && senha.value != ''){
        alert('Você será direcionado para nossa página principal.');
    }
    else{
        alert('Usuário e/ou Senha estão inválidos.');
    }
})
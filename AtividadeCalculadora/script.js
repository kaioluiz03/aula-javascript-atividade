const zerar = document.getElementById('zerar');
const resultadoCalculo = document.getElementById('equal');
const botoes = document.getElementById('allBotoes');
var resultado = document.getElementById('valorInput');

botoes.addEventListener('click', e =>{
    if(e.target.id == 'allBotoes'){
        return;
    }
    else{
        resultado.value += e.target.value;
    }
});

zerar.addEventListener('click', () =>{
    document.getElementById('valorInput').value = '';
});

resultadoCalculo.addEventListener('click', () =>{
    let lastResult = eval(resultado.value);
    document.getElementById('valorInput').value = lastResult;
});
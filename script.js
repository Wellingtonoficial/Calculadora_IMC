

let calcular = document.getElementById('calcular');

idade = parseInt(idade);
altura = parseFloat(altura);
peso = parseFloat(peso);


function imc () {
    let nome = document.getElementById('nomejs').value;
    let idade = document.getElementById('idadejs').value;
    let altura = document.getElementById('alturajs').value;
    let peso = document.getElementById('pesojs').value;
    let resultado = document.getElementById('resultado1');

    if ( nome !== '' && idade !== '' &&  altura !== '' &&  peso !== ''){
        
        altura = altura / 100
        valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = "";

        if (valorIMC <= 16){
            classificacao = ' A baixo peso muito grave'
        }
        else if (valorIMC > 16 && valorIMC <= 16.99){
            classificacao = 'A baixo peso grave'
        }
        else if (valorIMC >= 17 && valorIMC <= 18.49){
           classificacao = 'Com baixo peso'
        }
        else if (valorIMC >= 18.50 && valorIMC <= 24.99){
           classificacao = 'Com peso normal'
        }
        else if (valorIMC >= 25 && valorIMC <= 29.99){
            classificacao = 'Com sobrepeso'
        }    
        else if (valorIMC >= 30 && valorIMC <= 34.99){
            classificacao ='Com obesidade grau 1'
        }
        else if (valorIMC >= 35 && valorIMC <= 39.99){
            classificacao = 'Com obesidade grau 2'
        }
        else {
            classificacao = 'Com obesidade grau 3'
        }

        resultado.textContent = `Olá ${nome}, com  ${idade} anos seu índice de massa corporal é ${valorIMC} e você está ${classificacao}`
    }
    else{
        resultado.textContent = 'Preencha todos os campos!';
    }
};

calcular.addEventListener('click', imc); //Efeito igual "onclick"
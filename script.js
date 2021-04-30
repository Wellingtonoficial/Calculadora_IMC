var sexo = document.getElementsByClassName('sexo').value
var idade = document.getElementsByClassName('idade')
var altura = document.getElementsByClassName('altura')
var peso = document.getElementsByClassName('peso')


var classificacao = '';

idade = parseFloat(idade);
altura = parseFloat(altura);
peso = parseFloat(peso);


altura = altura / 100;

var soma =  peso / (altura * altura);


if (soma <= 16){
    classificacao = 'Baixo peso muito grave'

    document.getElementById('dieta').innerHTML='Coma muito'
}
else if (soma > 16 && soma <= 16.99){
    classificacao = 'Baixo peso grave'

    document.getElementById('dieta').innerHTML='Coma muito 2'
}
else if (soma >= 17 && soma <= 18.49){
   classificacao = 'Baixo peso'

   document.getElementById('dieta').innerHTML='Coma mais'
}
else if (soma >= 18.50 && soma <= 24.99){
   classificacao = 'Peso normal'

   document.getElementById('dieta').innerHTML='tranquilo'
}
else if (soma >= 25 && soma <= 29.99){
    classificacao = 'Sobrepeso'

    document.getElementById('dieta').innerHTML='diminua mais'
}    
else if (soma >= 30 && soma <= 34.99){
    classificacao ='Obesidade grau 1'

    document.getElementById('dieta').innerHTML='coma menos'
}
else if (soma >= 35 && soma <= 39.99){
    classificacao = 'Obesidade grau 2'

    document.getElementById('dieta').innerHTML='Não coma'
}
else {
    classificacao = 'Obesidade grau 3'

    document.getElementById('dieta').innerHTML='Não coma'
}

document.getElementById('resultado').innerHTML= nome + ' possui índice de massa corporal igual a ' + soma + ', sendo classificado como: ' + classificacao + '.'


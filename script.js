function somar(){
    // body (document),pegando elemetos pelo id
    // entradas
    var numero1 = parseInt(document.getElementById('num1').value);
    var numero2 = parseInt(document.getElementById('num2').value);

    // processamento
    var soma = numero1 + numero2;

    // saida
    document.getElementById('resultado').innerHTML = `Resultado = ${soma}`;
}
function calcular(operacao) {
    var n1 = document.querySelector('#n1');
    var n2 = document.querySelector('#n2');

    //converte os valores de entrada para numeros
    var num1 = parseFloat(n1.value);
    var num2 = parseFloat(n2.value);

    var res;

    switch (operacao) {
        case 'soma':
            res = num1+num2;
            break;

        case 'subtracao':
            res = num1-num2;
            break;

        case 'divisao':
            if (num2 !== 0) {
                res = num1 / num2;
            } else {
                res = 'Erro: Divisão por zero!';
            }

        case 'multiplicacao':
            res = num1*num2;

    }

    // Exibe o resultado no elemento span
    resultado.textContent = res;
}

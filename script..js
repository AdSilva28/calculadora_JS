//função criada para o usuário inserir valores no visor da calculadora
function inserir(valor_digitado) {
    var num = document.getElementById('visor').innerHTML; /*Retorna o valor atual no visor e armazena em num*/
    document.getElementById('visor').innerHTML = num + valor_digitado;

}

/*Função criada para limpar todos os dados do visor de uma vez*/
function limpar_Tudo() {
    document.getElementById('visor').innerHTML = '';
}

function deletar() {
    var deletar = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = deletar.substring(0, deletar.length -1)
}

/*Função criada para mostrar a resposta ao usuário */
function calcular() {
    var resultado = document.getElementById('visor').innerHTML;

    if(resultado){
        document.getElementById('visor').innerHTML = eval(resultado) /*Função eval() me poupou todo o trabalho de lógica para as operações, pois ele já executa os cálculos naturalmente*/
    }
}
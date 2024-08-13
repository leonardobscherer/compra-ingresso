
function comprar() {
    var tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    var qtdIngressosComprados = document.getElementById('qtd').value;
    var qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    var qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    var qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    var resultado


    if (qtdIngressosComprados < 0) {
        alert('Digite um numero POSITIVO');
        document.getElementById('qtd').value = null
    } else {
        if (tipoDeIngresso == 'inferior') {
            resultado = qtdInferior - qtdIngressosComprados;
            if (resultado < 0) {
                qtdIndisponivel();
            } else {
                document.getElementById('qtd-inferior').textContent = resultado;
                document.getElementById('qtd').value = null
            }


        } else if (tipoDeIngresso == 'superior') {
            resultado = qtdSuperior - qtdIngressosComprados;
            if (resultado < 0) {
                qtdIndisponivel();
            } else {
                document.getElementById('qtd-superior').textContent = resultado;
                document.getElementById('qtd').value = null
            }
        } else {

            resultado = qtdPista - qtdIngressosComprados;
            if (resultado < 0) {
                qtdIndisponivel();
            } else {
                document.getElementById('qtd-pista').textContent = resultado;
                document.getElementById('qtd').value = null
            }
        }
    }




}

function qtdIndisponivel() {
    alert('Quantidade indisponível');
    document.getElementById('qtd').value = null
}



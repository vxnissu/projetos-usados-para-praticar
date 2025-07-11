function comprar() {
    //Adicionando funcionalidade ao botão "comprar" e recuperando valores
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if(ingresso == 'Pista') {
        comprarPista(quantidade);
    }
    else if(ingresso == 'Cadeira superior') {
        comprarSuperior(quantidade)
    }
    else {
        comprarInferior(quantidade)
    }
//Recuperando quantidade de ingressos "Pista"
function comprarPista(quantidade) {
    let pista = parseInt(document.getElementById('qtd-pista').textContent);
    //Descontando quantidade de ingresso "Pista" conforme vão comprando
    if(quantidade <= pista) {
        pista = pista - quantidade;
        document.getElementById('qtd-pista').textContent = pista
        alert('Compra realizada com sucesso!')
    } else {
        alert('Quantidade indisponível para pista.')
    }   
}
//Recuperando quantidade de ingressos "Cadeira Superior"
function comprarSuperior(quantidade) {
    let superior = parseInt(document.getElementById('qtd-superior').textContent);
    //Descontando quantidade de ingresso "Cadeira Superior" conforme vão comprando
    if(quantidade <= superior) {
        superior = superior - quantidade;
        document.getElementById('qtd-superior').textContent = superior
        alert('Compra realizada com sucesso!')
    } else {
        alert('Quantidade indisponível para Cadeira Superior.')
    }
}
//Recuperando quantidade de ingressos "Cadeira Inferior"
function comprarInferior(quantidade) {
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);
    //Descontando quantidade de ingresso "Cadeira Inferior" conforme vão comprando
    if(quantidade <= inferior) {
        inferior = inferior - quantidade;
        document.getElementById('qtd-inferior').textContent = inferior
        alert('Compra realizada com sucesso!')
    } else {
        alert('Quantidade indisponível para Cadeira inferior.')
    }
}
}
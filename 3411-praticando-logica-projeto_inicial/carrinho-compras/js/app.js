let totalGeral = 0;
limpar();
function adicionar() {
    //Recuperando valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //Calcular o preço, o nosso subtotal por produto
    let preco = quantidade * valorUnitario;
    //Adicionar produto no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
    //Atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';
}
function limpar() {
       document.getElementById('lista-produtos').innerHTML = '';
       document.getElementById('valor-total').textContent = 'R$ 0';
       document.getElementById('quantidade').value = '';
}
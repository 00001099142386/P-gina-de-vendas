let carrinho = [];
let quantidadeItens = 0;
let favoritos = [];

// Atualizar carrinho
function atualizarCarrinho() {
    document.getElementById("quantidadeItens").innerText = quantidadeItens;
}

// Comprar Agora
document.querySelectorAll('.comprarAgora').forEach(button => {
    button.addEventListener('click', function () {
        const produto = this.closest('.produto');
        const nome = produto.getAttribute('data-nome');
        const preco = parseFloat(produto.getAttribute('data-preco'));
        alert(`Você comprou ${nome} por R$${preco.toFixed(2)}!`);
    });
});

// Adicionar ao carrinho
document.querySelectorAll('.adicionarCarrinho').forEach(button => {
    button.addEventListener('click', function () {
        const produto = this.closest('.produto');
        const nome = produto.getAttribute('data-nome');
        const preco = parseFloat(produto.getAttribute('data-preco'));

        const itemExistente = carrinho.find(item => item.nome === nome);
        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.push({ nome, preco, quantidade: 1 });
        }

        quantidadeItens++;
        atualizarCarrinho();
    });
});

// Comprar Agora com redirecionamento
document.querySelectorAll('.comprarAgora').forEach(button => {
    button.addEventListener('click', function () {
        const produto = this.closest('.produto');
        const categoria = produto.getAttribute('data-categoria');
        
        // Redirecionar para a página correspondente
        const url = `https://www.seusite.com/${categoria}`;
        window.location.href = url;
    });
});


// Função para pesquisar produtos
document.getElementById('pesquisa').addEventListener('input', function() {
    const termoPesquisa = this.value.toLowerCase();
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        const nomeProduto = produto.getAttribute('data-nome').toLowerCase();
        if (nomeProduto.includes(termoPesquisa)) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
});
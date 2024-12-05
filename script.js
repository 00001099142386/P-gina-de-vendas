script.js:

let carrinho = [];
let quantidadeItens = 0;
let favoritos = [];

// Atualizar carrinho
function atualizarCarrinho() {
    document.getElementById("quantidadeItens").innerText = quantidadeItens;
}

// Adicionar aos favoritos
document.querySelectorAll('.favoritar').forEach(button => {
    button.addEventListener('click', function () {
        const produto = this.closest('.produto');
        const nome = produto.getAttribute('data-nome');
        const preco = parseFloat(produto.getAttribute('data-preco'));

        if (!favoritos.some(item => item.nome === nome)) {
            favoritos.push({ nome, preco });
            atualizarListaFavoritos();
        }
    });
});
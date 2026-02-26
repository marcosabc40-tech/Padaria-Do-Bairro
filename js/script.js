// ===============================
// INFORMAÇÕES DA PADARIA
// ===============================

const nomePadaria = "Padaria do Bairro";
const enderecoDaPadaria = "Jerônimo de Ornelas, 14, Bairro Santana";
const numeroDaPadaria = "(11) 1234-5678";

// ===============================
// PRODUTOS (OBJETOS)
// ===============================

const produtos = [
    { nome: "Bolo de Chocolate", preco: 25.00, estoque: 30 },
    { nome: "Pão Francês", preco: 0.50, estoque: 100 },
    { nome: "Croissant", preco: 12.00, estoque: 50 },
    { nome: "Café Passado", preco: 7.50, estoque: 50 }
];

// ===============================
// FUNÇÕES DE NEGÓCIO
// ===============================

function saudacao() {
    const horaAtual = new Date().getHours();

    if (horaAtual < 12) return "Bom dia";
    if (horaAtual < 18) return "Boa tarde";
    return "Boa noite";
}

function calcularTaxaEntrega(distancia) {
    if (distancia <= 5) return 0;
    if (distancia <= 10) return 5.00;
    return 15.00;
}

function calcularSubTotal(preco, quantidade) {
    return preco * quantidade;
}

function calcularDesconto(subTotal, percentualDesconto) {
    return subTotal * (percentualDesconto / 100);
}

// ===============================
// EXECUÇÃO APÓS CARREGAR PÁGINA
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // Saudação
    const elementoSaudacao = document.getElementById("saudacao");
    if (elementoSaudacao) {
        elementoSaudacao.textContent =
            `${saudacao()}, seja bem-vindo à ${nomePadaria}!`;
    }

    // Teste subtotal
    const subTotal = calcularSubTotal(25.00, 5);
    console.log("Subtotal: R$ " + subTotal.toFixed(2));

    // ===============================
    // BUSCA DE PRODUTOS
    // ===============================

    const inputBusca = document.getElementById("inputBusca");
// Usamos o ID "Lista" que está no seu HTML
const tabela = document.getElementById("Lista"); 

if (inputBusca && tabela) {
    inputBusca.addEventListener("input", function () {
        const filtro = inputBusca.value.toLowerCase().trim();
        const linhas = tabela.querySelectorAll("tbody tr");
        let encontrou = false;

        linhas.forEach(linha => {
            // Buscamos apenas nas células de Categoria e Produto (índices 0 e 1)
            // para evitar que o preço ou a descrição interfiram na busca
            const categoria = linha.cells[0].textContent.toLowerCase();
            const produto = linha.cells[1].textContent.toLowerCase();

            if (categoria.includes(filtro) || produto.includes(filtro)) {
                linha.style.display = "";
                encontrou = true;
            } else {
                linha.style.display = "none";
            }
        });

        gerenciarMensagemErro(encontrou);
    });
}

function gerenciarMensagemErro(encontrou) {
    let mensagem = document.getElementById("semResultado");
    const container = document.querySelector(".busca-container");

    if (!encontrou) {
        if (!mensagem) {
            mensagem = document.createElement("p");
            mensagem.id = "semResultado";
            mensagem.innerHTML = "<strong>❌ Produto não encontrado.</strong>";
            mensagem.style.color = "var(--cor--destaque)"; // Usando sua variável de cor
            mensagem.style.marginTop = "15px";
            mensagem.style.fontWeight = "bold";
            container.appendChild(mensagem);
        }
    } else if (mensagem) {
        mensagem.remove();
    }
}

});
// ===============================
// CARRINHO
// ===============================

let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {

    carrinho.push({ nome, preco });
    total += preco;

    atualizarCarrinho();
}

function atualizarCarrinho() {

    const lista = document.getElementById("listaCarrinho");
    const totalElemento = document.getElementById("totalCarrinho");

    lista.innerHTML = "";

    carrinho.forEach((item, index) => {

        const li = document.createElement("li");
        li.innerHTML = `
            ${item.nome} - R$ ${item.preco.toFixed(2)}
            <button onclick="removerItem(${index})">❌</button>
        `;

        lista.appendChild(li);
    });

    totalElemento.textContent = total.toFixed(2);
}

function removerItem(index) {

    total -= carrinho[index].preco;
    carrinho.splice(index, 1);

    atualizarCarrinho();
}

function limparCarrinho() {
    carrinho = [];
    total = 0;
    atualizarCarrinho();
}

// ===============================
// ENVIAR PARA WHATSAPP
// ===============================

function enviarWhatsApp() {

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let mensagem = "🛒 Pedido - Padaria do Bairro\n\n";

    carrinho.forEach(item => {
        mensagem += `- ${item.nome} | R$ ${item.preco.toFixed(2)}\n`;
    });

    mensagem += `\nTotal: R$ ${total.toFixed(2)}`;

    const numero = "5551999999999"; // coloque seu número real
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}
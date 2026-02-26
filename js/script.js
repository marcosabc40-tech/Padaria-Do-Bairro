// ===============================
// INFORMAÇÕES DA PADARIA
// ===============================

let nomePadaria = "Padaria do Bairro";
let enderecoDaPadaria = "Jerônimo de Ornelas, 14, Bairro Santana";
let numeroDaPadaria = "(11) 1234-5678";

// ===============================
// PRODUTOS (OBJETOS)
// ===============================

let boloDeChocolate = {
    nome: "Bolo de Chocolate",
    preco: 25.00,
    estoque: 30
};

let paoFrances = {
    nome: "Pão Francês",
    preco: 0.50,
    estoque: 100
};

let croissant = {
    nome: "Croissant",
    preco: 12.00,
    estoque: 50
};

let cafePassado = {
    nome: "Café Passado",
    preco: 7.50,
    estoque: 50
};

// ===============================
// FUNÇÃO DE SAUDAÇÃO
// ===============================

function saudacao() {
    const horaAtual = new Date().getHours();

    if (horaAtual < 12) {
        return "Bom dia";
    } else if (horaAtual < 18) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
}

document.getElementById("saudacao").textContent =
    saudacao() + ", seja bem-vindo à " + nomePadaria + "!";

// ===============================
// TAXA DE ENTREGA
// ===============================

function calcularTaxaEntrega(distancia) {
    if (distancia <= 5) {
        return 0;
    } else if (distancia <= 10) {
        return 5.00;
    } else {
        return 15.00;
    }
}

console.log("Taxa de entrega: R$ " + calcularTaxaEntrega(20));

// ===============================
// CÁLCULO DE SUBTOTAL
// ===============================

function calcularSubTotal(preco, quantidade) {
    return preco * quantidade;
}

let precoProduto = 25.00;
let quantidade = 5;
let subTotal = calcularSubTotal(precoProduto, quantidade);

console.log("Subtotal: R$ " + subTotal(5));

function calcularDesconto(subTotal, percentualDesconto){
    return subTotal * (percentualDesconto / 100);
}
let percentualDesconto = 10;
// arrow function ( ) => {}
const calcularPrecos = ( preco, produto) => preco * produto;
document.addEventListener("DOMContentLoaded", function () {

    const inputBusca = document.getElementById("inputBusca");
    const linhas = document.querySelectorAll("#tabelaProdutos tbody tr");

    inputBusca.addEventListener("input", function () {

        const filtro = inputBusca.value.toLowerCase().trim();
        let encontrou = false;

        linhas.forEach(linha => {

            const categoria = linha.cells[0].textContent.toLowerCase();
            const produto = linha.cells[1].textContent.toLowerCase();
            const descricao = linha.cells[2].textContent.toLowerCase();

            if (
                categoria.includes(filtro) ||
                produto.includes(filtro) ||
                descricao.includes(filtro)
            ) {
                linha.style.display = "";
                encontrou = true;
            } else {
                linha.style.display = "none";
            }

        });

        mostrarMensagem(encontrou);

    });

    function mostrarMensagem(encontrou) {

        let mensagem = document.getElementById("semResultado");

        if (!encontrou) {
            if (!mensagem) {
                mensagem = document.createElement("p");
                mensagem.id = "semResultado";
                mensagem.textContent = "❌ Produto não encontrado.";
                mensagem.style.color = "red";
                mensagem.style.marginTop = "10px";
                document.querySelector(".busca-container").appendChild(mensagem);
            }
        } else {
            if (mensagem) {
                mensagem.remove();
            }
        }

    }

});
// informações da padaria

// escreva 3 variáveis contendo nome, endereco e telefone
let nomePadaria = "Padaria do Bairro";
let enderecoDaPadaria = "Jeronimo de Ornelas, 14, Bairro Santana";
let numeroDaPadaria = " (11) 1234-5678";

// escreva 3 variaveis com preços dos produtos
let boloDeChocolate = 25.00;
let paoFrances = 0.50;
let croissant = 12.00;
let pastelDeQueijo = 10.00;
let cafeComLeite = 7.00;
let cafePassado = 7.50;

// escreva 3 variaveis do controle do estoque
let estoqueDePao = 100;
let estoqueBoloChocolate = 30;
let estoqueCroissant = 50;
let estoquePastelQueijo = 25;


const produtos = {
    nome: "Café Passado",
    preco: "$" + 7.50,
    categoria: "Bebida",
    estoque: 50
}
boloDeChocolate ={
    nome: "Bolo De Chocolate",
    preco: 25.00,
    estoque: 20
}
croissant = {
    nome: "Croinssant",
    preco: 10.00,
    estoque: 25
}
paoFrances = {
    nome: "Pão Francês",
    preco: 0.50,
    estoque: 100
}


function saudacao(hora){
    const horaAtual = new Date().getHours();
if (hora < -12){
    alert("Bom dia")
}else if(hora <=18){
    alert("Boa tarde")
    }else {
        alert("Boa noite")
    }
}
document.getElementById("saudacao").textContent = saudacao + ", seja bem-vindo à Padaria do Bairro!";
saudacao();



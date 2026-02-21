# Instruções para Agentes IA - Padaria do Bairro

## Visão Geral
Este é um projeto educacional de um website estático para uma padaria. A estrutura segue um modelo simples de HTML5 com organização modular de CSS e JavaScript (ainda não implementados).

## Arquitetura do Projeto

### Estrutura de Diretórios
```
.
├── index.html          # Página principal (única página do site)
├── CSS/                # Diretório para folhas de estilo (vazio)
├── js/                 # Diretório para scripts JavaScript (vazio)
├── Images/             # Recursos de imagem
│   ├── Ambiente/       # Fotos do ambiente da padaria
│   ├── Logo/           # Logo da padaria
│   └── Produtos/       # Fotos dos produtos
├── Videos/             # Diretório para vídeos
└── README.txt          # Documentação (atualmente vazio)
```

### Componentes Principais
- **index.html**: Página única que contém toda a apresentação da padaria, estruturada em seções semânticas (header, main, footer)
- **Dados de Produtos**: Lista de 10 produtos em tabela HTML com categoria, nome, descrição e preço em reais
- **Horários de Funcionamento**: Tabela com horários de segunda a domingo
- **Mapa Integrado**: Google Maps embarcado mostrando localização (Jeronimo de Ornelas, 14, Bairro Santana)

## Padrões e Convenções

### HTML
- Usa `lang="pt-BR"` e charset UTF-8 para português brasileiro
- Estrutura semântica com `<header>`, `<main>`, `<footer>` e `<section>`
- Tabelas para dados estruturados (produtos, horários)
- Imagens com caminho absoluto (ponto de refatoração em potencial)

### Dados de Domínio
- **Categorias de Produtos**: Pães, Bolos, Doces
- **Faixa de Preço**: R$ 0,50 a R$ 25,00
- **Horário Padrão**: Abre 06:00-20:00 (seg-sex), 07:00-18:00 (sab), 08:00-14:00 (dom)

## Fluxos de Desenvolvimento Comuns

### Adicionar Novos Produtos
1. Adicione `<tr>` à tabela de produtos em `index.html`
2. Siga o padrão: `<td>Categoria</td>`, `<td>Nome</td>`, `<td>Descrição</td>`, `<td>Preço</td>`
3. Se houver imagem, adicione arquivo em `Images/Produtos/`

### Estilizar o Site
1. Crie ou edite arquivo CSS em `CSS/` (ex: `style.css`)
2. Referencie em `<head>` do `index.html`: `<link rel="stylesheet" href="CSS/style.css">`

### Adicionar Funcionalidades Interativas
1. Crie arquivo JavaScript em `js/` (ex: `functions.js`)
2. Referencie antes do `</body>`: `<script src="js/functions.js"></script>`

## Pontos de Atenção
- **Caminhos de Imagem**: Atualmente usa caminho absoluto do desenvolvedor - refatorar para URLs relativas
- **Sem Dependências Externas**: Projeto puro HTML/CSS/JS (sem frameworks)
- **Localização Fixa**: Google Maps fixo - considerar interatividade futura

## Próximos Passos Sugeridos
- Implementar CSS responsivo em `CSS/style.css`
- Validar HTML5 e acessibilidade
- Refatorar caminhos de imagem para URLs relativas
- Adicionar interatividade com JavaScript (filtros de produtos, validação de contato, etc.)

# Documentação não oficial 🌐

apenas para saber o que está sendo implementado 😊
⚠️ mais detalhado que o commit ⚠️

quem for dando commit, por favor completar esse read.me para ficar mais fácil estruturar a documentação final (evite descrever no commit, como tá fazendo esse relatorio, so coloca uma identificação e colocar ela aqui e ai sim escrever o commit, vai ficar mais organizado)

🌀 COMMIT 2 - EDGAR

📌 Objetivo

este commit visa a criação do primeiro módulo reutilizável dentro do framework, chamado catalog-module. Esse módulo será responsável por fornecer os dados de produtos para as lojas de e-commerce (como a store-ropa). Ele é essencial porque forma a base da estrutura do framework, permitindo que, no futuro, você adicione mais funcionalidades (como carrinho, pagamento, etc.) sem precisar reescrever o código.

A ideia é que o catalog-module possa ser utilizado por qualquer aplicação de loja (no monorepo) de forma independente, através da reutilização de código. Quando o framework estiver mais completo, o módulo será estendido para incluir funcionalidades como filtragem de produtos, categorias, e até integração com APIs de produtos reais.

O catalog-module está sendo criado dentro da pasta packages/, que será responsável por abrigar todos os módulos reutilizáveis do framework.

🛠 Como o catalog-module Funciona
Armazenamento dos Dados:

O arquivo products.ts define um tipo de dados Product, que é uma estrutura que contém informações como id, name, description, price, e imageUrl.

Também cria um array de objetos products que simula um catálogo de produtos. Esses dados podem ser facilmente expandidos para usar dados reais no futuro (via API, banco de dados, etc.).

Exportação dos Dados:

O módulo exporta o tipo Product e o array de produtos. Isso permite que outras partes do sistema (como a loja store-ropa) importem esses dados de maneira simples, como um pacote reutilizável.

Reutilização e Escalabilidade:

Uma vez criado o módulo catalog-module, qualquer aplicação dentro do monorepo (como a store-ropa) pode consumir esses produtos, simplesmente importando o módulo.

Isso torna o framework modular, permitindo que você adicione mais funcionalidades em módulos separados, sem afetar o resto do sistema.

🧠 Explicação de Como Este Passo Contribui para o Framework Completo
O catalog-module é o primeiro passo para a construção de um framework modular. A ideia principal por trás disso é permitir que diferentes módulos (como catálogo de produtos, carrinho de compras, sistema de pagamento, etc.) possam ser desenvolvidos independentemente, e, então, integrados facilmente nas aplicações de loja.

Aqui está como ele se encaixa na visão do framework:

Modularização:

Cada componente do sistema (catalog, carrinho, pagamento, etc.) será desenvolvido como um módulo independente dentro da pasta packages/.

O catalog-module já é um exemplo disso: ele contém tudo o que é necessário para gerenciar os produtos, e pode ser reutilizado em qualquer loja que utilize o framework.

Futuras Extensões:

À medida que o framework cresce, módulos como o catalog-module podem ser facilmente estendidos. Por exemplo, ao invés de usar produtos mockados, você pode integrar esse módulo com uma API de produtos reais, um banco de dados, ou até uma plataforma externa de gerenciamento de inventário.

Isolamento de Funcionalidades:

Cada módulo pode ser desenvolvido, testado e mantido de forma isolada. Isso ajuda na organização do código, reduz a complexidade e melhora a escalabilidade do framework.

Reutilização:

Aplicações como store-ropa (e futuras lojas que usarem o framework) não precisam se preocupar com a implementação dos produtos. Elas simplesmente importam o módulo e utilizam os dados fornecidos, tornando o desenvolvimento de novas lojas rápido e sem duplicação de código.

🌀 COMMIT 1 - EDGAR

📌 Objetivo
Estabelecer a estrutura base do projeto Framework de E-commerce, usando um monorepo com suporte a múltiplas aplicações de loja. Nesta modificação, criei a loja inicial chamada store-ropa com o:

Next.js com App Router (Base para criar o framework) 

TypeScript

Tailwind CSS (estilização pré-montada) 

Estrutura com import alias (@/)

Organizado em monorepo (apps/, packages/)


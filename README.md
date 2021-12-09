<h1 align="center">
     🥘 <a href="#" alt="Food Camp api"> Food Camp </a>
</h1>

<h3 align="center">
  Cadastre seu cardapio e o acesso sempre que quiser
</h3>

<h4 align="center">
	🚧   Concluído 🚀 🚧
</h4>

# Tabela de conteúdos

<!--ts-->

- [Tabela de conteúdos](#tabela-de-conteúdos)
  - [💻 Sobre o projeto](#-sobre-o-projeto)
  - [⚙️ Funcionalidades](#️-funcionalidades)
  - [End-Point de acesso](#end-point-de-acesso)
  - [🚀 Como executar o projeto Localmente](#-como-executar-o-projeto-localmente)
    - [Pré-requisitos](#pré-requisitos)
      - [🎲 Rodando o Backend (servidor)](#-rodando-o-backend-servidor)
  - [🛠 Tecnologias](#-tecnologias)
      - [**Server** (NodeJS)](#server-nodejs)
  - [## End Points](#-end-points)
    - [➡️ **GET** para a rota **/is-live**](#️-get-para-a-rota-is-live)
    - [➡️ **GET** para a rota **/:restaurantUrl**](#️-get-para-a-rota-restauranturl)
    - [➡️ **POST** para a rota **/sign-up**](#️-post-para-a-rota-sign-up)
    - [➡️ **POST** para a rota **/sign-in**](#️-post-para-a-rota-sign-in)
    - [/owner-auth/:restaurant](#owner-authrestaurant)
      - [GET para o rota <strong>/owner-auth/:restaurant</strong>](#get-para-o-rota-owner-authrestaurant)
      - [Respostas](#respostas)
        - [200](#200)
        - [401](#401)
    - [/:restaurant/categorie](#restaurantcategorie)
      - [POST para a rota /:restaurant/categorie](#post-para-a-rota-restaurantcategorie)
      - [Respostas](#respostas-1)
    - [status code 201](#status-code-201)
      - [POST para a rota /:restaurant/menu-item](#post-para-a-rota-restaurantmenu-item)
      - [Respostas](#respostas-2)
    - [status code 201](#status-code-201-1)
    - [➡️ **GET** para a rota **/recommendations/random**](#️-get-para-a-rota-recommendationsrandom)
    - [➡️ **GET** para a rota **/recommendations/top/:amount**](#️-get-para-a-rota-recommendationstopamount)
    - [➡️ **POST** para a rota **/recommendations**](#️-post-para-a-rota-recommendations)
    - [➡️ **POST** para a rota **/recommendations/:id/:voteType**](#️-post-para-a-rota-recommendationsidvotetype)
  - [🦸 Autor](#-autor)
<!--te-->

## 💻 Sobre o projeto
🥘 O foodcamp é um projeto de web app para cardapios de restaurantes, o back-end do mesmo cnosiste em um local para armazenar esses cardapios e o usuário poder acessar através de um client de web app, o proprietário do restaurante possa cadastrar mais itens e mais categorias de produtos em seu cardapio, como também alterar o preço de produtos

## ⚙️ Funcionalidades

- [x] Cadastrar um restaurante
  - [x] Cadastrar itens no cardapio
  - [x] Editar os preços, imagens e descrições dos itens do cardápio 

- [x] Visualizar os caedápios dos restaurante cadastrados

## End-Point de acesso

<a href='https://food-camp-cardapio.herokuapp.com/'>https://food-camp-cardapio.herokuapp.com/</a>

Para checar se a api está no ar, faça uma requisição para a <strong><a href='https://food-camp-cardapio.herokuapp.com/is-live'>rota /is-live</strong></a>

---

## 🚀 Como executar o projeto Localmente

|Este projeto conta apenas com o back-end da api


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/camilocoelhogomes/projeto_08_food_camp_back_end.git

# Acesse a pasta do projeto no terminal/cmd
$ cd projeto_08_food_camp_back_end

# Instale as dependências
$ npm install

# crie o banco de dados a partir do arquivo dbConfig.sql e coloque as variavies de ambiente conforme o .env.example e crie um arquivo .env.dev baseado nele

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O server iniciará na porta configurada em sua variavel de ambiente do .env.test
```

---


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server** ([NodeJS](https://nodejs.org/en/))
- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[Postgress](https://github.com/postgres/postgres)**
- **[dotENV](https://github.com/motdotla/dotenv)**
- **[Joi](https://github.com/hapijs/joi)**
- **[Jest](https://github.com/facebook/jest)**

> Veja o arquivo [package.json](https://github.com/camilocoelhogomes/projeto_08_food_camp_back_end/blob/main/package.json)

---

## End Points
---
### ➡️ **GET** para a rota **/is-live**

<h3>Retornors</h3>
 
 - **200:** Com a mensagem ok, caso o servidor esteja no ar

---

### ➡️ **GET** para a rota **/:restaurantUrl** 

<h3>Retornors</h3>

 - **200:** Caso encontre um restuarnte cadastrado nessa url, deverá retornar o seguinte objeto
  
```Json
{
  "restaurantName": "Exemplo 01",
  "restaurantUrlName": "exemplo01" ,
  "restaurantWppNumber": "99999999999",
  "restaurantImg": "https://restaurantimg.jpg",
  "categories": [
    {
      "categorieId":1 ,
      "categorieName": "Pizza" ,
      "categorieItens": [
        {
          "productId": 1,
          "productImg": "https://productimg.jpg",
          "productName": "Pizza de calabresa",
          "productPrice": 50.50,
          "productDescription": "Descrição da pizza",
          "productNumber": 1,
        },
        .
        .
        .
      ]
    },
    .
    .
    .
```

- **404:** Caso não encontre nenhum restaurante
- **500:** erro interno do servidor

### ➡️ **POST** para a rota **/sign-up** 

Para cadastrar um restaurante deve-se enviar para a rota **/sign-up** um arquivo com o seguinte formato

```Json
{
  "restaurantName": "Nome do restaurante, deve ser uma string",
  "restaurantEmail": "E-mail de contato do restaurante",
  "restaurantPassword": "Senha, deve possuir letras maiuscula e minusculas, números e um caractere especial",
  "restaurantConfirmPassword": "Deve ser igual ao campo de senha",
  "restaurantWppNumber": "O número de whatsapp do restaurante",
  "restaurantImg": "O url de uma imagem de perfil do restaurante",
  "restaurantUrlName": "nome de url do restaurante"
}
```

<h3>Retornos</h3>

 - **201** quando criado um restaurante com sucesso
 - **409** quando houver algum conflito com o banco de dados
 - **500** erro interno do servidor




### ➡️ **POST** para a rota **/sign-in** 

Deve ser enviado um Json para o rota <strong>/sign-in</strong> com o seguinte formato:

```Json
{
  "restaurantEmail": "E-mail de contato do restaurante cadastrado",
  "restaurantPassword": "Senha correta do restaurante"
}
```

<h3>Retornos</h3>

 - **200:** Quando logado com sucesso

```Json
{
  "url": "url para a busca do restaurante",
  "userToken": "token de validação do restaurante"
}
```

- **401:** Quando e-mail ou senha não conferirem

- **500:** Demais erros não mapeados


### /owner-auth/:restaurant

#### GET para o rota <strong>/owner-auth/:restaurant</strong>

Para autenticar um dono de restaurante, deve ser enviado um Bearer token, com o token recebido quando o dono do restaurante fez o login, junto com a url do restaurante que ele pretende acessar nos parametros da requisição.

A autenticação dessa rota é a mesma para quando for editar e inserir itens no cardapio

#### Respostas

##### 200

Caso o acesso seja validado

##### 401

Quando o acesso não for validado

### /:restaurant/categorie

#### POST para a rota /:restaurant/categorie

Para criar uma nova categoria deve-se enviar uma requisição do tipo post para o rota a cima, contendo um Bearer token de identificação do proprietário do restaurant.

#### Respostas

### status code 201

Quando criado com sucesso deverá receber um novo objeto de restaurant no formato o mesmo objeto retornado quando das informçaões de quando efetua um get para a rota do <stong>/restuarantUrl</strong> com os dados atualizado

#### POST para a rota /:restaurant/menu-item

Para criar uma nova categoria deve-se enviar uma requisição do tipo post para o rota a cima, contendo um Bearer token de identificação do proprietário do restaurant.

#### Respostas

### status code 201

Quando criado com sucesso deverá receber um novo objeto de restaurant no formato o mesmo objeto retornado quando das informçaões de quando efetua um get para a rota do <stong>/restuarantUrl</strong> com os dados atualizado



### ➡️ **GET** para a rota **/recommendations/random**

Retorna uma recomendação de Música aleatória no formato

```Json
{
  "id": 1,
  "name": "Alexandre Pires - Pot-Pourri: Samba Diferente/ Dança da Vassoura",
  "youtubeLink": "https://www.youtube.com/watch?v=RE0_a03BXRI&ab_channel=AlexandrePires",
  "score": 245
},
```

### ➡️ **GET** para a rota **/recommendations/top/:amount**

Retorna uma quantidade de recomendações igual ao valor de amount passado, o valor de amount deve ser um número
```Json
[
{
  "id": 1,
  "name": "Alexandre Pires - Pot-Pourri: Samba Diferente/ Dança da Vassoura",
  "youtubeLink": "https://www.youtube.com/watch?v=RE0_a03BXRI&ab_channel=AlexandrePires",
  "score": 245
},
{
  "id": 2,
  "name": "Só Pra Contrariar - Você Virou Saudade (Ao Vivo)",
  "youtubeLink": "https://www.youtube.com/watch?v=JLs7pW9fUZo&ab_channel=SoPraContrariarVEVO",
  "score": 243
},
. . .
]
```

### ➡️ **POST** para a rota **/recommendations**

Envie um objejo com o formato abaixo para esse end poit para criar uma recomendação

```Json
{
  "name": "Alexandre Pires - Pot-Pourri: Samba Diferente/ Dança da Vassoura",
  "youtubeLink": "https://www.youtube.com/watch?v=RE0_a03BXRI&ab_channel=AlexandrePires"
},
```

### ➡️ **POST** para a rota **/recommendations/:id/:voteType**

Deve ser passado na query da recomendação o id da recomendação.

- [x] id = id de uma música
- [x] voteType = "upvote" para adicionar 1 || "downvote" para remover 1

---
## 🦸 Autor

<a href="https://blog.rocketseat.com.br/author/thiago/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/43358210?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Camilo Coelho Gomes</b></sub></a> 
 <br />

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/camilocoelhogomes/)
[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/camilocoelhogomes/)

Feito com ❤️ por Camilo Coelho [Entre em contato!](https://www.linkedin.com/in/camilocoelhogomes/)

---

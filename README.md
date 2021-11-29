# projeto_08_food_camp_back_end

## Sobre

O foodcamp é um projeto de web app para cardapios de restaurantes, o back-end do mesmo cnosiste em um local para armazenar esses cardapios e o usuário poder acessar através de um client de web app, o proprietário do restaurante possa cadastrar mais itens e mais categorias de produtos em seu cardapio, como também alterar o preço de produtos

## Rotas

### /:restaurantUrl

#### GET

Quando efetuado um get para a rota <strong>/:restaurantUrl</strong> pode-se esperar duas possíveis respostas

#### Respostas

##### 200

A requisição ocorreu tudo bem e um objeto no formato

```
{
  restaurantName: ,
  restaurantUrlName: ,
  restaurantWppNumber: ,
  restaurantImg: ,
  categories: [
    {
      categorieId: ,
      categorieName: ,
      categorieItens: [
        {
          productId: ,
          productImg: ,
          productName: ,
          productPrice: ,
          productDescription: ,
          productNumber: ,
        },
        .
        .
        .
      ]
    },
    .
    .
    .
  ]
}

```

### /sign-up

#### POST para o rota <strong>/sign-up</strong>

Deve ser enviado um Json para o rota <strong>/sign-up</strong> com o seguinte formato:

```
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

#### Respostas

##### 201

Qundo criado com sucesso restornará status conde 201

##### 409

Os campos <strong>restaurantEmail</strong> e <strong>restaurantUrlName</strong> devem ser úicos, então possíveis conflitos retornam 409

##### 500

Demais erros não mapeados

### /sign-in

#### POST para o rota <strong>/sign-up</strong>

Deve ser enviado um Json para o rota <strong>/sign-in</strong> com o seguinte formato:

```
{
  "restaurantEmail": "E-mail de contato do restaurante cadastrado",
  "restaurantPassword": "Senha correta do restaurante"
}
```

#### Respostas

##### 200

Caso seja efetuado o login com com sucesso será retornado um objeto no formato:

```
{
  "url": "url para a busca do restaurante",
  "userToken": "token de validação do restaurante"
}
```

##### 401

Qualquer erro de conflito e inexistencia de e-mail retorna 401

##### 500

Demais erros não mapeados

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

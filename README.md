# projeto_08_food_camp_back_end

## Sobre

O foodcamp é um projeto de web app para cardapios de restaurantes, o back-end do mesmo cnosiste em um local para armazenar esses cardapios e o usuário poder acessar através de um client de web app, o proprietário do restaurante possa cadastrar mais itens e mais categorias de produtos em seu cardapio, como também alterar o preço de produtos

## Rotas

### /sign-up

#### POST para o rota <strong>/sign-up</strong>

Deve ser enviado um Json para o rota <strong>/sign-up</strong> com o seguinte formato:

{
<br><strong>"restaurantName</strong>": "Nome do restaurante, deve ser uma string",
<br><strong>"restaurantEmail</strong>": "E-mail de contato do restaurante",
<br><strong>"restaurantPassword</strong>": "Senha, deve possuir letras maiuscula e minusculas, números e um caractere especial",
<br><strong>"restaurantConfirmPassword</strong>": "Deve ser igual ao campo de senha",
<br><strong>"restaurantWppNumber</strong>": "O número de whatsapp do restaurante",
<br><strong>"restaurantImg</strong>": "O url de uma imagem de perfil do restaurante",
<br><strong>"restaurantUrlName</strong>": "nome de url do restaurante",
<br>}

#### Respostas

##### 201

Qundo criado com sucesso restornará status conde 201

##### 409

Os campos <strong>restaurantEmail</strong> e <strong>restaurantUrlName</strong> devem ser úicos, então possíveis conflitos retornam 409

##### 500

Demais erros não mapeados

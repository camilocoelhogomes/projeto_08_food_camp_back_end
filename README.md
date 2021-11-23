# projeto_08_food_camp_back_end

## Sobre

  O foodcamp é um projeto de web app para cardapios de restaurantes, o back-end do mesmo cnosiste em um local para armazenar esses cardapios e o usuário poder acessar através de um client de web app, o proprietário do restaurante possa cadastrar mais itens e mais categorias de produtos em seu cardapio, como também alterar o preço de produtos
  
## Rotas

### /sign-up
#### POST para o rota <strong>/sign-up</strong>
  
  Deve ser enviado um Json para o rota <strong>/sign-up</strong> com o seguinte formato:
  
  { 
    <br>"restaurantName": "Nome do restaurante, deve ser uma string",
    <br>"restaurantEmail": 'E-mail de contato do restaurante',
    <br>"restaurantPassword": 'Senha, deve possuir letras maiuscula e minusculas, números e um caractere especial',
    <br>"restaurantConfirmPassword": 'Deve ser igual ao campo de senha',
    <br>"restaurantWppNumber": 'O número de whatsapp do restaurante',
    <br>"restaurantImg": 'O url de uma imagem de perfil do restaurante',
    <br>"restaurantUrlName": 'nome de url do restaurante',
  <br>}

# Pokédexjsc

https://pokedexjsc.netlify.app/

Projeto de pokédex simples, que consome a API do [Pokeapi](https://github.com/PokeAPI/pokeapi) para receber os dados do Pokémon. Este app utiliza HTML, CSS e Javascript.

Para o recurso de busca por aproximação dos nomes foi utilizado um JSON gerado pela API do [PoGo API](https://pogoapi.net/documentation/).

## Utilização:

A aplicação utiliza ES6 modules, então para evitar problemas de CORS, recomenda-se que rode a aplicação em um servidor local, como [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).


Basta digitar o ID ou o nome de um pokémon no campo de buscas e teclar `'Enter'` (ou clicar na Pokébola 😜) para buscar.
Os resultados são separados por páginas (no momento apenas 2), que podem ser navegadas utilizando os botões de Avançar e Recuar.

## Tecnologias utlizadas:
- Javascript
- Jest (para testes unitários e de coverage)

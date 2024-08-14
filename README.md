# Projeto: Carrinho de Compras

Este projeto é uma simples simulação de um carrinho de compras que permite adicionar, remover e manipular itens. O código exemplifica como gerenciar itens dentro de um carrinho de compras e calcular o valor total dos itens presentes.

## Estrutura do Projeto

O projeto é composto por arquivos e serviços que ajudam na manipulação do carrinho de compras:

- `itens.js`: Serviço responsável pela criação dos itens que serão adicionados ao carrinho.
- `cart.js`: Serviço que manipula o carrinho, permitindo adicionar, remover e calcular o valor total dos itens.

## Como o Projeto Funciona

1. O carrinho de compras (`cart`) é inicializado como um array vazio.
2. Dois itens (`intem1` e `intem2`) são criados usando a função `CreateItem` do serviço `itens.js`.
3. Os itens são adicionados ao carrinho utilizando a função `addItenCart` do serviço `cart.js`.
4. Há operações de adição e remoção de itens utilizando os métodos `addOneItem` e `removeOneItem`.
5. O carrinho é exibido e o valor total dos itens é calculado utilizando as funções `displayCart` e `valueTotalItens`.

## Exemplo de Uso

Aqui está um exemplo de como o código funciona:

```javascript
import CreateItem from "./services/itens.js";
import * as cartSev from "./services/cart.js";

const cart = [];

console.log("Bem vindo ao seu carrinho da shoppe !!!");

const intem1 = new CreateItem("Monitor", 700.00, 3);
const intem2 = new CreateItem("Mouse", 80.00, 2);

await cartSev.addItenCart(cart, intem1);
await cartSev.addItenCart(cart, intem2);

intem1.removeOneItem();
intem1.removeOneItem();
intem1.removeOneItem();
intem1.removeOneItem();
intem2.addOneItem();
intem2.addOneItem();
intem2.addOneItem();

// await cartSev.deleteItenCart(cart, intem1.name);

await cartSev.displayCart(cart);
await cartSev.valueTotalItens(cart);

console.log(cart);

// Exportando o Carrinho
export {cart};

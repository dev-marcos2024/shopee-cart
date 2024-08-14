import CreateItem  from "./services/itens.js";
import * as cartSev from "./services/cart.js";

const cart = [];

console.log("Bem vindo ao seu carinho da shoppe !!!");

const item1 = new CreateItem("Monitor", 700.00, 3);
const item2 = new CreateItem("Mouse", 80.00, 2);

await cartSev.addItemCart(cart, item1);
await cartSev.addItemCart(cart, item2);

item1.removeOneItem()
item1.removeOneItem()
item1.removeOneItem()
item1.removeOneItem()
item2.addOneItem()
item2.addOneItem()
item2.addOneItem()


//await cartSev.deleteItenCart(cart, item1.name);

await cartSev.displayCart(cart)
await cartSev.valueTotalItens(cart);
console.log(cart)

// Exportando o Carrinho
export {cart}


import CreateItem  from "./services/itens.js";
import * as cartSev from "./services/cart.js";

const cart = [];

console.log("Bem vindo ao seu carinho da shoppe !!!");

const intem1 = new CreateItem("Monitor", 700.00, 3);
const intem2 = new CreateItem("Mouse", 80.00, 2);

await cartSev.addItenCart(cart, intem1);
await cartSev.addItenCart(cart, intem2);

intem1.removeOneItem()
intem1.removeOneItem()
intem1.removeOneItem()
intem1.removeOneItem()
intem2.addOneItem()
intem2.addOneItem()
intem2.addOneItem()


//await cartSev.deleteItenCart(cart, intem1.name);

await cartSev.displayCart(cart)
await cartSev.valueTotalItens(cart);
console.log(cart)

// Exportando o Carrinho
export {cart}


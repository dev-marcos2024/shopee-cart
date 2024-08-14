//! Caso de uso 
// Adicionar item no carrinho
async function  addItemCart(userCart,iten) {
    userCart.push(iten);
}

// calcular total do carrinho
async function valueTotalItens(userCart) { 
    let result = userCart.reduce((total, item)=> total += item.subtotal, 0);
    console.log(`Valor total do seu carrinho ${result}`)
}

// Remover item do carrinho
async function  deleteItemCart(userCart, iten) {
    const index = userCart.findIndex((item)=> item.name === iten);

    if (index !== -1){
        userCart.splice(index, 1);
    }
}

// Imprimir carrinho 
async function displayCart(userCart){
    console.log("\nItens do Seu Carrinho")
    userCart.forEach( (item, index)=> {
        console.log(`${index +1}º ${item.name} - R$ ${item.price} | ${item.quantity} | ${item.subtotal}\n`)
    });
}

export {
    addItemCart,
    valueTotalItens,
    deleteItemCart,
    displayCart,

}
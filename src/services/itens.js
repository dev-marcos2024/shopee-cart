import { deleteItemCart } from "./cart.js";
import { cart } from "../index.js";

//! Caso de uso 
// criando um item
class CreateItem {
    constructor(name, price, quantity) {

        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    get subtotal () { 
        return this.price * this.quantity; 
    };

    addOneItem(){
        this.quantity ++
    }
    removeOneItem(){
        
        if (this.quantity > 1) {
            this.quantity --
        }else if(this.quantity = 1){
            deleteItemCart(cart, this.name);
        }
    }
};

export default CreateItem;

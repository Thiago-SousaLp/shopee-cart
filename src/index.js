import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Mercado Escuro");


const item1 = await createItem("Arara-azul-grande )", 10000.00, 1);
const item2 = await createItem("Tucano-toco ", 2500.00, 2);
const item3 = await createItem("Jaguatirica", 15000.00, 1);
const item4 = await createItem("Papagaio-verdadeiro ", 1800.00, 3);
const item5 = await createItem("Mico-leão-dourado ", 20000.00, 1);

// adicionando ao sistema
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);
await cartService.addItem(myCart, item5);

// simulação de remoção
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displaycart(myCart);

await cartService.calculateTotal(myCart);

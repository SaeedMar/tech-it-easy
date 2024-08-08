import {inventory} from "../constants/inventory.js";

export function originalStock () {
    let stockTV = 0;
    for (let i = 0; i < inventory.length; i++) {
        stockTV += inventory[i].originalStock;
}
    return stockTV;
}

console.log(originalStock());
import {inventory} from "../constants/inventory.js";

export function totalSoldTvs (){
    let totalSold = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalSold = inventory[i].sold;
}
    return totalSold;

}
console.log(totalSoldTvs())

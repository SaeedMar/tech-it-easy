import { originalStock } from "./IngekochteTvs";
import { totalSoldTvs } from "./VerkochteTvs";

export function teVerkopen() {
    return originalStock() - totalSoldTvs();
}

console.log(teVerkopen());
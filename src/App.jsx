
import './App.css';
import react, { useState } from 'react';
import {
    originalStock
} from "./helpres/IngekochteTvs.js";
import { totalSoldTvs } from "./helpres/VerkochteTvs.js";
import { teVerkopen } from "./helpres/teVerkopen.js";
import {bestSellingTv} from "./constants/inventory.js";
import { formatTvName } from "./helpres/FormatTvName.js";
import { formatTvPrice } from "./helpres/formatTvPrice.js";
import { formatTvSizes } from "./helpres/formatTvSizes.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";
import {inventory} from "./constants/inventory.js";

function App() {
    const [sortedInventory, setSortedInventory] = useState(inventory);
    const totalSold = totalSoldTvs();
    const totalStock = originalStock();
    const remainingToSell = teVerkopen();
    const bestTv = bestSellingTv;

    const handleMostSoldFirst = () => {
        const sorted = [...sortedInventory].sort((a, b) => b.sold - a.sold);
        setSortedInventory(sorted);
        console.log(sorted);
    };

    const handleCheapestFirst = () => {
        const sorted = [...sortedInventory].sort((a, b) => a.price - b.price);
        setSortedInventory(sorted);
        console.log(sorted);
    };

    const handleBestForSportsFirst = () => {
        const sorted = [...sortedInventory].sort((a, b) => b.refreshRate - a.refreshRate);
        console.log(sorted);
    };


    return (
        <div>
            <h1 className='Dash-board'>Tech it easy dashboard</h1>
            <p className='Verkoop-overzicht'>Verkoop overzicht</p>
            <div className='dashBoardContainer'>
                <p className='flex-box1'>Total Sold TVs : {totalSold}</p>
                <p className='flex-box2'>Total stock TVs: {totalStock}</p>
                <p className='flex-box3'>To Sell in Stock : {remainingToSell}</p>
            </div>
            <h1>Best Selling TV</h1>
            <div className='best-selling-tv'>
                <img className='tvPhoto' src='https://image.coolblue.nl/max/500x500/products/1786196'
                     alt="bestSelling"/>
                <div className='bestSelling2'>
                    <h3>{formatTvName(bestTv)}</h3>
                    <p>{formatTvPrice(bestTv)}</p>
                    <p>{formatTvSizes(bestTv)}</p>
                    <div className='bestSelling3'>
                        <img className='checkIcon' src={check} alt="check"/>
                        <p>wifi</p>
                        <img className='minusIcon' src={minus} alt="minus"/>
                        <p>speech</p>
                        <img className='checkIcon' src={check} alt="check"/>
                        <p>HDR</p>
                        <img className='checkIcon' src={check} alt="check"/>
                        <p>Bluetooth</p>
                        <img className='minusIcon' src={minus} alt="minus"/>
                        <p>ambilight</p>
                    </div>
                </div>
            </div>


            <div className='buttons-container'>
                <button onClick={handleMostSoldFirst}>Meest verkocht eerst</button>
                <button onClick={handleCheapestFirst}>Goedkoopste eerst</button>
                <button onClick={handleBestForSportsFirst}>Meest geschikt voor sport eerst</button>
            </div>

            <div className='Alle-Tvs'>
                <h2>Alle Tv's</h2>
                <ul>
                    {allTvBrands.map((brand, index) => (
                        <li key={index}>{brand}</li>
                    ))}
                </ul>
            </div>

            {sortedInventory.map((tv, index) => (
                <div className='best-selling-tv' key={index}>
                    <img className='tvPhoto' src={tv.sourceImg} alt={tv.name}/>
                    <div className='bestSelling2'>
                        <h3>{formatTvName(tv)}</h3>
                        <p>{formatTvPrice(tv)}</p>
                        <p>{formatTvSizes(tv)}</p>
                        <div className='bestSelling3'>
                            <img className='checkIcon' src={check} alt="check"/>
                            <p>wifi</p>
                            <img className='minusIcon' src={minus} alt="minus"/>
                            <p>speech</p>
                            <img className='checkIcon' src={check} alt="check"/>
                            <p>HDR</p>
                            <img className='checkIcon' src={check} alt="check"/>
                            <p>Bluetooth</p>
                            <img className='minusIcon' src={minus} alt="minus"/>
                            <p>ambilight</p>
                        </div>
                    </div>
                </div>
            ))}




        </div>

    );
}

export default App;

const tvNames = inventory.map((tvName) => {
    return tvName.name;
});
console.log(tvNames);

const outOfStockTvs = inventory.filter((outOfStockTv) => {
    return (outOfStockTv.originalStock === outOfStockTv.sold);


});
console.log(outOfStockTvs);


const findTheModels = inventory.find((findTheModel) => {
    return findTheModel.type === 'NH3216SMART';
})
console.log(findTheModels);

const sportTvs = inventory.map((sportTv) => {
    return {
        name: sportTv.name,
        suitable: sportTv.refreshRate >= 100

    };
});
console.log(sportTvs);


const bigScreenTvs = inventory.filter((bigScreenTv) => {
    for (let i = 65; i < bigScreenTv.availableSizes.length; i++) {
        return true;
    }
    return false;
});
console.log(bigScreenTvs);

const ambilightTvs = inventory.filter(ambilightTv =>
    ambilightTv.options.some(option => option.name === 'ambiLight' && option.applicable)
);

console.log(ambilightTvs);


const allTvBrands = inventory.map((allTvBrand) => {
    return allTvBrand.brand;
});


console.log(allTvBrands);






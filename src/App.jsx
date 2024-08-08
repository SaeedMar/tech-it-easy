import './App.css';
import {
  originalStock
} from "./helpres/IngekochteTvs.js";
import {totalSoldTvs} from "./helpres/VerkochteTvs.js";
import {teVerkopen} from "./helpres/teVerkopen.js";
import {bestSellingTv} from "./constants/inventory.js";
import {formatTvName} from "./helpres/FormatTvName.js";
import {formatTvPrice} from "./helpres/formatTvPrice.js";
import {formatTvSizes} from "./helpres/formatTvSizes.js";
import check from "./assets/check.png"
import minus from "./assets/minus.png"


function App() {
  const totalSold = totalSoldTvs()
  const totalStock = originalStock()
  const remainingToSell = teVerkopen()
    const bestTv = bestSellingTv
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
              <img className='tvPhoto' src='https://image.coolblue.nl/max/500x500/products/1786196' alt="bestSelling"/>
              <div className='bestSelling2'>

                  <h3>{formatTvName(bestTv)}</h3>
                  <p>{formatTvPrice(bestTv)}</p>
                  <p>{formatTvSizes(bestTv)}</p>
                  <div className='bestSelling3'>
                      <img className='checkIcon' src={check} alt="check"/>
                      <p>wifi</p>
                      <img className='minusIcon' src={minus} alt=""/>
                      <p>speech</p>
                      <img className='checkIcon' src={check} alt="check"/>
                      <p>HDR</p>
                      <img className='checkIcon' src={check} alt="check"/>
                      <p>Bluetooth</p>
                      <img className='minusIcon' src={minus} alt=""/>
                      <p>ambilight</p>
                  </div>

              </div>
          </div>
      </div>

  );
}

export default App


import React from 'react'
import './Coin.css'


const Coin = ({image,name,price,pricechange,marketcap}) => {
var u = 'https://www.coingecko.com/en/coins/';
var url = u.concat(name.toLowerCase().split(' ').join('-'));
var f2=image.split("/")[5];
var f1='https://www.coingecko.com/coins/';
var i1=f1.concat(f2);
var f3='/sparkline.svg';
var i=i1.concat(f3);
    return (
        <div className="coin-container">
            <div className="coin-row">
                <a href={url} className="coin">
                    <img  src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <img  src={i} alt="crypto" style={{width:250}} />
                </a>
                <div className="coin-data">
                    <p className="coin-price">{price.toLocaleString()}</p>
                    {pricechange<0 ? (
                        <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
                    ):(
                        <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
                    )
                }
                <div className="coin-marketcap">
                {marketcap.toLocaleString()}
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Coin
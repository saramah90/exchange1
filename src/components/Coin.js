import React from 'react';

import styles from "./Coin.module.css";
const Coin = ({name, symbol,image,price, market_cap, priceChange}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="pic"/>
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>{price.toLocaleString()} $</span>
            <span className={priceChange > 0 ? styles.greenPriceChange:styles.redPriceChange}>{priceChange.toFixed(2)}%</span>
            <span>{market_cap.toLocaleString()} $</span>
            
            
        </div>
    );
};

export default Coin;




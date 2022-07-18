import React, { useEffect, useState } from 'react';
import { getCoin } from '../services/api';
//gif
import Loader from "./Loader";

import Coin from './Coin';

import styles from "./Landing.module.css";

const Landing = () => {
    const [coins,setCoins] = useState([]);
    const[search,setSearch] = useState("");
    useEffect(()=>{
        const fetchAPI = async()=>{
        const data = await getCoin()
        setCoins(data)
        }
        fetchAPI();
    },[])
// or setCoin( await getcoin())
    const searchHandler = (event) =>{
        setSearch(event.target.value)
    }
    const searchedCoins = coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <input className={styles.input} type="search" placeholder='search' value={search} onChange={searchHandler}/>
            <div>
                     {coins.length ?
                     <div className={styles.coinsContainer}>

                   { searchedCoins.map(coin =>
                        <Coin key={coin.id}
                        name={coin.name}
                        symbol={coin.symbol}
                        image={coin.image}
                        price={coin.current_price}
                        market_cap={coin.market_cap}
                        priceChange={coin.price_change_percentage_24h}
                        />
                        )}
                        </div>
                     :
            <Loader/>}
            </div>
        </div>
    );
};

export default Landing;

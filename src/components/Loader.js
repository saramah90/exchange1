import React from 'react';
//gif
import spinner from "../gif/Curve-Loading.gif";
const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="spinner"/>
            <h2>Loading...</h2>
        </div>
    );
};

export default Loader;

import React from 'react';
import style from "./stock_style.module.css";
import stock1 from "../../../img/stock1.png";
import stock2 from "../../../img/stock2.png";
import stock3 from "../../../img/stock3.png";

function Stock() {
    return (
        <div className={style.stock}>
            <h1 className={style.slogan}>Акции</h1>
            <div className={style.listImage}>
                <img src={stock1} alt=""/>
                <img src={stock2} alt=""/>
                <img src={stock3} alt=""/>
            </div>
        </div>
    );
}

export default Stock;

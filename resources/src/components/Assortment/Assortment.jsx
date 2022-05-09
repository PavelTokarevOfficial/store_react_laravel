import React from "react";
import style from "./asortment_style.module.css";
import Buttons from "./Buttons/Buttons";

function Assortment({items, title, unit}) {
    return (
        <div className={style.assortment}>
            <h2>{title}</h2>
            <div className={style.listCard}>
                {
                    items.map((item) => (
                        <div className={style.card}>
                            <div className={style.cardImage}>
                                <img src={item.img} alt=""/>
                            </div>
                            <div className={style.cardTitle}>
                                <h2>{item.title}</h2>
                            </div>
                            <div className={style.description}>
                                <p>{item.description}</p>
                            </div>
                            <div className={style.price_mass}>
                                <div>{unit}: {item.mass}</div>
                                <div>Цена: {item.price}</div>
                            </div>
                            <Buttons/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Assortment;

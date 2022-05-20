import React from "react";
import style from "./productLine_style.module.css";
import {Link} from "react-router-dom";

function ProductLine({items, title, link}) {

    return (
        <div>
            <div className={style.headerLine}>
                <h2 className={style.titleList}>{title}</h2>
                <Link to={link}>
                    <button className={style.btn_all}>Смотреть все</button>
                </Link>
            </div>



            <div className={style.listCard}>
                {
                    items.map((item) => (
                        <div className={style.card}>
                            <img className={style.cardImage} src={item.img} alt=""/>
                            <div className={style.cardTitle}>
                                <h2>{item.title}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ProductLine;

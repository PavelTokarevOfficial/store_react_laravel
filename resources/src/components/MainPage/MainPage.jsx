import React from "react";
import style from "./mainPage_style.module.css";
import ProductLine from "./ProductLine/ProductLine";
import Slider from "../Slider/Slider";

function MainPage({cheesecakes, cakes, drinks}) {
    return (
        <div>
            <div className={style.slider}>
                <Slider />
            </div>

            <ProductLine items={cheesecakes} title={"Чизкейки"} link={"cheesecake"}/>
            <ProductLine items={cakes} title={"Торты"} link={"cake"}/>
            <ProductLine items={drinks} title={"Напитки"} link={"drinks"}/>
            <div>мб акции</div>
            <div>популярные товары</div>
            <div>слоган + почемму стоит покупать</div>
        </div>
    );
}

export default MainPage;

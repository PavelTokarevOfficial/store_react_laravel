import React from "react";
import style from "./mainPage_style.module.css";
import ProductLine from "./ProductLine/ProductLine";

function MainPage({cheesecakes, cakes, drinks}) {
    return (
        <div>
            <div>Здесь будет слайрер</div>
            <ProductLine items={cheesecakes} title={"Чизкейки"} link={"cheesecake"}/>
            <ProductLine items={cakes} title={"Торты"} link={"cake"}/>
            <ProductLine items={drinks} title={"Напитки"} link={"drinks"}/>
            <div>мб акции</div>
            <div>популярные товвары</div>
            <div>слоган + почемму стоит покупать</div>
        </div>
    );
}

export default MainPage;

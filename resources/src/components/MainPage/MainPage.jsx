import React from "react";
import style from "./mainPage_style.module.css";
import Slider from "../Slider/Slider";
import Advantage from "./Advantage/Advantage";
import Stock from "./Stock/Stock";



function MainPage() {
    return (
        <div className={style.main_page}>
            <Slider/>
            <Advantage/>
            <Stock/>
        </div>
    );
}

export default MainPage;

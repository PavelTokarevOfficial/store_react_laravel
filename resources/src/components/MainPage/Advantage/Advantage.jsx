import React from 'react';
import style from "./advantage_style.module.css";
import logo1 from "../../../img/icon/world.svg";
import logo2 from "../../../img/icon/new-products.svg";
import logo3 from "../../../img/icon/quality-product.svg";
import logo4 from "../../../img/icon/fast-delivery.svg";

function Advantage() {
    return (
        <div>
            <h1 className={style.slogan}>На любой вкус и кошелек</h1>
            <div className={style.advantage}>
                <div className={style.advantageItem}>
                    <img src={logo1} alt=""/>
                    <h2>Лучшее со всего мира</h2>
                    <p>Мы находим наши десерты во всех уголках мира и доставляем их к Вашему столу всегда свежими.</p>
                </div>
                <div className={style.advantageItem}>
                    <img src={logo2} alt=""/>
                    <h2>Постоянно новинки</h2>
                    <p>Каждый месяц у нас появляются новые торты и десерты. Поверьте, мы найдем чем Вас удивить!</p>
                </div>
                <div className={style.advantageItem}>
                    <img src={logo3} alt=""/>
                    <h2>Вкус и качество</h2>
                    <p>Неповторимый вкус наших тортов удовлетворяет даже самых взыскательных шеф-кондитеров.</p>
                </div>
                <div className={style.advantageItem}>
                    <img src={logo4} alt=""/>
                    <h2>Домчим с ветерком</h2>
                    <p>Доставка тортов осуществляется в специально оборудованном транспорте прямо до Вашего дома.</p>
                </div>
            </div>
        </div>
    );
}

export default Advantage;

import React from 'react';
import style from './basket_style.module.css'
import icon from '../../img/icon/car.svg'
function Basket() {
    return (
        <div className={style.block}>
            <div>
                <h3 className={style.title}>В корзине пока ничего нет</h3>
                <p>
                    Вы можете начать свой выбор из списка или воспользоваться поиском, если ищете конкретный товар.
                </p>
            </div>
            <div className={style.info_delivery}>
                <img src={icon} alt=""/>
                <p>Доставка от 400 руб.
                    Ежедневно с 8:00 до 22:00</p>
            </div>
            <button className={style.btn_clear}>Очистить корзину</button>
        </div>
    );
}

export default Basket;
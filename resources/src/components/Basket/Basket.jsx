import React from 'react';
import style from './basket_style.module.css'
import icon from '../../img/icon/car.svg'

function Basket() {
    return (
        <div className={style.block}>
            <div className={style.wrapper}>
                <div className={style.item}>
                    <p>Чизкейк "New York Стандарт"</p>
                    <p>Кол-во:  2</p>
                    <p>Цена: 1200р</p>
                    <div className={style.buttons}>

                        <div className={style.button_plus}>-</div>
                        <div className={style.button_minus}>+</div>
                        <div className={style.button_del}>Удалить</div>
                    </div>
                </div>
                <div  className={style.item}>
                    <p>Чизкейк «New York Премиум»</p>
                    <p>Кол-во: 1</p>
                    <p>Цена: 1100р</p>
                    <div className={style.buttons}>

                        <div className={style.button_plus}>-</div>
                        <div className={style.button_minus}>+</div>
                        <div className={style.button_del}>Удалить</div>
                    </div>
                </div>
            </div>
            <div>
                <p className={style.price}>Сумма заказа: 3500р</p>
                <button className={style.btn_clear}>Заказать</button>
                <button className={style.btn_clear}>Очистить корзину</button>
            </div>





            {/*<div>*/}
            {/*    <h3 className={style.title}>В корзине пока ничего нет</h3>*/}
            {/*    <p>*/}
            {/*        Вы можете начать свой выбор из списка или воспользоваться поиском, если ищете конкретный товар.*/}
            {/*    </p>*/}
            {/*</div>*/}
            {/*<div className={style.info_delivery}>*/}
            {/*    <img src={icon} alt=""/>*/}
            {/*    <p>Доставка от 400 руб.*/}
            {/*        Ежедневно с 8:00 до 22:00</p>*/}
            {/*</div>*/}
            {/*<button className={style.btn_clear}>Очистить корзину</button>*/}
        </div>
    );
}

export default Basket;

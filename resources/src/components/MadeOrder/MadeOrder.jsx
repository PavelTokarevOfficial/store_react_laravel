import React from 'react';
import style from './style_madeOrder.module.css'


function MadeOrder() {
    return (
        <div className={style.content}>
            <h2>Оформление заказа</h2>
            <div className={style.address}>
                <form action="" className={style.form_order}>
                    <div className={style.inputs}>
                        <label htmlFor="">Город:</label>
                        <input type="text"/>
                    </div>
                    <div className={style.inputs}>
                        <label htmlFor="">Улица:</label>
                        <input type="text"/>
                    </div>
                    <div className={style.inputs}>
                        <label htmlFor="">Дом:</label>
                        <input type="text"/>
                    </div>
                    <div className={style.inputs}>
                        <label htmlFor="">Корпус:</label>
                        <input type="text"/>
                    </div>
                    <div className={style.inputs}>
                        <label htmlFor="">Подъезд:</label>
                        <input type="text"/>
                    </div>
                    <div className={style.inputs}>
                        <label htmlFor="">Этаж:</label>
                        <input type="text"/>
                    </div>
                    <div className={style.inputs}>
                        <label htmlFor="">Квартира:</label>
                        <input type="text"/>
                    </div>
                    <button className={style.btn_order}>Заказать</button>
                </form>
            </div>
        </div>
    );
}

export default MadeOrder;

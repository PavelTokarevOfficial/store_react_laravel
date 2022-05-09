import React, {useState} from 'react';
import style from "./style.module.css";
import icon_minus from '../../../img/icon/minus.svg'
import icon_plus from '../../../img/icon/plus.svg'
const Buttons = () => {
    //Счетчик
    //использование состояния
    const [likes, setLikes] = useState(1)

    //функция прибавления
    function increment() {
        setLikes(likes + 1)
    }

    //функция вычитания
    function decrement() {
        if (likes == 0) {
            let b = document.querySelector("button");
            b.setAttribute("disabled", "disabled");
        } else {
            setLikes(likes - 1)
        }
    }

    return (
        <div className={style.buttons}>
            <div className={style.counter}>
                <button className={style.button} onClick={decrement} id="button">
                    <img src={icon_minus} alt="" className={style.icon}/>
                </button>
                <h2 className={style.textCounter}>{likes}</h2>
                <button className={style.button} onClick={increment}>
                    <img src={icon_plus} alt="" className={style.icon}/>
                </button>
            </div>
            <button className={style.button}>Добавить</button>
        </div>
    );
};

export default Buttons;
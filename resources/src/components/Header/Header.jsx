import logo from '../../img/logo.png'
import style from "./header_style.module.css";
import Modal from "../Modal/Modal";
import React, {useState} from "react";

function Header() {
    const [modalLogin, setModalLogin] = useState(false)
    const [modalRegistration, setModalRegistration] = useState(false)
    return (
        <header className={style.header}>
            <div>
                <img src={logo} alt="" className={style.logo}/>
            </div>

            <div className={style.search}>
                <input type="text" placeholder="Найти товар" className={style.str_search}/>
                <button className={style.btn_search}>Найти</button>
            </div>

            <div className={style.right_block}>
                <button className={style.btn_basket}>Корзина</button>
                <button className={style.btn_login} onClick={() => setModalLogin(true)}>Войти</button>
                <button className={style.btn_login} onClick={() => setModalRegistration(true)}>Регистрация</button>
            </div>

            <Modal active={modalLogin} setActive={setModalLogin}>
                <h1>Вход</h1>
                <input type="text" placeholder={'Логин'}/>
                <input type="password" placeholder={'Пароль'}/>
                <button>Войти</button>
            </Modal>

            <Modal active={modalRegistration} setActive={setModalRegistration}>
                <h1>Регистрация</h1>
                <input type="text" placeholder={'Фамилия'}/>
                <input type="text" placeholder={'Имя'}/>
                <input type="text" placeholder={'Отчество'}/>
                <input type="text" placeholder={'Email'}/>
                <input type="text" placeholder={'Телефон'}/>
                <select name="gender">
                    <option value="1">Мужской</option>
                    <option value="2">Женский</option>
                </select>
                <input type="date"/>
                <input type="password" placeholder={'Пароль'}/>
                <button>Регистрация</button>
            </Modal>
        </header>
    );
}

export default Header;

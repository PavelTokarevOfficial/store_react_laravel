import logo from '../../img/logo.png'
import style from "./header_style.module.css";
import Modal from "../Modal/Modal";
import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";

import basketIcon from './../../img/icon/basked.svg'
import loginIcon from './../../img/icon/login.svg'
import registrationIcon from './../../img/icon/registration.svg'
import Basket from "../Basket/Basket";

function Header() {
    const [modalLogin, setModalLogin] = useState(false)
    const [modalRegistration, setModalRegistration] = useState(false)
    const [modalBasket, setModalBasket] = useState(false)
    return (
        <header className={style.header}>
            <div className={style.block_logo}>
                <img src={logo} alt="" className={style.logo}/>
            </div>
            <div className={style.btn_menu}>
                <Dropdown>
                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                        Меню
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/">Главная страница</Dropdown.Item>
                        <Dropdown.Item href="/cake">Торты</Dropdown.Item>
                        <Dropdown.Item href="/cheesecake">Чизкейки</Dropdown.Item>
                        <Dropdown.Item href="/drinks">Напитки</Dropdown.Item>
                        <Dropdown.Item href="/delivery_terms">Условия доставки</Dropdown.Item>
                        <Dropdown.Item href="/about_us">О нас</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className={style.search}>
                <input type="text" placeholder="Найти товар" className={style.str_search}/>
                <button className={style.btn_search}>Найти</button>
            </div>
            <div className={style.right_block}>
                <button className={style.btn_basket} onClick={()=>{setModalBasket(true)}}>
                    <img className={style.icon} src={basketIcon} alt=""/>
                    <span>Корзина</span>
                </button>
                <button className={style.btn_login} onClick={() => setModalLogin(true)}>
                    <img className={style.icon} src={loginIcon} alt=""/>
                    <span>Войти</span>
                </button>
                <button className={style.btn_login} onClick={() => setModalRegistration(true)}>
                    <img className={style.icon} src={registrationIcon} alt=""/>
                    <span>Регистрация</span>
                </button>
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
            <Modal active={modalBasket} setActive={setModalBasket}>
                <Basket/>
            </Modal>
        </header>
    );
}

export default Header;

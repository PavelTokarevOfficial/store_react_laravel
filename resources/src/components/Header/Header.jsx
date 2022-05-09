import logo from '../../img/logo.png'
import style from "./header_style.module.css";

function Header(){
    return(
        <header className={style.header}>
            <div>
                <img src={logo} alt="" className={style.logo}/>
            </div>
            <div className={style.middle_block}>
                <div className={style.search}>
                    <input type="text" placeholder="Найти товар" className={style.str_search}/>
                    <button className={style.btn_search}>Найти</button>
                </div>
            </div>
            <div className={style.right_block}>
                <div >
                    <button className={style.btn_login}>Войти</button>
                    <button className={style.btn_login}>Регистрация</button>
                </div>
                <div >
                    <button className={ style.btn_basket}>Корзина</button>
                </div>
            </div>
        </header>
    );
}
export default Header;
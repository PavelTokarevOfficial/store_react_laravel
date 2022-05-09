import style from "./menu_style.module.css";
import cake from '../../img/icon/cake.svg'
import cake_slices from '../../img/icon/cake_slices.svg'
import bottle from '../../img/icon/bottle.svg'
import delivery from '../../img/icon/delivery.svg'
import about_us from '../../img/icon/about_us.svg'
import home from '../../img/icon/home.svg'
import {Link} from "react-router-dom";


function Menu(){
    return(
        <div >
            <ul className={style.list}>
                <li>
                    <img src={home} alt="" className={style.icon}/>
                    <Link to="/"><button>Главная страница</button></Link>
                </li>
                <li>
                    <img src={cake} alt="" className={style.icon}/>
                    <Link to="cake"><button>Торты</button></Link>
                </li>
                <li>
                    <img src={cake_slices} alt="" className={style.icon}/>
                    <Link to="cheesecake"><button>Чизкейки</button></Link>
                </li>
                <li>
                    <img src={bottle} alt="" className={style.icon}/>
                    <Link to="drinks"><button>Напитки</button></Link>
                </li>
                <li>
                    <img src={delivery} alt="" className={style.icon}/>
                    <Link to="delivery_terms"><button>Условия доставки</button></Link>
                </li>
                <li>
                    <img src={about_us} alt="" className={style.icon}/>
                    <Link to="about_us"><button>О нас</button></Link>
                </li>
            </ul>
        </div>
    );
}
export default Menu;
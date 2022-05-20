import React from 'react';
import style from './footer_style.module.css'


import vkIcon from '../../img/icon/vk.svg'
import instagramIcon from '../../img/icon/instagram.svg'
import pinterestIcon from '../../img/icon/pinterest.svg'
import fbIcon from '../../img/icon/facebook.svg'


function Footer(props) {
    return (
        <footer>
            <div className={style.paragraph}>
                <span>© 2022, Cake Shop.</span>
                <span>Все права защищены.</span>
            </div>
            <div className={style.social_network}>
                <h2>Наши соц. сети:</h2>
                <div className={style.list}>
                    <a href="https://vk.com/"><img src={vkIcon} alt=""/></a>
                    <a href="https://www.instagram.com/"><img src={instagramIcon} alt=""/></a>
                    <a href="https://www.pinterest.ru/"><img src={pinterestIcon} alt=""/></a>
                    <a href="https://ru-ru.facebook.com/"><img src={fbIcon} alt=""/></a>
                </div>
            </div>


        </footer>
    );
}

export default Footer;

import React, {useState} from "react";
import style from "./about_as_style.module.css";
import {Map, Placemark, YMaps} from "react-yandex-maps";

import icon1 from '../../img/icon/list.svg'
import icon2 from '../../img/icon/production.svg'
import icon3 from '../../img/icon/quality.svg'

const mapData = {
    center: [55.751574, 37.573856],
    zoom: 5,
};

const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521]
];

function About_Us() {


    return (
        <div className={style.content}>
            <h2>О нас</h2>
            <div className={style.map}>
                <YMaps>
                    <Map width={'100%'} height={'400px'} defaultState={mapData}>
                        {coordinates.map(coordinate => <Placemark geometry={coordinate}/>)}
                    </Map>
                </YMaps>
            </div>
            <div>
                <h2>Адреса и часы работы</h2>
                <div className={style.addres}>
                    <div>
                        <h5>Г. Москва, ул. Люблинская улица, д. 61</h5>
                        <h6>Часы работы:</h6>
                        <ul>
                            <li>ПН: 8:00 - 20:00</li>
                            <li>ВТ: 8:00 - 20:00</li>
                            <li>СР: 8:00 - 20:00</li>
                            <li>ЧТ: 8:00 - 20:00</li>
                            <li>ПТ: 8:00 - 20:00</li>
                            <li>СБ: 10:00 - 18:00</li>
                            <li>ВС: 10:00 - 18:00</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Г. Ярославль, ул. Ленинградская, д. 25Б</h5>
                        <h6>Часы работы:</h6>
                        <ul>
                            <li>ПН: 8:00 - 20:00</li>
                            <li>ВТ: 8:00 - 20:00</li>
                            <li>СР: 8:00 - 20:00</li>
                            <li>ЧТ: 8:00 - 20:00</li>
                            <li>ПТ: 8:00 - 20:00</li>
                            <li>СБ: 10:00 - 18:00</li>
                            <li>ВС: 10:00 - 18:00</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className={style.list}>
                <div className={style.list_item}>
                    <div className={style.title_list}>
                        <img src={icon3} alt=""/>
                        <h3>Гарантия качества</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur est facilis hic id laborum
                        non odio quia, quos voluptas voluptates.</p>
                </div>
                <div className={style.list_item}>
                    <div className={style.title_list}>
                        <img src={icon1} alt=""/>
                        <h3>Широкий ассортимент</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur est facilis hic id laborum
                        non odio quia, quos voluptas voluptates.</p>
                </div>
                <div className={style.list_item}>
                    <div className={style.title_list}>
                        <img src={icon2} alt=""/>
                        <h3>Собственное производство</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur est facilis hic id laborum
                        non odio quia, quos voluptas voluptates.</p>
                </div>
            </div>
        </div>
    );
}

export default About_Us;

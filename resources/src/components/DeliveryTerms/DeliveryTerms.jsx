import React from "react";
import style from './DeliveryTerms_style.module.css'
import { Map, Placemark, YMaps} from "react-yandex-maps";

const mapData = {
    center: [55.751574, 37.573856],
    zoom: 5,
};

const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521]
];

function DeliveryTerms() {
    return (
        <div>
            <h2>О доставке</h2>
            <div className={style.map}>
                <YMaps>
                    <Map width={'100%'} height={'400px'} defaultState={mapData}>
                        {coordinates.map(coordinate => <Placemark geometry={coordinate}/>)}

                    </Map>
                </YMaps>
            </div>
            <p>Условия оформления заказа
                Вы можете оформить заказ, зарегистрировавшись на нашем сайте.
                Выберите товары онлайн из предложенных наименований, используя каталог или строку поиска, и добавьте их
                в корзину.</p>

        </div>
    );
}

export default DeliveryTerms;

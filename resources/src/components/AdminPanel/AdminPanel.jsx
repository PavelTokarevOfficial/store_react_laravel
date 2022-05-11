import React, {useState} from 'react';
import style from './style_admin_panel.module.css'
import axios from "axios";

function AdminPanel() {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState()
    const [weight, setWeight] = useState()
    const [price, setPrice] = useState(0)
    const [type, setType] = useState()
    const [image, setImage] = useState()

    function addProduct(){
        const headers = {
            'Accept': 'application/json'
        }
        const params = {
            name: name,
            desc: desc,
            weight: weight,
            price: price,
            type: type,
            image: image
        }

        axios.post('/api/add-product', params, {headers})
    }
    return (
        <div className={style.panel}>
            <h2>админская панель</h2>
            <div>
                <h3>добавить товар</h3>
                <form action="" id='form_add' className={style.form_add}>
                    <input onChange={event => setName(event.target.value)} type="text" placeholder='введите название'/>
                    <textarea onChange={event => setDesc(event.target.value)} placeholder='Введите описание'></textarea>
                    <input type="text" onChange={event => setWeight(event.target.value)} placeholder='введите массу'/>
                    <input type="number" onChange={event => setPrice(event.target.value)} placeholder='введите цену'/>
                    <select form='form_add' onChange={event => setType(event.target.value)}>
                        <option value='cake'>Торт</option>
                        <option value='cheesecake'>Чизкейк</option>
                        <option value='drink'>Напитки</option>
                    </select>
                    <input type="file" onChange={event => setImage(event.target.value)} />
                    <button type='button' onClick={()=>addProduct()}>Добавить</button>
                </form>
            </div>
            <div className={style.list_products}>
                <h3>спивок товаров</h3>
                <div className={style.list_item}>
                    <img src="" alt="img"/>
                    <div className={style.title}>заголовок</div>
                    <div className={style.description}>описание</div>
                    <div className={style.mass}>масса</div>
                    <div className={style.price}>цена</div>
                    <div className={style.type}>тип товара</div>

                </div>
            </div>
        </div>
    );
}

export default AdminPanel;

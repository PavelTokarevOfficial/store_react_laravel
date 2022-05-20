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

    function addProduct() {
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
        <div className={style.wrapper}>
            <div className={style.panel}>
                <h2>Админская панель</h2>
                <div>
                    <h3>Добавить товар</h3>
                    <form action="" id='form_add' method="post" className={style.form_add}
                          enctype="multipart/form-data">

                        <input onChange={event => setName(event.target.value)} type="text"
                               placeholder='введите название'/>
                        <textarea onChange={event => setDesc(event.target.value)}
                                  placeholder='Введите описание'></textarea>
                        <input type="text" onChange={event => setWeight(event.target.value)}
                               placeholder='введите массу'/>
                        <input type="number" onChange={event => setPrice(event.target.value)}
                               placeholder='введите цену'/>
                        <select form='form_add' onChange={event => setType(event.target.value)}>
                            <option value='cake'>Торт</option>
                            <option value='cheesecake'>Чизкейк</option>
                            <option value='drink'>Напитки</option>
                        </select>
                        <input type="file" onChange={event => setImage(event.target.value)}/>
                        <button type='button' onClick={() => addProduct()}>Добавить</button>
                    </form>
                </div>
                {/*<div>*/}
                {/*    <h3>Добавить пользователя</h3>*/}
                {/*    <form className={style.form_add}>*/}
                {/*        <input type="text" placeholder='Имя'/>*/}
                {/*        <input type="text" placeholder='Фамилия'/>*/}
                {/*        <input type="text" placeholder='Телефон'/>*/}
                {/*        <input type="text" placeholder='email'/>*/}
                {/*        <input type="text" placeholder='логин'/>*/}
                {/*        <input type="text" placeholder='пароль'/>*/}
                {/*        <input type="text" placeholder='адрес'/>*/}
                {/*        <input type="text" placeholder='тип аккаунта'/>*/}
                {/*        <input type="date">*/}
                {/*            <select>*/}
                {/*                <option value='null'>не указан</option>*/}
                {/*                <option value='male'>Мужской</option>*/}
                {/*                <option value='female'>Женский</option>*/}
                {/*            </select>*/}
                {/*            <button type='button' onClick={}>Добавить</button>*/}
                {/*    </form>*/}
                {/*</div>*/}

            </div>
        </div>
    );
}

export default AdminPanel;

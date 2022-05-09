import React from 'react';
import style from './style_admin_panel.module.css'

function AdminPanel() {
    return (
        <div className={style.panel}>
            <h2>админская панель</h2>
            <div>
                <h3>добавить товар</h3>
                <form action="" id='form_add' className={style.form_add}>
                    <input type="text" placeholder='введите название'/>
                    <textarea placeholder='Введите описание'></textarea>
                    <input type="text" placeholder='введите массу'/>
                    <input type="text" placeholder='введите цену'/>
                    <select form='form_add'>
                        <option value='cake'>Торт</option>
                        <option value='cheesecake'>Чизкейк</option>
                        <option value='drink'>Напитки</option>
                    </select>
                    <input type="file" />
                    <input type="submit" placeholder='Добавить'/>
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
                    <button>Удалить</button>
                    <button>изменить</button>
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;

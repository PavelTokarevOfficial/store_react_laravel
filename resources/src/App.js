import React, {useState} from "react";
import style from "./app_style.module.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Assortment from "./components/Assortment/Assortment";
import DeliveryTerms from "./components/DeliveryTerms/DeliveryTerms";
import MainPage from "./components/MainPage/MainPage";
import AboutUs from './components/AboutUs/AboutUs'
import Footer from "./components/Footer/Footer";
import Basket from "./components/Basket/Basket";
import {Routes, Route} from 'react-router-dom'
import AdminPanel from "./components/AdminPanel/AdminPanel";

import base_cheesecakes from './components/temporary_base_cheesecakes'
import base_cakes from './components/temporary_base_cakes'
import drinks from './components/temporary_base_drinks'
import MadeOrder from "./components/MadeOrder/MadeOrder";

function App() {
    return (
        <div className="container">
            <Header/>
            <main className={style.page}>
                <div className={style.menu}>
                    <Menu/>
                </div>
                <div className={style.main_content}>
                    <Routes>
                        <Route path='/' element={<MainPage cheesecakes={base_cheesecakes} cakes={base_cakes} drinks={drinks}/>}/>
                        <Route path='/cheesecake' element={<Assortment items={base_cheesecakes} title={"Чизкейки"} unit={"грамм"}/>}/>
                        <Route path='/cake' element={<Assortment items={base_cakes} title={"Торты"} unit={"грамм"}/>}/>
                        <Route path='/drinks' element={<Assortment items={drinks} title={"Напитки"} unit={"объем"}/>}/>
                        <Route path='/delivery_terms' element={<DeliveryTerms/>}/>
                        <Route path='/about_us' element={<AboutUs/>}/>
                        <Route path='/admin' element={<AdminPanel/>}/>
                        <Route path='/order' element={<MadeOrder/>}/>
                    </Routes>
                </div>

                {/*<Basket/>*/}
            </main>
            <Footer/>
        </div>
    );
}
export default App;

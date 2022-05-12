import React, {useState} from "react";
import style from "./about_as_style.module.css";

function About_Us() {
    const [name, setName] = useState()
    const [desc, setDesc] = useState()

    function setLoc() {
        localStorage.setItem(name, desc);
    }

    function getLoc() {
        let str = localStorage.getItem(name);
        console.log(str)
    }

    return (
        <>
            <form action="" id='form_add' className={style.form_add}>
                <input onChange={event => setName(event.target.value)} type="text" placeholder='введите название'/>
                <br/>
                <textarea onChange={event => setDesc(event.target.value)} placeholder='Введите описание'></textarea>
                <br/>
                <button onClick={setLoc}>сохранить</button>
            </form>
            <br/>
            <form action="">
                <h1>local:{}</h1>
                <button onClick={getLoc}>достать</button>
            </form>
        </>
    );
}

export default About_Us;

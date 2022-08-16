import React from 'react';
import s from "./Sidebar.module.css";
import {Contact} from "./components/components";

function Sidebar(props) {
    return (
        <div className={s.sidebar}>
            <div className={s.sidebar_header}>
                <div>user ico</div>
                <input placeholder={'search'}/>
            </div>
            <div className={s.contacts}>
                <h1>Chats</h1>
                <Contact/>

            </div>
        </div>
    );
}

export {Sidebar};

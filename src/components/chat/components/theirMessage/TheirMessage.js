import React from 'react';
import s from './TheirMessage.module.css'
import {Avatar} from "../../../avatar/Avatar";
import {time_convertor_message} from "../../../../helpers/helpers";

function TheirMessage({text, date, avatar}) {
    return (
        <div className={s.message}>
            <Avatar src={avatar} size={40} online={false}/>
            <div className={s.content}>
                <div className={s.text}>
                    {text}
                </div>
                <div className={s.date}>
                    {time_convertor_message(date)}
                </div>
            </div>

        </div>
    );
}

export {TheirMessage};

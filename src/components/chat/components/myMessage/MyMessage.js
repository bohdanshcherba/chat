import React from 'react';
import s from './MyMessage.module.css'
import {time_convertor_message} from "../../../../helpers/helpers";

function MyMessage({text, date}) {



    return (

        <div className={s.message}>
            <div className={s.text}>
                {text}
            </div>
            <div className={s.date}>
                {time_convertor_message(date)}
            </div>
        </div>

    );
}

export {MyMessage};

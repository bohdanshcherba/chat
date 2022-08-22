import React from 'react';
import s from './Contact.module.css'
import {Avatar} from "../../../avatar/Avatar";
import {time_convertor_contacts} from "../../../../helpers/helpers";

function Contact({id,username, last_message, date_last_message, avatar, setCurrentDialog}) {

    return (
        <div className={s.contact} onClick={()=>{setCurrentDialog(id)}}>

            <div className={s.user_avatar}>
                <Avatar
                    src={avatar}/>
            </div>
            <div className={s.user_caption}>
                <div className={s.dialog_title}>
                    <div className={s.user_title}>{username}</div>
                    <div className={s.message_time}>
                        {date_last_message!==JSON.stringify(new Date('1999'))? time_convertor_contacts(date_last_message): null}
                    </div>
                </div>

                <div className={s.dialog_subtitle}>{last_message?last_message:<span className={s.start}>Start a new conversation</span>}</div>
            </div>


        </div>
    );
}

export {Contact};

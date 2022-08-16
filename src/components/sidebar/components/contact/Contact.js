import React from 'react';
import s from './Contact.module.css'
function Contact(props) {
    return (
        <div className={s.contact}>
            <div className={s.avatar}>img</div>
            <div className={s.user_caption}>
                <div className={s.dialog_title}>username</div>
                <div className={s.dialog_subtitle}>last message</div>
            </div>
            <div className={s.message_time}>
                datetime
            </div>
        </div>
    );
}

export {Contact};

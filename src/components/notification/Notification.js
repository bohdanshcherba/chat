import React from 'react';
import s from './Notification.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Avatar} from "../avatar/Avatar";
import {messagesActionCreator} from '../../store/actions'

const Notification = ({notification, currentDialogId}) => {

    const dispatch = useDispatch()

    const {contacts} = useSelector(state => ({
        contacts: state.contacts.contacts,
    }));

    let contact = contacts.find(el=>el.id === notification.contact_id)

    let url = "http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg";
    let audio = new Audio(url);
    if (!notification.showed && currentDialogId!==contact.id){
        dispatch(messagesActionCreator.updateNotification({showed: true, notification:true, contact_id:contact.id}))
        audio.play()
    }


    const closeHandler = () => {
        dispatch(messagesActionCreator.updateNotification({notification:false}))
        audio.pause()

    }

    return (
        <div className={s.notification}>
            <div className={s.close} onClick={closeHandler}>
                x
            </div>
            <div className={s.avatar}>
                <Avatar src={contact.avatar}/>
            </div>
            <div className={s.dialog_title}>
                <div className={s.user_title}>New message from {contact.username}</div>
                <div className={s.dialog_subtitle}>{contact.last_message}</div>
            </div>
        </div>
    )
}

export {Notification};

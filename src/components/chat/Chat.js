import React, {useEffect, useState} from 'react';
import s from "./Chat.module.css";
import {Avatar} from "../avatar/Avatar";
import {MyMessage, TheirMessage} from "./components/components";
import {useDispatch, useSelector} from "react-redux";
import {contactsActionCreator, messagesActionCreator} from '../../store/actions'


function Chat({currentDialogId}) {

    const dispatch = useDispatch()

    const {contacts, messages} = useSelector(state => ({
        contacts: state.contacts.contacts,
        messages: state.messages.current_chat_messages
    }));

    useEffect(() => {
        dispatch(contactsActionCreator.get_contacts())
        dispatch(messagesActionCreator.loadMessages())

    }, [dispatch])

    useEffect(() => {
        dispatch(messagesActionCreator.getMessagesByChatId({chat_id: currentDialogId}))
    }, [dispatch, currentDialogId])

    const [msgText, setMsgText] = useState('')

    const sendMessage = () => {

        if (msgText !== '') {
            dispatch(messagesActionCreator.sendMessage({text: msgText, user_id: 4, chat_id: currentDialogId}))
            dispatch(contactsActionCreator.update_contact({contact_id: currentDialogId, text: msgText}))
            setTimeout(()=>{
                dispatch(messagesActionCreator.getAnswerMessage({ user_id: 4, chat_id: currentDialogId}))
            }, 5000)
            dispatch(contactsActionCreator.get_contacts())

            setMsgText('')
        }

    }

    let current_companion = contacts.find(el=>el.id === currentDialogId)

    return (
        <div className={s.chat}>
            <div className={s.header}>
                <div className={s.avatar}>
                    <Avatar src={current_companion.avatar}/>
                </div>
                <h1>{current_companion.username}</h1>

            </div>
            <div className={s.chat__content}>

                {messages.map(msg => {
                    if (msg.chat_id === currentDialogId) {
                        if (msg.user_id === currentDialogId) {
                            return <TheirMessage
                                key={msg.id}
                                avatar={current_companion.avatar}
                                text={msg.text}
                                date={msg.date}/>


                        } else {
                            return <MyMessage
                                key={msg.id}
                                text={msg.text}
                                date={msg.date}/>
                        }
                    } else {
                        return null
                    }
                })}
            </div>
            <div className={s.input_block}>
                <input type="text" placeholder={'Type your message'} value={msgText}
                       onChange={event => setMsgText(event.target.value)} onKeyPress={event => {
                    if (event.key === 'Enter') {
                        sendMessage()
                    }
                }}/>
                <button className={`${s.send} ${s.sended}`} onClick={sendMessage}/>
            </div>
        </div>
    );
}

export {Chat};

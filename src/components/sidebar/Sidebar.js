import React, {useEffect} from 'react';
import s from "./Sidebar.module.css";
import {Contact} from "./components/components";
import {Avatar} from "../avatar/Avatar";
import {useDispatch, useSelector} from "react-redux";
import {contactsActionCreator} from '../../store/actions'

function Sidebar({current_user_id, setCurrentDialog}) {

    const dispatch = useDispatch()

    const {contacts} = useSelector(state => ({
        contacts: state.contacts.contacts
    }));

    useEffect(() => {
        dispatch(contactsActionCreator.get_contacts())
    }, [dispatch])


    return (
        <div className={s.sidebar}>
            <div className={s.sidebar_header}>
                <div className={s.avatar}>
                    <Avatar
                        src={contacts.find(el=>el.id === current_user_id).avatar }/>
                </div>
                <div className={s.search}>
                    <input className={s.search_input} placeholder={'Search or start new chat'}/>
                </div>

            </div>
            <div className={s.contacts}>
                <h1 className={s.title}>Chats</h1>
                {contacts.map(el => {
                    if (el.id !== current_user_id) {
                        return <Contact key={el.id} id={el.id} username={el.username} last_message={el.last_message}
                                        avatar={el.avatar} date_last_message={el.date_last_message}
                                        setCurrentDialog={setCurrentDialog}/>
                    } else {
                        return null
                    }

                })}

            </div>
        </div>
    );
}

export {Sidebar};

import React, {useEffect, useState} from 'react';
import s from "./Sidebar.module.css";
import {Contact, ListContacts} from "./components/components";
import {Avatar} from "../avatar/Avatar";
import {useDispatch, useSelector} from "react-redux";
import {contactsActionCreator} from '../../store/actions'

function Sidebar({current_user_id, setCurrentDialog}) {

    const dispatch = useDispatch()

    const [showContacts, setShowContacts] = useState([])

    const [value, setValue] = useState('')

    const {contacts} = useSelector(state => ({
        contacts: state.contacts.contacts,

    }));

    useEffect(() => {
        dispatch(contactsActionCreator.get_contacts())
    }, [dispatch])

    const SearchHandler = (event) => {
        setValue(event.target.value)

        setShowContacts(contacts.filter(el => {
            let str1 = el.username.toLowerCase()
            let str2 = event.target.value.toLowerCase()
            if (str1.includes(str2)) {
                return el
            } else {
                return null
            }
        }))
        if (event.target.value === '') {
            setShowContacts(contacts)
        }
    }

    const setCurrentDialogHandler = (id) => {
        setCurrentDialog(id)
        setValue('')
    }

    const filter = () => {
        if (value === '') {
            let filtered = contacts.filter(el=>el.last_message!=='')
            return <ListContacts showContacts={filtered}
                                 setCurrentDialog={setCurrentDialogHandler}
                                 current_user_id={current_user_id}/>
        } else if (showContacts.length !== 0) {
            return <ListContacts showContacts={showContacts}
                                 setCurrentDialog={setCurrentDialogHandler}
                                 current_user_id={current_user_id}/>
        } else {
            return <div className={s.not_found}>Not found contacts<br/> with username "{value}"</div>
        }
    }

    return (
        <div className={s.sidebar}>
            <div className={s.sidebar_header}>
                <div className={s.avatar}>
                    <Avatar
                        src={contacts.find(el => el.id === current_user_id).avatar}/>
                </div>
                <div className={s.search}>
                    <input
                        className={s.search_input}
                        placeholder={'Search or start new chat'}
                        value={value}
                        onChange={SearchHandler}
                        maxLength={20}
                    />
                </div>

            </div>
            <div className={s.contacts}>
                <h1 className={s.title}>Chats</h1>

                {
                    filter()
                }

            </div>
        </div>
    );
}

export {Sidebar};

import React from 'react';
import {Contact} from "../contact/Contact";

const ListContacts = ({showContacts, current_user_id, setCurrentDialog}) => {
    return (
        showContacts.map(el => {
            if (el.id !== current_user_id ) {
                return <Contact key={el.id} id={el.id} username={el.username} last_message={el.last_message}
                                avatar={el.avatar} date_last_message={el.date_last_message}
                                setCurrentDialog={setCurrentDialog}/>
            } else {
                return null
            }

        })
    )
}

export { ListContacts}

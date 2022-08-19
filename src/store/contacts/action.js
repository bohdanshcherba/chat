import {createAsyncThunk} from '@reduxjs/toolkit';
import ActionType from './common';

const get_contacts = createAsyncThunk(ActionType.GET_CONTACTS, async (request, {extra: {services}, getState}) => {

    let contacts = services.storage.getItem('contacts')

    if (contacts === null) {
        contacts = getState().contacts.contacts

    }
    try {
        contacts.sort((a, b) => {

            return new Date(JSON.parse(b.date_last_message)) - new Date(JSON.parse(a.date_last_message))
        }  )

    }catch (e){
        console.log(e)
    }

    services.storage.setItem('contacts', contacts)
    return {contacts}
})

const update_contact = createAsyncThunk(ActionType.GET_CONTACTS, async ({contact_id, text}, {
    extra: {services},
    getState
}) => {

    let contacts = services.storage.getItem('contacts')

    contacts.find(el=>el.id === contact_id).last_message = text
    contacts.find(el=>el.id === contact_id).date_last_message = JSON.stringify(new Date())

    services.storage.setItem('contacts', contacts)

    return {contacts}
})

export {get_contacts, update_contact}

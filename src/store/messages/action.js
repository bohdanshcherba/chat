import {createAsyncThunk} from '@reduxjs/toolkit';
import ActionType from './common';
import {contactsActionCreator} from '../actions'

const getMessagesByChatId = createAsyncThunk(ActionType.GET_MESSAGE, async ({chat_id}, {extra: {services}}) => {
    let messages = services.storage.getItem('messages')

    messages = messages.filter((msg) => msg.chat_id === chat_id)

    return {messages}
});

const sendMessage = createAsyncThunk(ActionType.SEND_MESSAGE, async ({text, user_id, chat_id,}, {
    extra: {services},
    getState,
    dispatch

}) => {

    let messages = services.storage.getItem('messages')

    messages.push({
        id: messages[messages.length - 1].id + 1,
        text: text,
        date: JSON.stringify(new Date()),
        user_id: user_id,
        chat_id: chat_id,
    })


    setTimeout(() => {
        dispatch(getAnswerMessage({user_id: user_id, chat_id: chat_id}))
        setTimeout(() => {
            dispatch(contactsActionCreator.get_contacts())

        }, 500)

    }, 10000)

    services.storage.setItem('messages', messages)

    return {messages}
});

const loadMessages = createAsyncThunk(ActionType.LOAD_MESSAGES, async (payload, {extra: {services}, getState}) => {
    let messages = services.storage.getItem('messages')

    if (messages === null) {
        messages = getState().messages.all_messages
        services.storage.setItem('messages', messages)
    }

    return {messages}
});

const getAnswerMessage = createAsyncThunk(ActionType.ANSWER_MESSAGE, async ({chat_id}, {
    extra: {services},
    dispatch
}) => {

    let messages = services.storage.getItem('messages')

    let ans = await services.messages.getRandomMessage()

    let date = new Date()

    messages.push({
        id: messages[messages.length - 1].id + 1,
        text: ans.value,
        date: JSON.stringify(date),
        user_id: chat_id,
        chat_id: chat_id,
    })

    dispatch(contactsActionCreator.update_contact({contact_id: chat_id, text: ans.value, date: date}))

    services.storage.setItem('messages', messages)

    let notification = {
        notification: true,
        text: ans.value,
        contact_id: chat_id,
        showed: false
    }

    return {messages, notification}
});

const updateNotification = createAsyncThunk(
    ActionType.UPDATE_NOTIFICATION, async ({
                                               notification = false,
                                               text = '',
                                               contact_id = -1,
        showed=true,
                                           }, {extra: {services}, getState}) => {

    return {notification: {notification, text, contact_id, showed}}
});


export {getMessagesByChatId, sendMessage, loadMessages, getAnswerMessage, updateNotification}

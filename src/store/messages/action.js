import {createAsyncThunk} from '@reduxjs/toolkit';
import ActionType from './common';

const getMessagesByChatId = createAsyncThunk(ActionType.GET_MESSAGE, async ({chat_id}, {extra: {services}}) => {
    let messages = services.storage.getItem('messages')

    messages = messages.filter((msg) => msg.chat_id === chat_id)

    return {messages}
});

const sendMessage = createAsyncThunk(ActionType.SEND_MESSAGE, async ({text, user_id, chat_id,}, {extra: {services}, getState}) => {

    let messages = services.storage.getItem('messages')

    messages.push({
        id:messages[messages.length-1].id+1,
        text:text,
        date:JSON.stringify(new Date()),
        user_id: user_id,
        chat_id: chat_id,
    })

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

export {getMessagesByChatId,sendMessage,loadMessages}

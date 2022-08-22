import {createReducer, isAnyOf} from '@reduxjs/toolkit';
import {messagesActionCreator} from '../actions'
import {default_messages} from "../../assets/db/db";

const initialState = {
    all_messages: default_messages,
    current_chat_messages:[],
    notification: {
        notification: false,
        text: '',
        contact_id: -1,
        showed: false,
    },
    isLoading: true
};

const reducer = createReducer(initialState, builder => {

    builder.addCase(messagesActionCreator.getMessagesByChatId.fulfilled, (((state, action) => {
        state.current_chat_messages = action.payload.messages
        state.isLoading = false
    })))
    builder.addCase(messagesActionCreator.sendMessage.fulfilled, (((state, action) => {
        state.all_messages = action.payload.messages
        state.current_chat_messages = action.payload.messages
        state.isLoading = false
    })))
    builder.addCase(messagesActionCreator.getAnswerMessage.fulfilled, (((state, action) => {
        state.all_messages = action.payload.messages
        state.current_chat_messages = action.payload.messages
        state.notification = action.payload.notification
        state.isLoading = false
    })))
    builder.addCase(messagesActionCreator.loadMessages.fulfilled, (((state, action) => {
        state.all_messages = action.payload.messages
        state.isLoading = false
    })))
    builder.addCase(messagesActionCreator.updateNotification.fulfilled, (((state, action) => {
        state.notification = action.payload.notification
    })))

})


export {reducer}

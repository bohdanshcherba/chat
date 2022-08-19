import {createReducer, isAnyOf} from '@reduxjs/toolkit';
import {messagesActionCreator} from '../actions'
import {default_messages} from "../../assets/db/db";

const initialState = {
    all_messages: default_messages,
    current_chat_messages:[],
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
        state.isLoading = false
    })))
    builder.addCase(messagesActionCreator.loadMessages.fulfilled, (((state, action) => {
        state.all_messages = action.payload.messages
        state.isLoading = false
    })))

})


export {reducer}

import {configureStore} from '@reduxjs/toolkit'
import * as services from '../services/services'
import {ContactsReducer, MessagesReducer } from "./rootReducer";

export const store = configureStore({
    reducer: {
        contacts: ContactsReducer,
        messages: MessagesReducer,
    },
    middleware: getDefaultMiddleware => (getDefaultMiddleware({
        thunk: {
            extraArgument: {services}
        }
    })),
    devTools: true
})

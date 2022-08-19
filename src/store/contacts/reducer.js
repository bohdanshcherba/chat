import {createReducer, isAnyOf} from '@reduxjs/toolkit';
import {get_contacts, update_contact} from './action';
import {default_contacts} from "../../assets/db/db";

const initialState = {
    contacts:default_contacts,
    isLoading: true,
};

const reducer = createReducer(initialState, builder => {

    builder.addMatcher(isAnyOf(get_contacts.fulfilled, update_contact.fulfilled), (state, action) => {

        state.contacts = action.payload.contacts;
        state.isLoading = false

    });

})

export {reducer}

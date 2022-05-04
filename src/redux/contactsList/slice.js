import { createSlice, nanoid } from "@reduxjs/toolkit";

export const contactsListSlice = createSlice({
    name: 'contact',
    initialState: {contacts: []},
    reducers: {
        addContact: {
            reducer: (state, action) => {
                state.contacts.push(action.payload);
            },
            prepare: ({ name, number }) => {
                const id = nanoid();
                return { payload: { id, name, number } };
            },
        },
        removeContact(state, action) {
           state.contacts = state.contacts.filter(({id}) => id !== action.payload);
        },
    },
});

export const { addContact, removeContact } = contactsListSlice.actions;

export const getContacts = state => state.contacts.contacts

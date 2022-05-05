import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactsList/slice';
import { contactsFilterSlice } from './contactsFilter/slice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer: {
        [contactApi.reducerPath]: contactApi.reducer,
        filter: contactsFilterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        contactApi.middleware,
    ],
});

setupListeners(store.dispatch);
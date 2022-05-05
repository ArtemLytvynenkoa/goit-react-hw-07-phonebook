import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6273e7f4345e1821b223eec2.mockapi.io/api/v1/',
    }),
    tagTypes: ['Contact'],
    endpoints: builder => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contact']
        }),
        deleteContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
        createContact: builder.mutation({
            query: ({name, number}) => ({
                url: `/contacts`,
                method: 'POST',
                body: {name, number},
            }),
            invalidatesTags: ['Contact'],
        })

    }),
});

export const {
    useFetchContactsQuery,
    useDeleteContactMutation,
    useCreateContactMutation,
} = contactApi;

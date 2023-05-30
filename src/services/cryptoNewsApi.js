import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': '9ac755f3e6mshf90e9b50bce2f46p13aafbjsnd2ce4fb270ae',
    'X-RapidAPI-Host': 'crypto-news11.p.rapidapi.com'
}

const baseUrl = "https://crypto-news11.p.rapidapi.com";

const createRequest = (url) => ({url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi' ,
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: (subject) => createRequest('/cryptonews/' + subject),
        })
    }),
})

export const { useGetNewsQuery } = cryptoNewsApi;
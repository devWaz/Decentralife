import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '99ef9b77cemshc984c40c7c9547ap1d6f69jsnc419ac4bff18',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({url , headers: cryptoApiHeaders})


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoData: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId , timePeriod}) => createRequest(`/coin/${coinId}/history?timeperiod=${timePeriod}`)
        }),
        getExchanges : builder.query({
            query: () => createRequest("/exchanges")
        })
    })
})

export const { useGetCryptoDataQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;
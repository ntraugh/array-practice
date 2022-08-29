import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// create a variable for our headers to use with our API
const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'd4a013123emsh1df389a29728209p1c3e74jsn82106f713090',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

// create a variable for the url so we don't have to type it out a bunch of times
const url = 'https://coinranking1.p.rapidapi.com'

// create a function that takes in our url and we return a new object with our headers in the url
const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

// createApi is a function that comes from Redux
export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    // our baseQuery is our baseUrl, fetchBaseQuery comes from Redux
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    // set up all of our endpoints for grabbing data
    endpoints: (builder) => ({
        getCryptos: builder.query({
            // to get all cryptos we query the createRequest with the url of "/exchances"
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    }) 
})

export const {
    // to export our "getCryptos" we need to add "use" before it and "Query" after it, redux does the rest for us
    useGetCryptosQuery,
} = cryptoApi
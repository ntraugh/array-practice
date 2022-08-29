import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoNewsHeaders = {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'd4a013123emsh1df389a29728209p1c3e74jsn82106f713090',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const url = "https://bing-news-search1.p.rapidapi.com"

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    // our baseQuery is our baseUrl, fetchBaseQuery comes from Redux
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    // set up all of our endpoints for grabbing data
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            // to get all cryptos we query the createRequest with the url of "/exchances"
            query: (newsCategory, count) => 
            createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    }) 
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi

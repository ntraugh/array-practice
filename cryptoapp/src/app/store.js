import { configureStore } from "@reduxjs/toolkit"

import { cryptoApi } from "../services/cryptoApi"
import { cryptoNewsApi } from "../services/cryptoNews"

export default configureStore({
    reducer: {
        // need to specify the below for EVERY reducer that you create within the cryptoApi
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    },
    
})
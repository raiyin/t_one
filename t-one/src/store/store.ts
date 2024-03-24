import { configureStore } from '@reduxjs/toolkit'
import articlePageNumberReducer from './slices/articlesSlice'

export const store = configureStore({
    reducer: {
        articles: articlePageNumberReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

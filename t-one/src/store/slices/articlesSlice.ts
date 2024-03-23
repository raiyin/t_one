import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface ArticlesState {
    pageNumber: number;
    isBackPageExist: boolean;
    isForthPageExist: boolean;
    postsPerPage: number;
    postsTotal: number;
}

const initialState: ArticlesState = {
    pageNumber: 1,
    isBackPageExist: false,
    isForthPageExist: true,
    postsPerPage: 12,
    postsTotal: 150
}

export const articlesSlice = createSlice({

    name: 'articles',
    initialState,
    reducers: {

        incrementPageNumber: (state) => {

            if (state.pageNumber >= Math.floor(state.postsTotal / state.postsPerPage) + 1) {
                return;
            }

            state.pageNumber += 1


            if (state.pageNumber === 1) {
                state.isBackPageExist = false;
            }
            else {
                state.isBackPageExist = true;
            }

            if (state.pageNumber * state.postsPerPage >= state.postsTotal) {
                state.isForthPageExist = false;
            }
            else {
                state.isForthPageExist = true;
            }
        },

        decrementPageNumber: (state) => {
            if (state.pageNumber <= 1) {
                return;
            }

            state.pageNumber -= 1

            if (state.pageNumber === 1) {
                state.isBackPageExist = false;
            }
            else {
                state.isBackPageExist = true;
            }

            if (state.pageNumber * state.postsPerPage >= state.postsTotal) {
                state.isForthPageExist = false;
            }
            else {
                state.isForthPageExist = true;
            }
        },

        // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },

    },
})

//export const { increment, decrement, incrementByAmount } = articlesSlice.actions
export const { incrementPageNumber, decrementPageNumber } = articlesSlice.actions
//export const selectCount = (state: RootState) => state.counter.value
export default articlesSlice.reducer

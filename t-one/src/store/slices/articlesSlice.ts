import { createSlice } from '@reduxjs/toolkit'

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
            state.isBackPageExist = state.pageNumber !== 1

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
            state.isBackPageExist = state.pageNumber !== 1

            if (state.pageNumber * state.postsPerPage >= state.postsTotal) {
                state.isForthPageExist = false;
            }
            else {
                state.isForthPageExist = true;
            }
        },

    },
})

export const { incrementPageNumber, decrementPageNumber } = articlesSlice.actions
export default articlesSlice.reducer

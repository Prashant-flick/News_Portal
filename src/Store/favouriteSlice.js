import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    ArticleData : [],
}

const favouriteSlice = createSlice({
    name : "favourite",
    initialState,
    reducers: {
        addArticle: (state, action) => {
            state.ArticleData = [ action.payload, ...state.ArticleData]
        },
        deleteArticle : (state, action) => {
            state.ArticleData = state.ArticleData.filter((elem) => elem?.article?.uuid!==action.payload?.article?.uuid)
        }
    }
})

export const {addArticle, deleteArticle} = favouriteSlice.actions

export default favouriteSlice.reducer
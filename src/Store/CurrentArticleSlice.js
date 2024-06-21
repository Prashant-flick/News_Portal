import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ArticleData : null
}

const CurrentArticleSlice = createSlice({
    name : "currentArticle",
    initialState,
    reducers: {
        addArticle : (state, action) => {
            state.ArticleData = action.payload
        }
    }
})

export const { addArticle } = CurrentArticleSlice.actions
export default CurrentArticleSlice.reducer
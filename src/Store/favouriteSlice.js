import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    ArticleData : [],
}

const favouriteSlice = createSlice({
    name : "favourite",
    initialState,
    reducers: {
        addArticle: (state, action) => {

        },
        deleteArticle : (state, action) => {

        }
    }
})

export const {addArticle, deleteArticle} = favouriteSlice.actions

export default favouriteSlice.reducer
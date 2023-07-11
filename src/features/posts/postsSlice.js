import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import postService from "./postsService"

const initialState = {
    posts: [],
    isLoading: false,
    post: {}
}

export const getAll = createAsyncThunk('posts/getAll', async () => {
    try {
        return await postService.getAll()
    } catch (error) {
      console.error(error)  
    }
})

export const getById = createAsyncThunk('posts/getById', async (id) => {
    try {
        return await postService.getById(id)
    } catch (error) {
       console.error(error) 
    }
})

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload
            })
            .addCase(getAll.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.post = action.payload
            })
    }
})

export const { reset } = postSlice.actions

export default postSlice.reducer
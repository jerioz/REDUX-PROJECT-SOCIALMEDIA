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

export const getByName = createAsyncThunk('posts/getByName', async (title) => {
    try {
        return await postService.getByName(title)
    } catch (error) {
        console.error(error)
    }
})

export const newPost = createAsyncThunk('posts/newPost', async (post) => {
    try {
       return await postService.newPost(post) 
    } catch (error) {
       console.error(error) 
    }
})

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
    try {
        return await postService.deletePost(id)
    } catch (error) {
        console.error(error)
    }
})

export const updatePost = createAsyncThunk('/posts/updatePost', async (post) => {
    try {
        return await postService.updatePost(post)
    } catch (error) {
        console.error(error)
    }
})

export const newCommentPost = createAsyncThunk('/posts/newCommentPost', async (post) => {
    try {
        return await postService.newCommentPost(post)
    } catch (error) {
        
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
            .addCase(getByName.fulfilled, (state, action) => {
                state.posts = action.payload
            })
            .addCase(newPost.fulfilled, (state, action) => {
                state.posts = [...state.posts, action.payload]
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.posts = state.posts.filter(
                    (post) => post._id !== +action.payload._id
                )
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                const posts = state.posts.map((post) => {
                    if(post._id === action.payload.id) {
                        post = action.payload
                    }
                    return post
                })
                state.posts = posts
            })
            .addCase(newCommentPost.fulfilled, (state, action) => {
                const posts = state.posts.map((post) => {
                    if(post._id === action.payload.id) {
                        post = action.payload
                    }
                    return post
                })
                state.posts = posts
            })
    }
})

export const { reset } = postSlice.actions

export default postSlice.reducer
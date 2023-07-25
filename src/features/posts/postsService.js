import axios from 'axios'

const API_URL = "http://localhost:3001"

const getAll = async () => {
    const res = await axios.get(`${API_URL}/posts/getAll`)
    return res.data
}

const getById = async (id) => {
    const res = await axios.get(`${API_URL}/posts/getById/${id}`)
    return res.data
}

const getByName = async (title) => {
    const res = await axios.get(`${API_URL}/posts/getByTitle/${title}`)
    return res.data
}

const newPost = async (postData) => {
    const token = JSON.parse(localStorage.getItem("token"))
    const res = await axios.post(`${API_URL}/posts/newPost`, postData, {
        headers: {
            authorization: token,
        },
    })
    
    return res.data
}

const deletePost = async (id) => {
    const token = JSON.parse(localStorage.getItem("token"))
    const res = await axios.delete(`${API_URL}/posts/deletePost/${id}`, {
        headers: {
            authorization: token,
        }, 
    })
    return res.data
}

const updatePost = async (post, id) => {
    const token = JSON.parse(localStorage.getItem("token"))
    const res = await axios.put(API_URL + "/posts/updatePost/"+ post.id, post, {
        headers: {
            authorization: token,
        },  
    })
    return res.data
}

const newCommentPost = async (post, id) => {
    const token = JSON.parse(localStorage.getItem("token"))
    const res = await axios.put(API_URL + "/posts/newCommentPost/"+ post.id, post, {
        headers: {
            authorization: token,
        },  
    })
    return res.data
}


const postService = {
    getAll,
    getById,
    getByName,
    newPost,
    deletePost,
    updatePost,
    newCommentPost,
}

export default postService
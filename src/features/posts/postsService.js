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

const postService = {
    getAll,
    getById,
    getByName,
}

export default postService
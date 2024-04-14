import axios from "axios"

export const getPosts = async () => { 
    const response = await axios.get('https://www.reddit.com/hot.json?t=day?limit=5')
    return response.data
}
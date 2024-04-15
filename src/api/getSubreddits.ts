import axios from "axios"

export const getSubreddits = async (parameter: string) => { 
    const response = await axios.get(`https://www.reddit.com/subreddits/${parameter}.json`)
    console.log(response.data.data.children)
    return response.data.data.children
}
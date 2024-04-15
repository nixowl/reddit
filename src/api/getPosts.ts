import axios from "axios"

export const getPosts = async () => { 
    const response = await axios.get('https://www.reddit.com/hot.json?t=day?limit=5')
    return response.data
}

export const getTodaysHottest = async () => {
    const response = await axios.get(
        'https://www.reddit.com/top.json?t=day?limit=5'
    )
    const data = response.data.data.children
    const firstFiveWithImages = data.filter(
        (post: any) =>
            post.data.url.includes('jpg') ||
            post.data.url.includes('png') ||
            post.data.url.includes('jpeg')
    )
    return firstFiveWithImages.slice(0, 5)
}

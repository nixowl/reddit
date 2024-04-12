import { useEffect, useState } from "react"
import { FeedItem } from "./types"
import { getHotPosts } from "@/api/getHotPosts"
import { Feed } from "./Feed"

export const Main = () => {
const [hotPosts, setHotPosts] = useState<Array<FeedItem>>([])

useEffect(() => {
    const fetchHotPosts = async () => {
        const response = await getHotPosts()
        console.log(response.data.children)
        setHotPosts(response.data.children)
    }

    fetchHotPosts()
}, [])
    
    return (
        <>
        <Feed postsArray={hotPosts} />
        </>
    )
}

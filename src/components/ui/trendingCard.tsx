import { Card, CardContent } from "./card"
import { TrendingCardProps } from "../../types"
import { useNavigate } from "react-router-dom"
import { AppDispatch } from "@/redux/store"
import { useAppDispatch } from "@/lib/hooks"
import { setCurrentSubreddit } from "@/redux/subredditSlice"


export const TrendingCard = ({ post }: TrendingCardProps) => {
    const navigate = useNavigate()
    const dispatch: AppDispatch = useAppDispatch()

    const handleClick = (path: string) => {
        navigate(`/r/${path}`)
        dispatch(setCurrentSubreddit(path))
    }
    return (
        <div className="p-1 rounded-xl z-10">
            <Card className="rounded-xl z-10 duration-500 ease-in-out transition-all hover:scale-105">
                <CardContent
                    style={{
                        backgroundImage: `url(${post.data.url})`,
                    }}
                    className={`flex aspect-square items-center justify-center rounded-xl shadow-md bg-cover bg-center overflow-hidden`}
                >
                    <div className="bg-gradient-to-t from-black/95 to-transparent h-full w-full flex flex-col items-start justify-end px-5  py-2 ease-in-out text-white hover:from-black duration-500 transition-all ">
                        <a
                            onClick={() => handleClick(post.data.subreddit)}
                            className="text-2xl font-extrabold hover:cursor-pointer">
                            r/{post.data.subreddit}
                        </a>
                            <p
                                className="text-md">
                                {post.data.title.length > 80 ? post.data.title.slice(0, 80) + '...' : post.data.title}
                            </p>
                        
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
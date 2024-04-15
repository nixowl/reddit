import { cn, getRelativeTime } from '@/lib/utils'
import { ArrowBigUp, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { AppDispatch } from '@/redux/store'
import { useAppDispatch } from '@/lib/hooks'
import { setCurrentPostId } from '@/redux/postPageSlice'
import { setCurrentSubreddit } from '@/redux/subredditSlice'

export const Feed = ({
    className,
    postsArray,
}: {
    className?: string
    postsArray: Array<any>
    }) => {
    
       const navigate = useNavigate()
       const dispatch: AppDispatch = useAppDispatch()

       const handlePostClick = (path: string) => {
           navigate(`/posts/${path}`)
           dispatch(setCurrentPostId(path))
       }
    
    const handleSubredditClick = (path: string) => { 
        navigate(`/r/${path}`)
        dispatch(setCurrentSubreddit(path))
    }
   
    return (
        <div className={cn('flex flex-col py-2 px-3 h-full gap-4', className)}>
           
            {postsArray.map((post) => {
                const hasImagePattern = /\.(jpeg|jpg|gif|png)$/
                const urlHasImage = hasImagePattern.test(post.data.url)
                const destHasImage = hasImagePattern.test(
                    post.data.url_overridden_by_dest
                )
                const hasVideo = post.data.is_video

                return (
                    <Card
                        key={post.data.id}
                        className={`bg-card grid  auto-rows-auto h-full content-center border-[1px] border-border rounded-xl shadow-md shadow-black/20 transition-all ${
                            urlHasImage || destHasImage || hasVideo
                                ? 'grid-cols-1'
                                : 'grid-cols-1'
                        }`}
                    >
                        <CardHeader>
                            <div className="flex flex-row items-center justify-between text-xs">
                                <a
                                    onClick={() =>
                                        handleSubredditClick(
                                            post.data.subreddit
                                        )
                                    }
                                    className="hover:cursor-pointer"
                                >
                                    /r/{post.data.subreddit}
                                </a>
                                <p>{getRelativeTime(post.data.created)}</p>
                            </div>
                            <CardTitle>
                                <a
                                    onClick={() =>
                                        handlePostClick(post.data.id)
                                    }
                                    className="text-card-foreground text-3xl font-bold transition delay-150 hover:cursor-pointer"
                                >
                                    {post.data.title}
                                </a>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {urlHasImage || destHasImage ? (
                                <img
                                    src={
                                        urlHasImage
                                            ? post.data.url
                                            : destHasImage
                                              ? post.data.url_overridden_by_dest
                                              : undefined
                                    }
                                    className={`col-span-3 row-span-2  object-cover w-full px-3 pb-3 rounded-[2rem] max-h-[30rem]`}
                                    alt="thumbnail"
                                />
                            ) : hasVideo ? (
                                <video
                                    src={
                                        post.data['media']['reddit_video'][
                                            'fallback_url'
                                        ]
                                    }
                                    className="col-span-3 row-span-2 object-cover w-full px-3 pb-3 rounded-[2rem] max-h-[30rem]"
                                    controls
                                />
                            ) : null}
                        </CardContent>
                        <CardFooter>
                            <div
                                className={`${
                                    urlHasImage || destHasImage || hasVideo
                                        ? 'col-span-2'
                                        : 'col-span-1 col-start-1'
                                } flex flex-col w-full justify-between h-full`}
                            >
                                <div className="flex flex-row gap-3">
                                    <Button
                                        variant="secondary"
                                        className="flex flex-row items-center gap-1"
                                    >
                                        <ArrowBigUp /> {post.data.ups}
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        className="flex flex-row items-center gap-1"
                                    >
                                        <MessageCircle />{' '}
                                        {post.data.num_comments}
                                    </Button>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                )
            })}
        </div>
    )
}

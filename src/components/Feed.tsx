import { cn, getRelativeTime } from '@/lib/utils'
import { ArrowBigUp, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { AppDispatch } from '@/redux/store'
import { useAppDispatch } from '@/hooks'
import { setSortingOption } from '@/redux/sortingSlice'

export const Feed = ({
    className,
    postsArray,
}: {
    className?: string
    postsArray: Array<any>
    }) => {
   
    return (
        <div className={cn('flex flex-col py-2 px-11 h-full gap-4', className)}>
           
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
                        className={`bg-card grid  auto-rows-auto h-full content-center border-2 border-border rounded-xl shadow-md shadow-black/20 hover:bg-card-hover transition ${
                            urlHasImage || destHasImage || hasVideo
                                ? 'grid-cols-1'
                                : 'grid-cols-1'
                        }`}
                    >
                        <CardHeader>
                            <div className="flex flex-row items-center justify-between text-xs">
                                <p className="">/r/{post.data.subreddit}</p>
                                <p>{getRelativeTime(post.data.created)}</p>
                            </div>
                            <CardTitle>
                                <a
                                    href="/"
                                    className="text-card-foreground text-xl font-bold hover:text-accent transition delay-150"
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
                                    className={`col-span-3 row-span-2  object-cover w-full px-3 pb-3 rounded-[2rem]`}
                                    alt="thumbnail"
                                />
                            ) : hasVideo ? (
                                <video
                                    src={
                                        post.data['media']['reddit_video'][
                                            'fallback_url'
                                        ]
                                    }
                                    className="col-span-3 row-span-2 object-cover w-full px-3 pb-3 rounded-[2rem]"
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
                                        className="flex flex-row items-center"
                                    >
                                        <ArrowBigUp /> {post.data.ups}
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        className="flex flex-row items-center"
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

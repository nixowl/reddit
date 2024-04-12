import { cn } from "@/lib/utils"
import { FeedItem } from "./types";
import { ArrowBigUp, MessageCircle } from "lucide-react";
import { Card } from "./ui/card";

export const Feed = ({ 
    className,
    postsArray
}: {
        className?: string;
        postsArray: Array<any>; // TODO: Replace any with FeedItem after fixing

    }) => {
    
       const formatDate = (timestamp: number) => {
           const date = new Date(timestamp * 1000)
           return date.toLocaleString() 
       }
    
    return (
        <div className={cn('flex flex-col py-2 px-11 h-full gap-4', className)}>
            {postsArray.map((post) => (
                <Card
                    key={post.data.id}
                    className="bg-card grid grid-cols-3 auto-rows-auto py-2 px-4 gap-2 h-full content-center"
                >
                    {post.data.thumbnail ? (
                        <img
                            src={
                                post.data.url
                                    ? post.data.url
                                    : post.data.thumbnail
                            }
                            className="col-span-1 col-start-1"
                        />
                    ) : (
                        <div className="col-span-1 col-start-1" />
                    )}
                    <div className="flex flex-col col-span-2 col-start-2 w-full justify-between h-full">
                        <div>
                            <a
                                href="/"
                                className="text-lg text-accent-foreground font-bold hover:text-accent transition delay-150"
                            >
                                {post.data.title}
                            </a>
                            <p className="text-primary">
                                <span className="font-bold">
                                    {formatDate(post.data.created_utc)}
                                </span>{' '}
                                by{' '}
                                <span className="font-bold">
                                    {post.data.author}
                                </span>
                            </p>
                            <p>/r/{post.data.subreddit}</p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <p className="flex flex-row items-center">
                                <ArrowBigUp /> {post.data.ups}
                            </p>
                            <p className="flex flex-row items-center">
                                <MessageCircle />
                                {post.data.num_comments}
                            </p>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}
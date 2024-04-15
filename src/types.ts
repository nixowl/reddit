export type FeedItem = {
    id: number,
    content: string
    date: string
    title: string
    image?: string
    author: string
    subreddit: string
    ups: number
    comments: number
}

export type TrendingPost = {
    data: {
        id: string;
        url: string;
        title: string;
        subreddit: string;
   }
}

export type TrendingCardProps = {
    post: TrendingPost
}
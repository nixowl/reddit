import { getTodaysHottest } from '@/api/getPosts'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react'
import { TrendingPost } from '../types'
import { TrendingCard } from './ui/trendingCard'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

export const Trending = () => {
    const [posts, setPosts] = useState<TrendingPost[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const posts = await getTodaysHottest()
            console.log(posts)
            setPosts(posts)
        }

        fetchData()
    }, [])

    return (
        <div className="">
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 4000,
                        stopOnMouseEnter: true,
                        stopOnInteraction: true,
                        stopOnFocusIn: true,
                    }),
                    WheelGesturesPlugin(),
                ]}
                className=""
            >
                <CarouselContent className="-ml-1">
                    {posts &&
                        posts.map((post, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-1 sm:basis-1/2 lg:basis-1/3 rounded-lg p-2"
                            >
                                <div className="rounded-xl">
                                    <TrendingCard post={post} />
                                </div>
                            </CarouselItem>
                        ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default Trending

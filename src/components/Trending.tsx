import { getTodaysHottest } from "@/api/getTodaysHottest";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from "react";
import { TrendingPost } from "./types";
import { TrendingCard } from "./ui/trendingCard";

export const Trending = () => {
    const [posts, setPosts] = useState<TrendingPost[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const posts = await getTodaysHottest();
            console.log(posts);
            setPosts(posts);
        }

        fetchData();
    }, [])

    return (
        <div>
            <h2 className="text-xl">Top posts today</h2>
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
                ]}
                className="mx-14"
            >
                <CarouselContent className="-ml-1">
                    {posts &&
                        posts.map((post, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-1 md:basis-1/2 lg:basis-1/3 rounded-lg"
                            >
                                <div className="p-2 rounded-xl">
                                    <TrendingCard post={post} />
                                </div>
                            </CarouselItem>
                        ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Trending;
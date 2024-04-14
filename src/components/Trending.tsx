import { getTodaysHottest } from "@/api/getTodaysHottest";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from 'embla-carousel-autoplay'

export const Trending = async () => {
    const posts = await getTodaysHottest();
    console.log(posts);

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
                    }),
                ]}
                className="mx-10"
            >
                <CarouselContent className="-ml-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-1 md:basis-1/2 lg:basis-1/3 rounded-lg"
                        >
                            <div className="p-1 rounded-xl">
                                <Card className="rounded-xl">
                                    <CardContent className="flex aspect-square items-center justify-center p-6 rounded-lg shadow-md">
                                        <span className="text-2xl font-semibold">
                                            {index + 1}
                                        </span>
                                    </CardContent>
                                </Card>
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
import { Card, CardContent } from "./card"
import { TrendingCardProps } from "../types"
import { useState } from "react"


export const TrendingCard = ({ post }: TrendingCardProps) => {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <div className="p-2 rounded-xl">
            <Card className="rounded-xl duration-500 ease-in-out transition-all hover:scale-105">
                <CardContent
                    style={{
                        backgroundImage: `url(${post.data.url})`,
                    }}
                    onMouseEnter={() =>
                        setIsHovering(true)
                    }
                    onMouseLeave={() =>
                        setIsHovering(false)
                    }
                    className={`flex aspect-square items-center justify-center rounded-xl shadow-md bg-cover bg-center overflow-hidden`}
                >
                    <div className="bg-gradient-to-t from-black/80 to-transparent h-full w-full flex items-end p-5 ease-in-out hover:from-black duration-500 transition-all ">
                        {isHovering && (
                            <h3
                                className="">
                                {post.data.title}
                            </h3>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
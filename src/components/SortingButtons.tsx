import { Clock, Crown, Flame, TrendingUp } from "lucide-react"
import { Button } from "./ui/button"
import { AppDispatch } from "@/redux/store"
import { useAppDispatch } from "@/hooks"
import { useNavigate } from "react-router-dom"
import { setSortingOption } from "@/redux/sortingSlice"

export const SortingButtons = () => {
     const dispatch: AppDispatch = useAppDispatch()
     const navigate = useNavigate()
     const handleClick = (sortingOption: string) => {
         navigate(`/${sortingOption}`)
         dispatch(setSortingOption(sortingOption))
     }
    
    return (
        <div className="flex gap-3 w-full justify-center">
            <Button
                className="flex gap-1 text-md"
                onClick={() => handleClick('hot')}
            >
                <Flame /> Hot
            </Button>
            <Button
                className="flex gap-1 text-md"
                onClick={() => handleClick('rising')}
            >
                <TrendingUp /> Rising
            </Button>
            <Button
                className="flex gap-1 text-md"
                onClick={() => handleClick('top')}
            >
                <Crown /> Top
            </Button>
            <Button
                className="flex gap-1 text-md"
                onClick={() => handleClick('new')}
            >
                <Clock /> New
            </Button>
        </div>
    )
}
import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonCard() {
    return (
        <div className="py-2 px-4 flex flex-col space-y-3 max-w-screen-xl">
            <Skeleton className="h-[300px] rounded-xl" />
            <div className="space-y-2 p-4">
                <Skeleton className="w-[250px]" />
                <Skeleton className="w-[200px]" />
            </div>
        </div>
    )
}

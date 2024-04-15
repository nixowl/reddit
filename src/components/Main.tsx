import { Key, useEffect } from 'react'
import { Feed } from './Feed'
import { AppDispatch, RootState } from '@/redux'
import { fetchPosts } from '@/redux/postsSlice'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { setSortingOption } from '@/redux/sortingSlice'
import { SkeletonCard } from './ui/skeletonCard'

export const Main = () => {
    const dispatch: AppDispatch = useAppDispatch()
    const { posts, isLoading, error } = useAppSelector(
        (state: RootState) => state.posts
    )
    const { sortingOption } = useAppSelector(
        (state: RootState) => state.sorting
    )

    useEffect(() => {
        dispatch(fetchPosts('hot'))
        const option = location.pathname.slice(1)
        dispatch(setSortingOption(option))
        dispatch(fetchPosts(sortingOption))
    }, [location, dispatch, sortingOption])

    return (
        <div>
            {isLoading ? (
                <>
                    {Array.from({ length: 5 }).map(
                        (_: any, index: Key | null | undefined) => (
                            <SkeletonCard key={index} />
                        )
                    )}
                </>
            ) : error ? (
                <>
                    <h2 className="text-3xl">Something went wrong 😱</h2>
                    <p>{error}</p>
                </>
            ) : (
                <Feed postsArray={posts} className="" />
            )}
        </div>
    )
}

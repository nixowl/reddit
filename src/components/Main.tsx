import { useEffect } from 'react'
import { Feed } from './Feed'
import { AppDispatch, RootState } from '@/redux'
import { fetchPosts } from '@/redux/postsSlice'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { setSortingOption } from '@/redux/sortingSlice'

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
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <Feed postsArray={posts} className="max-w-screen-lg" />
            )}
        </div>
    )
}

import { useAppSelector } from "@/lib/hooks"
import { RootState } from "@/redux/store"

const PostPage = () => {

      const { currentPostId } = useAppSelector(
          (state: RootState) => state.postPage
      )

  return (
      <div>
          <p>{currentPostId}</p>
    </div>
  )
}

export default PostPage
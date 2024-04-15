import { useAppSelector } from "@/lib/hooks"
import { RootState } from "@/redux/store"

const Subreddit = () => {

  const { currentSubreddit } = useAppSelector((state: RootState) => state.subreddit)

  return (
      <div>
          <p>{currentSubreddit}</p>
      </div>
  )
}

export default Subreddit
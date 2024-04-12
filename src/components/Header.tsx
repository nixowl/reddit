import { Bird } from "lucide-react"

const Header = () => {
  return (
      <header className="w-full bg-muted p-4">
          <div className="flex flex-row gap-2 items-center">
              <Bird size={32} />
              <h1 className="text-xl">scrowl</h1>
          </div>
      </header>
  )
}

export default Header
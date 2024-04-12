import { cn } from "@/lib/utils"

export const Sidebar = ({
    className,
    children
}: {
        className?: string;
        children?: React.ReactNode;
}) => {
  return (
      <div
          className={cn(
              'flex flex-col p-4 h-full',
              className
          )}
      >
            {children}
      </div>
  )
}

export default Sidebar
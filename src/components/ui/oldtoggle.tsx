import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

export function OldToggle() {
    const { setTheme, theme } = useTheme()

    function toggleTheme() {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <Button onClick={toggleTheme} variant="ghost" size="icon">
            {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </Button>
    )
}

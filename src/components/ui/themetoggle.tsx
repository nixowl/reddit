import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
    const { setTheme, theme } = useTheme();

     function toggleTheme(): void {
         setTheme(theme === 'dark' ? 'light' : 'dark')
     }

    return (
        <>
            <button onClick={toggleTheme}>
                {theme === 'dark' ? (
                    <Sun className="h-5 w-5" />
                ) : (
                    <Moon className="h-5 w-5" />
                )}
            </button>
        </>
    )
}

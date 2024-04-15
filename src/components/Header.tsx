import { Bird } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react';
import UserDropdown from './UserDropDown';
import { Button } from './ui/button';

type HeaderProps = {
    onMenuToggle: (isOpen: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ className, onMenuToggle }: { className?: string }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header
            className={cn(
                'fixed z-50 top-0 w-full border-b-[1px] bg-background backdrop-blur-sm px-2 py-1',
                className
            )}
        >
            <nav className="max-w-screen-xl flex flex-wrap items-center justify-between lg:justify-around mx-auto p-2">
                <div className="flex items-center space-x-3 p-2 ">
                    <UserDropdown
                        isOpen={isMenuOpen}
                        onClose={() => setIsMenuOpen(false)}
                    />

                    <button
                        data-collapse-toggle="navbar-user"
                        type="button"
                        className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-user"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <a
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <Bird />
                    <h1 className="text-2xl hidden md:block">scrowl</h1>
                </a>

                <div className="items-center justify-between" id="navbar-user">
                    <input
                        type="text"
                        id="search-navbar"
                        className="flex w-full rounded-full border border-input bg-background py-2 px-5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Search..."
                    />
                </div>
                <Button
                    variant="secondary" 
                    className="px-5 py-1 text-md">
                    Log In
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                    id="user-menu-button"
                >
                    hi
                </Button>
            </nav>
        </header>
    )
}

export default Header

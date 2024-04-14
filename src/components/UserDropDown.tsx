import React from 'react'
import { ThemeToggle } from '../components/ui/themetoggle'
import { Card } from './ui/card'


interface UserDropdownProps {
    isOpen: boolean
    onClose: () => void
}

const UserDropdown: React.FC<UserDropdownProps> = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed top-0 left-0 w-full h-full z-50 ${
                isOpen ? 'block' : 'hidden'
            }`}
            onClick={onClose}
        >
            <Card
                className="absolute right-4 top-14 z-50 p-2 text-base list-none text-foreground rounded-xl shadow-lg bg-card"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Dropdown menu */}
                <div
                    className="z-50 my-4 text-foreground list-none divide-y divide-foreground rounded-lg bg-card border-b-[1px] border-foreground w-[170px]"
                    id="user-dropdown"
                >
                    <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900 dark:text-white">
                            name
                        </span>

                    </div>

                    <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Settings
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Earnings
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Sign out
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mx-auto flex items-center justify-center">
                    <ThemeToggle />
                </div>
            </Card>
        </div>
    )
}

export default UserDropdown

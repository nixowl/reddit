import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './components/Main'
import Sidebar from './components/Sidebar'
import Trending from './components/Trending'
import './globals.css'
import { useState } from 'react';
import UserDropdown from './components/UserDropDown';
import { SortingButtons } from './components/SortingButtons';
function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Router>
            <>
                <Header onMenuToggle={setIsMenuOpen} />
                <UserDropdown
                    isOpen={isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                />

                <section className="flex-1 bg-background grid grid-cols-4 auto-rows-auto gap-1">
                    <Sidebar className="col-span-1 bg-background text-muted-foreground m-2">
                        hello
                    </Sidebar>
                    <div className="flex flex-col gap-2 col-span-3 m-2">
                        <Trending />
                        <SortingButtons />
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/hot" element={<Main />} />
                            <Route path="/new" element={<Main />} />
                            <Route path="/top" element={<Main />} />
                            <Route path="/rising" element={<Main />} />
                            <Route path="/:subreddit" element={<Main />} />
                            <Route path="/posts/:id" element={<Main />} />
                        </Routes>
                    </div>
                </section>

                <footer className="px-4 py-2 flex items-center justify-center">
                    {/* Screen size indicators */}
                    <div className="fixed bottom-1 left-1 z-50 flex size-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
                        <div className="block sm:hidden">xs</div>
                        <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
                            sm
                        </div>
                        <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">
                            md
                        </div>
                        <div className="hidden lg:block xl:hidden 2xl:hidden">
                            lg
                        </div>
                        <div className="hidden xl:block 2xl:hidden">xl</div>
                        <div className="hidden 2xl:block">2xl</div>
                    </div>{' '}
                </footer>
            </>
        </Router>
    )
}

export default App

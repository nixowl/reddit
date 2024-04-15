import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Main } from './components/Main'
import {
    DefaultSidebarContent,
    Sidebar,
    SubredditSidebarContent,
} from './components/Sidebar'
import Trending from './components/Trending'
import './globals.css'
import { RootState } from './redux/store'
import { useState } from 'react'
import UserDropdown from './components/UserDropDown'
import { SortingButtons } from './components/SortingButtons'
import { useAppSelector } from './lib/hooks'
import Subreddit from './components/Subreddit'
import { AuthorizationCallback } from './components/AuthorizationCallback'

function App() {
    const { currentSubreddit } = useAppSelector(
        (state: RootState) => state.subreddit
    )
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <Router>
            <>
                <Header onMenuToggle={setIsMenuOpen} />
                <UserDropdown
                    isOpen={isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                />

                <section className="flex-1 bg-gradient-to-tl from-slate-50 to slate-200 dark:from-slate-950 dark:to-slate-800  grid grid-cols-4 auto-rows-auto gap-1 max-w-screen-xl">
                    <Routes>
                        <Route
                            path={'/'}
                            element={
                                <Sidebar className="col-span-1 pt-4">
                                    <DefaultSidebarContent />
                                </Sidebar>
                            }
                        />
                        <Route
                            path={'/hot'}
                            element={
                                <Sidebar className="col-span-1 pt-4">
                                    <DefaultSidebarContent />
                                </Sidebar>
                            }
                        />
                        <Route
                            path={'/new'}
                            element={
                                <Sidebar className="col-span-1 pt-4">
                                    <DefaultSidebarContent />
                                </Sidebar>
                            }
                        />
                        <Route
                            path={'/top'}
                            element={
                                <Sidebar className="col-span-1 pt-4">
                                    <DefaultSidebarContent />
                                </Sidebar>
                            }
                        />
                        <Route
                            path={'/rising'}
                            element={
                                <Sidebar className="col-span-1 pt-4">
                                    <DefaultSidebarContent />
                                </Sidebar>
                            }
                        />
                        <Route
                            path="/r/:subreddit"
                            element={
                                <Sidebar className="col-span-1 pt-4">
                                    <SubredditSidebarContent
                                        subreddit={currentSubreddit}
                                    />
                                </Sidebar>
                            }
                        />
                    </Routes>
                    <div className="flex flex-col gap-2 col-span-4 md:col-span-3 m-4 mt-24">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <>
                                        <Trending />
                                        <SortingButtons />
                                        <Main />
                                    </>
                                }
                            />
                            <Route
                                path="/hot"
                                element={
                                    <>
                                        <Trending />
                                        <SortingButtons />
                                        <Main />
                                    </>
                                }
                            />
                            <Route
                                path="/new"
                                element={
                                    <>
                                        <Trending />
                                        <SortingButtons />
                                        <Main />
                                    </>
                                }
                            />
                            <Route
                                path="/top"
                                element={
                                    <>
                                        <Trending />
                                        <SortingButtons />
                                        <Main />
                                    </>
                                }
                            />
                            <Route
                                path="/rising"
                                element={
                                    <>
                                        <Trending />
                                        <SortingButtons />
                                        <Main />
                                    </>
                                }
                            />
                            <Route
                                path="/r/:subreddit"
                                element={<Subreddit />}
                            />
                            <Route path="/posts/:id" element={<Main />} />
                            <Route
                                path="/authorize_callback/*"
                                element={<AuthorizationCallback />}
                            />
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

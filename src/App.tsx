import Header from './components/Header'
import { Main } from './components/Main'
import Sidebar from './components/Sidebar'
import Trending from './components/Trending'
import './globals.css'

function App() {
    return (
        <>
           <Header />
            <section className="flex-1 bg-background grid grid-cols-4 auto-rows-auto gap-1">
                <Sidebar className="col-span-1 bg-background text-muted-foreground m-2">
                    hello
          </Sidebar>
          <div className="flex flex-col gap-2 col-span-3 m-2">
            <Trending />
            <Main />
          </div>
            </section>

            <footer className="px-4 py-2 flex items-center justify-center">
                Hello from the footer
            </footer>
        </>
    )
}

export default App

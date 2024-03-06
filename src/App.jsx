import { Hero, Navbar, Trending } from "./components";

function App() {
  
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className="px-8">
        <Navbar />
      </div>

      <div className="px-8">
        <Hero />
      </div>

      <div className="px-8 flex justify-center items-center">
        <Trending />
      </div>

    </div>
  )
}

export default App

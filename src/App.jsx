import { Artists, Hero, Navbar, Trending, Clients } from "./components";

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

      <div className="px-8 flex justify-center items-center">
        <Artists />
      </div>

      <div className="px-8 flex justify-center items-center">
        <Clients />
      </div>

    </div>
  )
}

export default App

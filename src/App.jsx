import Artists from "./components/Artists"
import Clients from "./components/Clients"
import Hero from "./components/Hero"
import MarketPlace from "./components/MarketPlace"
import Navbar from "./components/Navbar"
import Trending from "./components/Trending"


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
        <MarketPlace />
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

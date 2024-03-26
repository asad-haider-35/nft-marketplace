import { Artists, Hero, Navbar, Trending, Clients, Footer, MarketPlace } from "./components";

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

      <div className="px-8 flex justify-center items-center">
        <Footer />
      </div>

    </div>
  )
}

export default App

import { Hero, Navbar } from "./components";

function App() {
  
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className="px-8">
        <Navbar />
      </div>

      <div className="px-8">
        <Hero />
      </div>

    </div>
  )
}

export default App

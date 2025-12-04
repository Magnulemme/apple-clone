import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-14">
        <Hero />
        <Products />
      </div>
    </div>
  )
}

export default App

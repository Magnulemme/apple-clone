import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Products from './components/Products';

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-14">
        <Hero />
        <Products />
        <Showcase />
      </div>
    </div>
  )
}

export default App

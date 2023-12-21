import Header from "./components/Header"
import Hero from "./components/Hero"
import Artworks from "./components/Artworks"
import Footer from "./components/Footer"
const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="gradient-bg-hero">
         <Header />
         <Hero />
      </div>
      <Artworks />
      <Footer />
    </div>

  )
}

export default App

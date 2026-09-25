import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import BrandShowcase from "./components/BrandShowcase";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <Hero />
        <BrandShowcase />
      </main>
    </>
  )
}

export default App;
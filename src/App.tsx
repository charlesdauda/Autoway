import Hero from "./components/Hero";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <Hero />
      </main>
    </>
  )
}

export default App;
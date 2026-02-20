
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'


function App() {
  return (
    <div className="site">
      <Header />
      <Hero />

      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App

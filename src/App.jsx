import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Services from './components/Services'
import Process from './components/Process'
import CTA from './components/CTA'
import About from './components/About'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <div className="App">
      <Header onOpenAbout={() => setAboutOpen(true)} />

      <main>
        <Hero />
        <Clients />
        <Services />
        <Process />
        <CTA />
      </main>

      <Footer onOpenAbout={() => setAboutOpen(true)} />

      <About open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </div>
  )
}

export default App

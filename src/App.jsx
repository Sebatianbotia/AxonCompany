import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Services from './components/Services'
import Process from './components/Process'
import CTA from './components/CTA'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
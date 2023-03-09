import React from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Footer'

function App(){
  return(
    <div>
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;

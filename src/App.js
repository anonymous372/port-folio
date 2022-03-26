import React from 'react';
import "./App.css"

// Components
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About" 
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

const App = () => {
  return(
    <div id="app">
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Footer />
    </div>
  )

}

export default App
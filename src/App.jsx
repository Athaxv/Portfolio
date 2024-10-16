import About from './components/About'
import Firstsection from './components/Firstsection'
import './App.css'
import Navbar from './components/Navbar'
import Responsive from './components/Responsive'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Responsive/>
      <Firstsection/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/home/home'
import About from './components/About/About'
import Page from './components/Page/Page'

const App = () => {
  return (
    <div>
      <Page/>
      <Navbar/>
      <Home/>
      <About/>
    </div>
  )
}

export default App
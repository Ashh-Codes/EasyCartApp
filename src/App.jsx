import { useState } from 'react'

import './App.css'
import { Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'
import Help from './pages/Help'


function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/help' element={<Help />} />
      
    </Routes>
    <Footer/>
    </>
    
  )
}

export default App

import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Page1 from './Pages/Page1'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/page2' element={<h1>cd</h1>}/>
      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<h1>ab</h1>
        }/>

                <Route path='/page2' element={<h1>cd</h1>
        }/>
      </Routes>
    </>
  )
}

export default App

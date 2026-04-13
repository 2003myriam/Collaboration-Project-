import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Page2 from './Pages/Page2'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<h1>ab</h1>
        }/>

                <Route path='/page2' element={<Page2/>
        }/>
      </Routes>
    </>
  )
}

export default App

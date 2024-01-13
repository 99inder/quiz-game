import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'

const App = () => {
  return (
    <div className='min-w-screen min-h-screen bg-gradient-to-t from-[rgba(2,0,36,1)] from-0% via-[rgba(9,9,121,1)] via-60% to-[#00076a] to-100% font-poppins'>
      <span className='opacity-0'>.</span>
      <div className='max-w-[1440px] mx-auto'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/result/:score' element={<Result />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
import React from 'react'
import CoverLetter from './components/coverLetter'
import Interests from './components/Interests'


const App = () => {
  return (
    <div className='w-full min-h-screen'>
        <CoverLetter/>
        <Interests />
    </div>
  )
}

export default App
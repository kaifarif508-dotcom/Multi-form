import React from 'react'
import Personal from './components/Personal'
import Address from './components/Address'
import CVV from './components/CVV'
import Reviw from './components/Reviw'
import { Route, Routes } from 'react-router-dom'
import Result from './components/Result'

const App = () =>{
  
return (
  <div className="min-h-screen w-full bg-[#181D23] flex items-center justify-center px-4 py-10 sm:px-6 md:px-10 lg:px-20">

    <div className="w-full">

      <Routes>

        <Route path="/" element={<Personal />} />
        <Route path="/address" element={<Address />} />
        <Route path="/cvv" element={<CVV />} />
        <Route path="/review" element={<Reviw />} />
        <Route path="/result" element={<Result />} />

      </Routes>

    </div>

  </div>
)
}

export default App
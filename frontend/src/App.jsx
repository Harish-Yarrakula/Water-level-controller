import React from 'react'
import HomePage from './pages/Homepage'
import AnalyticsPage from './pages/AnalyticsPage'
import PairDevice from './pages/PairDevice'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/pairup' element={<PairDevice/>} />
        <Route path='/Dashboard' element={<AnalyticsPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

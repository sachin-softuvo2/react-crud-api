import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllUser from './components/AllUsers'
import CreateUsers from './components/CreateUsers'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllUser/>} exact/>
        <Route path='/create' element={<CreateUsers/>}/>
      </Routes>
     </BrowserRouter>
  )
}

export default Router
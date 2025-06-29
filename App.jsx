import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import Register from './Pages/Register.jsx'
import Attendee from './Components/Attendee.jsx'


const App = () => {
  return (

     <>


            


             <Routes>

              <Route path='/' element={<Home/>}/>
              <Route path='/register' element={<Register />}/>
             

             </Routes>
             
     </>
      
      
   
  )
}

export default App

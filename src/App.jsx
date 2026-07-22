import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './App.css'
import './index.css'

function App() {
  

  return (

    <>
  <div className='text-4xl text-red-600'>
    As Salamu-Alaikum
  </div>

    <button className='btn btn-primary' 
    onClick= { () => {toast.success("Wow!")}}

    
    > Toast Me</button>


    <ToastContainer />
  </>
  )
}

export default App

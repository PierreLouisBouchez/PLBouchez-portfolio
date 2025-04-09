import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
        <Header/>
        <div className='w-full justify-evenly flex p-8 text-2xl'>
          <div>

          <p class="  h-dvh w-full  font-bold   ">
          Pierre-Louis Bouchez
          </p>
          </div>
          <div className='w-1/2'>
            <img src="https://cdnb.artstation.com/p/assets/images/images/055/814/221/large/paouis-untitledenhanced.jpg?1667824304" alt="" srcset="" />
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default App

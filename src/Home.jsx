import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
    
    <div className='back'>
           <div className='box'>
           <h1>ANYONE CAN COOK</h1>
           <Link to={'/search'}><button>find your recipe</button></Link>
           </div>
    </div>
    </>
  )
}

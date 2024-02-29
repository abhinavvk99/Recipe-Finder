import axios from 'axios'
import React, { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

export const Search = () => {

    const[data,setData]=useState([])
    const[strMeal,setstrMeal]=useState()

    const handleChange=(event)=>{
        setstrMeal(event.target.value)
    }
    const handleSubmit=async()=>{
        setstrMeal(strMeal)
        let response= await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`)
        console.log(response.data.meals);
        setData(response.data.meals)
    }
  return (
    <div style={{padding:'5%'}}>
        <h1 style={{textAlign:'center'}} className='cate'>Search your recipe</h1>
        <div className='d-flex justify-content-center align-items-center flex-column'>
        <input type="text" placeholder='enter recipe name' onChange={handleChange} className=' form-control w-75  ' />
        <br />
        <button onClick={handleSubmit} className='but btn btn-primary w-75 '>search</button>
        </div>
        <br />
            <div className='d-flex justify-content-center  align-items-center '>
            {data &&
              <div>
                {data.map((item)=>(
                    <>
                    <div className='box2 d-flex justify-content-center flex-column align-items-center'>
                        <h1>{item.strMeal}</h1>
                        <img src={item.strMealThumb} alt=""  className='img-fluid rounded-3 w-75 '/>
                        <Link to={`/cook/${item.idMeal}`}><button className='btn btn-primary mt-2   w-75 '>lets cook it</button></Link>
                    </div>
                    </>
                ))}
              </div>
            }
        </div>
    </div>
  )
}

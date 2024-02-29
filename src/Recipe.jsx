import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './App.css'
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch } from 'react-redux';
import { AddFavourite } from './addtofav';

export const Recipe = () => {


    const{idMeal}=useParams()
    console.log(idMeal);

    const dispatch=useDispatch()

    const[data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            console.log(response);
            setData(response.data.meals)
            setLoading(false)
        }
        fetchdata()
    },[])

  return (
    <div>
       {loading ?(
        <div className='d-flex justify-content-center align-items-center  '>
              <Spinner animation="border" variant="primary" size='xxl'/>
        </div>
       ):(
        <div className='d-flex justify-content-center align-items-center m-auto  '>
        {data.map((item)=>(
           <>
            <div style={{padding:'5%',textAlign:'center'}}>
               <h1 className='cate'>{item.strMeal}</h1>
               <img src={item.strMealThumb} alt={item.strMeal} className='img-fluid rounded-3 w-25 ' />
               <div className='cate1' style={{fontSize:'2rem'}}>
                   <span className='p-2'>Category: {item.strCategory}</span>
                   <span className='p-2'>Area:{item.strArea}</span>
               </div>
               <div className='p-4'>
               <button className='btn btn-danger w-50 ' onClick={()=>dispatch(AddFavourite(item))}>Add to Favourite</button>
               </div>
               <h2 style={{textDecoration:'underline'}} className='cate1'>INSTRUCTIONS</h2>
               <p className='cate2'>{item.strInstructions}</p>
               <ul style={{listStyle:'none',fontSize:'2rem'}} className='cate1'>
                   <h2 style={{textDecoration:'underline'}}>INGREDIENTS</h2>
                   <li>{item.strIngredient1}</li>
                   <li>{item.strIngredient2}</li>
                   <li>{item.strIngredient3}</li>
                   <li>{item.strIngredient4}</li>
                   <li>{item.strIngredient5}</li>
                   <li>{item.strIngredient6}</li>
                   <li>{item.strIngredient7}</li>
                   <li>{item.strIngredient8}</li>
                   <li>{item.strIngredient9}</li>
                   <li>{item.strIngredient10}</li>
                   <li>{item.strIngredient11}</li>
                   <li>{item.strIngredient12}</li>
                   <li>{item.strIngredient13}</li>
                   <li>{item.strIngredient14}</li>
                   <li>{item.strIngredient15}</li>
                   <li>{item.strIngredient16}</li>
                   <li>{item.strIngredient17}</li>
                   <li>{item.strIngredient18}</li>
                   <li>{item.strIngredient19}</li>
                   <li>{item.strIngredient20}</li>
               </ul>
               <a href={item.strYoutube}><button className='btn btn-primary  w-50  '>click to see video</button></a>
            </div>
           </>
        ))}

  </div>
       )}
    </div>
  )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';

export const Countrydetail = () => {

    const{strArea}=useParams()
    console.log(strArea);
    const[data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${strArea}`)
            console.log(response);
            setData(response.data.meals)
            setLoading(false)
        }
        fetchdata()
    },[])

  return (
    <div>
          <div>
               <h1 className='cate p-5 '>{strArea}</h1>
           {loading ?(
            <div className='d-flex justify-content-center align-items-center  '>
                   <Spinner animation="border" variant="primary" size='xxl'/>
            </div>
           ):(
            <div className='d-flex flex-wrap '>
            {data.map((item)=>(
                <>
                <div className='p-5'>
                    <div className='box2'>
                       <img src={item.strMealThumb} alt={item.strMealThumb} className=' img-fluid w-75 rounded-3 ' />
                       <h1>{item.strMeal}</h1>
                       <Link to={`/cook/${item.idMeal}`}><button className='btn btn-primary w-75  '>lets cook it</button></Link>
                    </div>
                </div>
                </>
            ))} 
           </div>
           )}   
     </div>
    </div>
  )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';


export const Category = () => {

    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            console.log(response);
            setData(response.data.categories)
            setLoading(false)
        }
        fetchdata()
    },[])
  return (
    <div>
        <h1 className='cate p-5'>category</h1>
            {loading ? (
                <div className='d-flex justify-content-center align-items-center  '>
                    <Spinner animation="border" variant="primary" size='xxl'/>
                </div>
            ):(
                <div className='d-flex flex-wrap '>
            {data.map((item)=>(
                <>
                <div className='p-5'>
                    <div className='box2'>
                       <Link to={`/detail/${item.strCategory}`}><img src={item.strCategoryThumb} alt={item.strCategoryThumb} className=' img-fluid ' /></Link>
                       <h1>{item.strCategory}</h1>
                    </div>
                </div>
                </>
            ))} 
           </div> 
            )}  
    </div>
  )
}

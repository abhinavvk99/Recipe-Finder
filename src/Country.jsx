import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';

export const Country = () => {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
            console.log(response);
            setData(response.data.meals)
            setLoading(false)
        }
        fetchdata()
    },[])
  return (
    <div style={{padding:'5%'}}>
        <h1 className='cate p-5 '>country</h1>
            {loading ?(
                <div className='d-flex justify-content-center align-items-center  '>
                     <Spinner animation="border" variant="primary" size='xxl'/>
                </div>
            ):(
                <div className='d-flex flex-wrap justify-content-center  '>
                {data.map((item)=>(
                    <>
                    <div className='p-5'>
                        <div className='box2'>
                           <h1>{item.strArea}</h1>
                           <Link to={`/countrydetail/${item.strArea}`}><button className='btn btn-primary w-75 '>view recipes</button></Link>
                        </div>
                    </div>
                    </>
                ))} 
               </div> 
            )}  
    </div>
  )
}

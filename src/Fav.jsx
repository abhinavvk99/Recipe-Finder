import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveFavourite } from './addtofav';
import { Link } from 'react-router-dom';

export const Fav = () => {

  const {favs} =useSelector(item=>item.fav)
  console.log(favs);
  const dispatch=useDispatch()

  if (!favs || favs.length === 0) {
    return <h2 style={{textAlign:'center',margin:'auto'}} className='cate p-5'>No favourites</h2>
  }

  return (
    <div style={{padding:'2%'}}>
        <div className='d-flex flex-wrap justify-content-center align-items-center p-5  '>
        {favs?.map((item)=>(
           <>
            <div className='p-5'>
            <div className='box2'>
               <h1 style={{fontSize:'2rem'}}>{item.strMeal}</h1>
               <img src={item.strMealThumb} alt={item.strMeal} className='img-fluid rounded-3 w-75 ' />
                   <h2 style={{fontSize:'1rem'}}>Category: {item.strCategory}</h2>
                   <h2 style={{fontSize:'1rem'}}>Area:{item.strArea}</h2>
               <button className='btn btn-danger w-75' onClick={()=>dispatch(RemoveFavourite(item))}>Remove</button>
               <Link to={`/cook/${item.idMeal}`}><button className='btn btn-primary w-75 mt-2'>Full Recipe</button></Link>
            
            </div>
            </div>
           </>
        ))}

  </div>
    </div>
  )
}

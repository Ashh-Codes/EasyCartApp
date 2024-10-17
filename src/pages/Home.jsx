import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import Category from '../components/Category'
import View from '../components/View'



const Home = () => {
  const [addProductResponse,setaddProductResponse]= useState("")
  const [removeproductResponseFromCategory,setremoveproductResponseFromCategory]=useState("")
  const [removeCategoryResponseFromView,setremoveCategoryResponseFromView] =useState("")

  return (
    <div style={{paddingTop:'80px'}}>
      <div className="container-fluid mb-5">
       
        <div className='text-end'>
        <Link to={'/history'}><button className='btn btn-info'>Purchase History <i className="fa-solid fa-basket-shopping"></i></button></Link>

        </div>
        
      <div className="container-fluid row d-flex justify-content-between mt-5">
        <div className="col-lg-6">
        <Add setaddProductResponse={setaddProductResponse}/>
          <h3 className='text-white'>All Products</h3>
           <View addProductResponse={addProductResponse} removeproductResponseFromCategory={removeproductResponseFromCategory} setremoveCategoryResponseFromView={setremoveCategoryResponseFromView}/>
        </div>
        <div className="col-lg-6">
        <Category setremoveproductResponseFromCategory={setremoveproductResponseFromCategory} removeCategoryResponseFromView={removeCategoryResponseFromView}/>
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home

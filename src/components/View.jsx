import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import ProductsCard from './ProductsCard'
import { addProductDetailsAPI, getAllProductsAPI, getSingleCategoryAPI, updateCategoryAPI } from '../services/allAPI'



const View = ({addProductResponse,removeproductResponseFromCategory,setremoveCategoryResponseFromView}) => {
    const [allProducts,setallProducts]=useState([])
    const [deleteProductResponse,setdeleteProductResponse] =useState("")

    useEffect(()=>{
        getAllProducts()
    },[addProductResponse,deleteProductResponse,removeproductResponseFromCategory])

    const getAllProducts =async()=>{
        const result = await getAllProductsAPI()
        //console.log(result);
        
        if(result.status>=200 && result.status<300){
            
            setallProducts(result.data)
        }
    }
    const productDropFromCategory=async(e)=>{
        const {categoryId,product} = JSON.parse(e.dataTransfer.getData("dataShare"))
        console.log(`product ${product.id} dropped from category ${categoryId} to allproducts `);
        //delete product from category
        const {data} = await getSingleCategoryAPI(categoryId)
        console.log(data);
        const updatedCategoryProductList = data?.allProducts?.filter(item=>item.id!=product.id)
        console.log(updatedCategoryProductList);

        const {id,categoryDetails} = data
        const result = await updateCategoryAPI(categoryId,{id,categoryDetails,allProducts:updatedCategoryProductList})
        setremoveCategoryResponseFromView(result)

        await addProductDetailsAPI(product)
        getAllProducts()
        
        
        
    }
    const onDragOverview=(e)=>{
        e.preventDefault()
    }
  // console.log(allProducts);
   
    
  return (
   <>
   <Row  droppable='true' onDragOver={e=>onDragOverview(e)} onDrop={e=>productDropFromCategory(e)}>
   {
    allProducts.length?
    allProducts?.map(product=>(
        <Col key={product?.id} className='mb-4' sm={12} md={6} lg={4}>
        <ProductsCard displayProduct={product} setdeleteProductResponse={setdeleteProductResponse}/>
        </Col> 
    )
    ):
    <div className="text-danger fw-bolder">No Products added yet!!</div>
   }
   </Row>
   </>
  )
}

export default View

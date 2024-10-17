import React, { useEffect, useState } from 'react'
import { Modal,Button,Form,FloatingLabel} from 'react-bootstrap'
import ProductsCard from './ProductsCard';
import { addCategoryAPI, getCategoryAPI, getSingleProductAPI, removeCategoryAPI, removeProductAPI,updateCategoryAPI } from '../services/allAPI';


const Category = ({setremoveproductResponseFromCategory,removeCategoryResponseFromView}) => {
    const [categoryDetails,setcategoryDetails]=useState("")
    const [allCategory,setallCategory] = useState([])
    const [show, setShow] = useState(false);
    const [showCards, setShowCards] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(()=>{
        getAllCategory()
    },[removeCategoryResponseFromView])

    const toggleCards = () => {
        setShowCards(!showCards);
      };
    const handleCategory=async()=>{
        if(categoryDetails){
            await addCategoryAPI({categoryDetails,allProducts:[]})
            setcategoryDetails("")
            handleClose()
            getAllCategory()
        }else{
            alert("Please fill the category Name")
        }
    }

    const getAllCategory= async()=>{
        const response = await getCategoryAPI()
        if(response.status>=200 && response.status<300){
            setallCategory(response.data)
        }
    }
    console.log(allCategory);
    const removeCategory=async(categoryId)=>{
        await removeCategoryAPI(categoryId)
        getAllCategory()
    }
    const productDrop=async(e,categoryId)=>{
        const productId= e.dataTransfer.getData("pid")
        console.log(`dropping inside category ${categoryId}`);
        //add product to category
        const {data}=await getSingleProductAPI(productId)
        console.log(data);
        let selectedCategory = allCategory?.find(item=>item.id==categoryId)
        selectedCategory.allProducts.push(data)
        console.log(selectedCategory);
        //save updated category to json server
        await updateCategoryAPI(categoryId,selectedCategory)
        const result = await removeProductAPI(productId)
        setremoveproductResponseFromCategory(result)
        getAllCategory()
        

    }
    const dragovercategory=(e)=>{
        e.preventDefault()
    }

    const categoryProductDrag=(e,product,categoryId)=>{
        console.log(`dragging product from category ${categoryId}`);
        let dataShare = {product,categoryId}
        e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
    }
  return (
    <>
    <div className="d-flex justify-content-end ">
        <h5 className='mt-2'>Add Category</h5>
        
        <button onClick={handleShow} style={{width:'50px',height:'50px'}}    className='btn btn-info ms-3 mb-3 fw-folder fs-5'>+</button>
        

    </div>
    <div className="container-fluid mt-3">
        {   
            allCategory?.length>0 ?
            allCategory?.map(categoryItem=>(
                <div droppable="true" onDragOver={e=>dragovercategory(e)} onDrop={e=>productDrop(e,categoryItem?.id)} className='border shadow border-black rounded p-3'>
                <div className="d-flex justify-content-end">
                            <h5 className='mt-2'>{categoryItem?.categoryDetails}</h5>
                            <button  onClick={toggleCards} className='btn'><i className="fa-solid fa-chevron-down"></i></button>
                            <button onClick={()=>removeCategory(categoryItem?.id)} className='btn'><i className='fa-solid fa-trash text-danger ms-5'></i></button>
                 </div>
                 {
                    showCards &&
                    (
                        <div className="row mt-2">
                        {
                            categoryItem?.allProducts?.length>0 &&
                            categoryItem?.allProducts?.map(product=>(
                                <div draggable={true} onDragStart={e=>categoryProductDrag(e,product,categoryItem?.id)} key={product?.id} className="col-lg-4 mt-3 ms-3">
                        
                                <ProductsCard displayProduct={product} insideCategory={true}/>
                                </div>
                            ))
                        }
                   </div>
                    )
                 }
                </div>
                
                
                 
            )):
            <div className="text-danger d-flex fw-bolder justify-content-end">
                      No category added yet!!!
                    </div>

        }
    
    </div>
    


   
    <Modal centered show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInputName"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control  onChange={e=>setcategoryDetails(e.target.value)} type="text" placeholder="Category Name" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='' onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleCategory} variant='secondary' className='btn btn-secondary'>Add</Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Category

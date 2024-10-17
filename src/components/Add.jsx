import React, { useState } from 'react'
import { Button,Modal ,Form,FloatingLabel} from 'react-bootstrap'
import { addProductDetailsAPI } from '../services/allAPI'


const Add = ({setaddProductResponse}) => {
    const [productDetails,setproductDetails] =useState({
        productName:"",
        url:"",
        link:"",
        price:"",
        site:""
    })
   // console.log(productDetails);
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddProduct=async()=>{
        const {productName,url,link,price,site} =productDetails
        if(productName && url && link&& price&& site){
            const result =  await addProductDetailsAPI(productDetails)
           // console.log(result);
            if(result.status>=200 && result.status<300){
                handleClose()
            setproductDetails({productName:"",url:"",link:"",price:"",site:""})
            alert("Product added successfully!!")
            setaddProductResponse(result)
            }
            
        }
        else{
            alert("Please enter product details")
        }
        
    }
  return (
   <>
   <div className="d-flex align-items-center">
   <h5>Add new Product</h5>
   <button onClick={handleShow} style={{width:'50px',height:'50px'}} className="btn btn-info ms-3 mb-2  fw-bolder fs-5">+</button>
   </div>
   <Modal style={{minHeight:'80vh'}}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
          <FloatingLabel
        controlId="floatingInputCaption"
        label="Product Name"
        className="mb-3"
      >
        <Form.Control onChange={e=>setproductDetails({...productDetails,productName:e.target.value})} type="text" placeholder="Name" />
            {/* spread operator(...) */}
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputImage"
        label="Image url"
        className="mb-3"
      >
        <Form.Control onChange={e=>setproductDetails({...productDetails,url:e.target.value})} type="text" placeholder="Image url" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputlink"
        label="Product link"
        className="mb-3"
      >
        <Form.Control onChange={e=>setproductDetails({...productDetails,link:e.target.value})}  type="text" placeholder="Product Link" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputsite"
        label="Ecommerce Site"
        className="mb-3"
      >
        <Form.Control onChange={e=>setproductDetails({...productDetails,site:e.target.value})}  type="text" placeholder="Ecommerce Site" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputPrice"
        label="Product Price"
        className="mb-3"
      >
        <Form.Control onChange={e=>setproductDetails({...productDetails,price:e.target.value})} type="text" placeholder="Product Price" />
      </FloatingLabel>

      
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddProduct} variant='secondary'  className='btn btn-secondary'>Add</Button>
        </Modal.Footer>
      </Modal>
   
   </>
  )
}

export default Add

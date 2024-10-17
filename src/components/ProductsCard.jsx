import React, { useState } from 'react'
import { Card, CardText,Modal,Button} from 'react-bootstrap'
import { purchaseHistoryAPI, removeProductAPI } from '../services/allAPI';


const ProductsCard = ({displayProduct,setdeleteProductResponse,insideCategory}) => {
    console.log(displayProduct);
    
    
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [purchaseshow, setpurchaseShow] = useState(false);

  const handlepurchaseClose = () => setpurchaseShow(false);
  const handlepurchaseShow = () => setpurchaseShow(true);
  
  const handleShow = async() => {
    setShow(true);
    
  }
  //add product to purchase history
  const handlePurchase=async(purchaseId)=>{
    const {productName,url,link,site,price}=displayProduct
    const sysTime = new Date()
    const timeStamp =sysTime.toLocaleDateString('en-US',{year:'numeric',month:'2-digit',day:'2-digit'})
    console.log(timeStamp);
    const productData= {productName,link,timeStamp,price,site} 
    await purchaseHistoryAPI(productData)
    removeProduct(purchaseId)
    handlepurchaseClose(true)
  }

  const removeProduct=async(productId)=>{
   const result= await removeProductAPI(productId)
   //pass response to view component
   setdeleteProductResponse(result?.data)
  }

  const productDragStart=(e,productId)=>{
    console.log(`Dragging started for product :${productId}`);
    e.dataTransfer.setData("pid",productId)
    

  }

  return (
    <>
    <Card draggable={true} onDragStart={e=>productDragStart(e,displayProduct?.id)} style={{width:'200px', cursor: 'pointer'}}  className='rounded'>
    <Card.Img onClick={handleShow} variant="top" height={'200px'} src={displayProduct?.url} />
      <Card.Body>
      <p className='mt-2'>{displayProduct?.productName}</p>
        <Card.Text className='d-flex justify-content-between'>
          {
            !insideCategory &&
            <>
            
            <button style={{width:'120px',height:'50px'}} onClick={handlepurchaseShow}  className='btn btn-success ms-1'>Purchased</button>
          <button onClick={()=>removeProduct(displayProduct?.id)}  className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
          </>
          }
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Modal  centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayProduct?.productName}</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
            <div className="row">
                <div className="col-lg-6">
                <img  width={'200px'} height={'200px'} className='img-fluid border rounded' src={displayProduct?.url} alt="" />
                
                </div>
                <div className="col-lg-6">
                <p>Price :{displayProduct?.price}</p>
                <p>Website :{displayProduct?.site}</p>
               
                <div>
                Product Link : <a href={displayProduct?.link} >{displayProduct?.site}</a>
                </div>
                </div>
            </div>
       
        </Modal.Body>
      </Modal>
      <Modal show={purchaseshow} onHide={handlepurchaseClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Purchase</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you confirm the product as purchased?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handlepurchaseClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={()=>handlePurchase(displayProduct?.id)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default ProductsCard

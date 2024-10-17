import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'

const History = () => {
  const [historyData,sethistoryData] = useState([])
  const [totalPrice,settotalPrice] = useState(0)
  useEffect(()=>{
    if(historyData.length>0){
      settotalPrice(historyData?.map(item=>item.price)?.reduce((a,b)=>parseFloat(a)+parseFloat(b)))
    }
    getHistory()
  },[historyData])

  const getHistory = async()=>{
    const response = await getHistoryAPI()
    console.log(response);
    if(response.status>=200 && response.status<300){
      sethistoryData(response.data)
    }
    
  }

  const removeHistory=async(historyId)=>{
    await removeHistoryAPI(historyId)
    getHistory()
  }
  console.log(historyData);
  
  return (
    <>
    <div className='container' style={{paddingTop:'80px'}}>
    <div className="container mb-5 d-flex justify-content-between">
      <h2>Purchase History</h2>
      <Link className='text-decoration-none' to={'/home'}><i className="fa-solid fa-arrow-left"></i> Home</Link>
      </div>
      <table className='my-5 shadow table'>
        <thead >
          <tr >
            <th className='text-light'>#</th>
            <th className='text-light'>Product Name</th>
            <th className='text-light'>Site</th>
            <th className='text-light'>Date of Purchase</th>
            <th className='text-light'>Price</th>
            <th className='text-light' ><i className="fa-solid fa-ellipsis-vertical ms-3"></i></th>
          </tr>
        </thead>
        <tbody>
          
           {
            historyData.length>0?
            historyData?.map((details,index)=>(
              <tr key={details?.id}>
              <td>{index+1}</td>
              <td>{details?.productName}</td>
              <td>{details?.site}</td>
              <td>{details?.timeStamp}</td>
              <td>{details?.price}</td>
              <td><button onClick={()=>removeHistory(details?.id)}  className="btn"><i class="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
            ))
            :
            <div className="text-danger fw-bolder">Your Purchase history is empty</div>

           }
            
          
         
        </tbody>
      </table>
      <div className='d-flex justify-content-center '>
        <button className='btn btn-success'>Purchase Total:{totalPrice}</button>
      </div>
    </div>
    </>
    
  )
}

export default History

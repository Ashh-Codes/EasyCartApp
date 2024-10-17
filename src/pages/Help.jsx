import React from 'react'

const Help = () => {
  return (
   <>
    <div>
      <div className='container' style={{paddingTop:'100px'}}>
      <ol className='text-white'>
        <li>You can start by clicking on 'Get Started' button to Redirect to Home page</li>
        <li>In home page you have options to add product details and categoriese them.</li>
        <li>Use add product and in the opening,enter deatils from ecommerce website,you can copy product image from ecommerce website itself</li>
        <li>You haev option to mark product as purchased and can also delete product</li>
        <li>Products can be categorised by drag and drop and viceversa.</li>
        <li>By clicking on chevron you can make changes to visibility of categories.</li>
        <li>By marking as purchased,product will be removed from home  and will be added to purchase history.</li>
        <li>In Purchase history you can see list of purchased products.</li>
        <li>Purchase history provides details like which site,price,date of purchase.also you can delete product from history.</li>
        <li>Total purchase gives total spent on purchased products.</li>
      </ol>
      </div>
    </div>
   </>
  )
}

export default Help

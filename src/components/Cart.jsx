import React from 'react'

const Cart = ({element,index}) => {



  return (
   <>
      
     
        <div className="col cartbox ">
          <img src={element.image} alt="" width='300px' height='200px'/>
          <h4 className='w-70' >{element.titile}</h4>
          <p>{element.author}</p>
          <p>{element.datas}</p>
        </div>
    

  
  


   
   </>
  )
}

export default Cart
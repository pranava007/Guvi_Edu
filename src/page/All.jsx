import React from 'react'
import Nav from '../components/Nav'
import Cart from '../components/Cart'

const All = ({data}) => {
  
    

  return (
   <>
   <div>
   <Nav/>
   </div>
   <br />
  <div className='container'>
   <div className="row gap-1  ">

    <h2>All</h2>

   {data.map((element,index)=>{
         return(
            <Cart element={element} index={index}/>
         )
    })}
  
    </div>
    </div>




  
 
   

   </>
  )
}

export default All
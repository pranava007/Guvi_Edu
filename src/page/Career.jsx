import React from 'react'
import Nav from '../components/Nav'
import Cart from '../components/Cart'


const Career = ({data}) => {
  const filter = data.filter((ele)=>ele.Head === " Career ")
  return (
   <>
   <Nav/>
   <br />
   <div className='container'>
   <div className="row gap-1  ">
    
     <h2>Career</h2>
     {filter.map((element,index)=>{
         return(
            <Cart element={element} index={index}/>
         )
    })}
    </div>
    </div>
   </>
  )
}

export default Career
import React from 'react'
import Nav from '../components/Nav'
import Cart from '../components/Cart'


const Cyber = ({data}) => {

  const filter = data.filter((ele)=>ele.Head === " cyber")
  return (
   <>
   <Nav/>
   <br />
   <div className='container'>
   <div className="row gap-1  ">
     <h2>Cyber Security</h2>
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

export default Cyber
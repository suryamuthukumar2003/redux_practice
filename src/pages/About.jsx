import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function About() {
  const veg=useSelector((state)=>state.vegInfo.vegetable);
  console.log(veg);
  return (
    <div>
      {veg?.map((data,index)=>{
        return(
          <div key={index}>
            <p>{data}</p>
          </div> 
        )
      })}
    </div>
  )
}

export default About
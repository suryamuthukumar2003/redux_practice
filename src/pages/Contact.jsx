import React, { useRef} from 'react'
import { useDispatch } from 'react-redux';
import {setVeg} from '../slices/vegeSlices';
function Contact() {
  const inputRef=useRef();
  const dispatch=useDispatch();
  const addVege=(event)=>{
    event.preventDefault();
    dispatch(setVeg(inputRef.current.value))
  }
  return (
    <div>
      <input type='text' ref={inputRef}/>
      <button onClick={addVege}>Add</button>
    </div>
  )
}

export default Contact
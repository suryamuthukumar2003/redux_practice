import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Routes } from 'react-router-dom'
import { deleteUser } from '../slices/userSlices';

function User() {
  const user=useSelector((state)=>state.usersInfo.users)
  const dispatch=useDispatch();
  console.log(user);
  const deleteUserInfo=(index)=>{
    dispatch(deleteUser(index));
  }
  return (
    <div>
      {user?.map((user,index)=>{
        return(
          <div key={index}>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <h3>{user.email}</h3>
            <h4>{user.contact}</h4>
            <button onClick={()=>deleteUserInfo(index)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default User
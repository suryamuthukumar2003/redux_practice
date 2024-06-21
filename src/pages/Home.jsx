import { useState } from 'react'

function Home() {
  const [formInput, setFormInput] = useState({
    name:"",
    age:"",
    email:"",
    contact:""
  });
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setFormInput((currInput)=>{
      return{
        ...currInput,
        [name]:value,
      }
    })
    console.log(formInput)
  }
  return (
    <div>
      <form action="">
        <br />
        <br />
        <label htmlFor="">Name</label>
        <br />
        <input name='name' type='text' value={formInput.name} onChange={handleChange}/>
        <br />
        <label htmlFor="">Age</label>
        <br />
        <input name='age' type='number' value={formInput.age} onChange={handleChange}/>
        <br />
        <label htmlFor="">Email</label>
        <br />
        <input name='email' type='text' value={formInput.email} onChange={handleChange}/>
        <br />
        <label htmlFor="">Contact</label>
        <br />
        <input name='contact' type='number' value={formInput.contact} onChange={handleChange}/>
        <br />
        <br />
        <button>add</button>
        </form>
    </div>
  )
}

export default Home
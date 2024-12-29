import React, { useRef } from 'react'

const UseRef = () => {
    const username=useRef(null);
    const password=useRef(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(username.current.value);
        console.log(password.current.value);
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' ref={username}/>
        <input type='text' ref={password}/>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default UseRef
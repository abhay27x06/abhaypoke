import React, { forwardRef, useRef } from 'react'

const ForwardRef = () => {
    const username = useRef(null);
    const password = useRef(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(username.current.value);
        console.log(password.current.value);
    }
  return (
    <form onSubmit={handleSubmit}>
    <Input ref={username}/>
    <Input ref={password}/>
    </form>
  )
}
const Input = forwardRef((props, ref)=>{

    return (
        <input type='text' ref={ref}/>
    )
});
export default ForwardRef
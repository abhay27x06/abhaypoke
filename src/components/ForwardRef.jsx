import React, { forwardRef, useRef } from 'react'

const ForwardRef = () => {
    const username = useRef(null);
    const password = useRef(null);
  return (
    <div>
    <Input ref={username}/>
    <Input ref={password}/>
    </div>
  )
}
const Input = forwardRef((props, ref)=>{

    return (
        <input type='text' ref={ref}/>
    )
});
export default ForwardRef
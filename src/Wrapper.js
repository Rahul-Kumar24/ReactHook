import React, {useEffect, useState} from 'react'
import Example from './Example'
import './App.css'
const Wrapper = () => {
          const [count , setCount]=useState(0);
          const onClickhandle = () => {
                    setCount(count+1);
          }
          const name = "Rahul"
          return (
                    <div className="wrapper">
                              <h1>{count}</h1>
                              <br/>
                              <button type="button" class="btn btn-primary" onClick={onClickhandle}>Click</button>
                              {count>1&&<Example count = {count}/>}
                    </div>
          )
}

export default Wrapper

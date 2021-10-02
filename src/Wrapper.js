import React, {useEffect, useState} from 'react'
import Example from './Example'
import './App.css'
const Wrapper = () => {
          const [count , setCount]=useState(0);
          const onClickhandle = () => {
                    setCount(count+1);
          }
          return (
                    <div className="wrapper">
                              <h1>{count}</h1>
                              <br/>
                              < button onClick={onClickhandle}>click</button>
                              <Example/>
                    </div>
          )
}

export default Wrapper

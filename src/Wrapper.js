import React, {useEffect, useState} from 'react'
import Example from './Example'
import './App.css'
const Wrapper = () => {
          const [count , setCount]=useState(0);
          const onClickhandle = () => {
                    setCount(count+1);
          }
          // useEffect(()=>{
          //           console.log("hello");
          // },[])
          const name = "Rahul"

          const [ title , setTitle ] = useState("Example");
          useEffect(()=>{
                    document.title = title;
          },[title])
          return (
                    <div className="wrapper">
                              <h1>{count}</h1>
                              <br/>
                              <button type="button" class="btn btn-primary" onClick={onClickhandle}>Click</button>
                              {<Example count = {count}/>}
                              {/* {count < 5 && <Example count={-1} />} */}
                    </div>
          )
}

export default Wrapper

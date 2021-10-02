import React, {useEffect} from 'react'

const Example = (props) => {
          // const item=props.item.name;
          // const count = props.item.count;
          // console.log(count)
          // console.log("Befor useEffect  ", item)
          useEffect(() =>{
                    // console.log("Inside useEffect  ", item);
                    return ()=>{
                              // console.log("inside function return ",item)
                    }
          },[])
          console.log("After useEffect ",item)
          return (
                    <div>
                              {console.log("withen div function ",item)}
                    </div>
          )
}

export default Example

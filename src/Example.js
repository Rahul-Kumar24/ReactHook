import React, {useEffect, useState} from 'react'
const Example = ({count}) => {
          // const item=props.item.name;
          // const count = props.item.count;
          // console.log(count)
          const [ posts, setPosts]=useState([])
          console.log("Befor useEffect " )
          // useEffect(() =>{
          //           console.log("Inside useEffect  ", count);
          // },[])

          useEffect(()=>{
                    fetch("https://jsonplaceholder.typicode.com/posts")
                    .then((response) => response.json())
                    .then((data)=> setPosts(data));
                    console.log(posts)
          },[]);
          if(count=>2){
                    posts.id=count;
          }
          // console.log(posts)
          // console.log("After useEffect ",item)
          return (
                    <div>
                              {posts.map((p, id)=>(
                                        <div>
                                                  {id==1&&<h1>{p.title}</h1>}
                                                  {/* <h1>{p.subtitle}</h1> */}
                                        </div>
                              ))}
                    </div>
          )
}

export default Example

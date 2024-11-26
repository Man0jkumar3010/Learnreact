// import React from 'react'

const Child = ({post}) => {
    console.log("post ==>",post);
    
  return (
    <>
    <h1>Child</h1>
    <ul>
        {post?.map((item)=>{
            return <li key={item.id}>{item.title}</li>
        })}
    </ul>
  </>  
  )
}

export default Child
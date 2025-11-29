import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/vikashgoswami30`)
    //     .then(response => response.json())
    //     .then(data =>{
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center m-4 p-4 bg-gray-600 text-3xl'>Github followers : {data.followers}
    
    <img src={data.avatar_url} alt="githubpicture" width={300 } />
    </div>
  )
}

export default Github

export const githubLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/vikashgoswami30')
  return response.json() 
}
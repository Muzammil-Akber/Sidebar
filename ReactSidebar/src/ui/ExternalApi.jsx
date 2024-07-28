import React, { useEffect, useState } from 'react'

function ExternalApi() {
    const [fetchdata,Setfetchdata]=useState([]);

const URL=`https://jsonplaceholder.typicode.com/posts`;



const fetchdatafromApi=async(fetchlink)=>{
       const Res= await fetch(fetchlink)
        const data  = await Res.json()
       Setfetchdata(data)
}

useEffect(()=>{
    fetchdatafromApi(URL);
},[])

  return (
    <>
<h2>Data From External Api </h2>

{
    fetchdata.map((item)=>(
        <>
        <div key={item.id} >

         <li className=' list-none mt-2 '>
         <h2 className='bg-gray-400 p-3 rounded-2xl font-semibold text-lg'> {item.title} </h2>
         </li>
        
           </div>
           </>
    ))
}



    
    </>
  )
}

export default ExternalApi

import React, { useEffect, useState } from 'react'
import './Body.css'
import  axios from 'axios'
const Classes = () => {

    const [first, setfirst] = useState([])
    useEffect(() => {
     axios.get("http://localhost:8080/data").then((r)=>setfirst(r.data))
    
    }, [first])

  return (
  <>
<div>
    <p className='heading2'>Classes</p>
    <p className='cont2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, totam explicabo vero assumenda modi perspiciatis porro, esse a tempora repudiandae adipisci voluptas dolorem soluta quo qui? Dignissimos ipsum quia perspiciatis.</p>
</div>
 <div className='container'>
 {
    first.map((ele)=>{
   
        return(
            <div key={ele.ID} className="cont2">
           <img className="img1" src={ele.ImageUrl} alt="" srcset="" />
            <h3>{ele.Name}</h3>
            <p className='lop'>{ele.ShortDesc}</p>
            <button className='but2'>View</button>
       
       
               </div>
        )
        
       
    })
  }
 </div>

  </>
  )
}

export default Classes
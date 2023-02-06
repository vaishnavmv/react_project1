import React, { useState } from 'react'
import axios from 'axios'

function Axis() {
    axios.get('https://dummyjson.com/products').then((res)=>{
    console.log(res.data.products)
    setfirst(res.data.products)
})


    const [first, setfirst] = useState([])
  return (
    first.map((vai)=>
    <div>
        {vai.title}

    </div>
    )
  )
}

export default Axis
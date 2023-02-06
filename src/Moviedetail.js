import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { samplecontext } from './App';

function Moviedetail() {
  const [first, setfirst] = useState([])
    const data=useParams()
    console.log(data.id);
    const imageUrl = "https://image.tmdb.org/t/p/original/";



    const {sample,setsample,hide,sethide}= useContext(samplecontext)
    
    useEffect(() => {
     sethide(true)
    }, [])
    

    console.log(sample);

    const ids =sample.map((val)=>val.id)
    const datas = sample.filter( (sample) => sample.id === parseInt(data.id) );
    console.log(datas);
  
// const ids = first.map((val)=>val.id)
//     const datas = first.find((value)=> value.id ===  parseInt(data.id))
//     console.log(datas);

  return (
    <div style={{marginLeft:'20px',marginTop:'20px',color:'white'}}>
      {datas &&  
      <>
      <img style={{height:'700px',width:'1280px'}} src={imageUrl+datas[0]?.poster_path} />
      {/* <h1>  Id:{ datas[0]?.id}</h1> */}
      <h1>  Title:{ datas[0]?.title || datas[0]?.name}</h1>
      <h1></h1>
      <h1>Original_language:{ datas[0]?.original_language}</h1>
      </>
      }
    </div>
  )
}

export default Moviedetail
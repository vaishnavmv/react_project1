import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';

function Banner() {
    const imageUrl = "https://image.tmdb.org/t/p/original/";
 const API_KEY = "9948beaa1978b07ef733bcbe5e8d2849";
  
//   const ComedyMovies = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
   const LatestMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;
  
  // const PopularMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`;
 useEffect(() => {
  axios.get(LatestMovies).then((sum)=>{
    console.log(sum.data.results)
    setfirst(sum.data.results)
})
}, [])
 
 
const [first, setfirst] = useState([])
console.log(first[0]);
  return (
    <div class="App-container">
       {first[0] &&  <Card.Img style={{height:'750px',width:'1349px'}} src={imageUrl+first[0].backdrop_path}/>}
       {first[0] && <div class="App-centered">{first[0].title}
       </div>}


    </div>
    
  )
}

export default Banner
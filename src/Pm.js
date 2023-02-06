import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { samplecontext } from './App';
import './Pm.css';
function Pm(props) {
  const [first, setfirst] = useState([])
  const {sample,setsample,hide,sethide} = useContext(samplecontext)
 
  console.log(props.url);
  const imageUrl = "https://image.tmdb.org/t/p/original";

 useEffect(() => {
  axios.get(props.url).then((rus)=>{
    console.log(rus.data.results)
    setfirst(rus.data.results)
  setsample(first)
  // sethide(true)
})
 }, [first,hide])
 console.log(sample);
 
 
 
  return (
    first.map((aus)=>

      <div>
        <Link to={`/detail/${aus.id}`}>
        <Card style={{ float:'left',width: '17.5rem',height:'550px',marginLeft:'35px',marginTop:'20px',backgroundColor:'black'}}>
      <Card.Img style={{height:'300px',width:'280px'}} src={imageUrl+aus.poster_path || imageUrl+aus.backdrop_path}/>
      
      <Card.Body>
        <Card.Title>Title: {aus.title}</Card.Title>
        {/* <Card.Text>
        Genre_ids: {aus.genre_ids}
        </Card.Text> */}
        {/* <Card.Text>
        Id: {aus.id}
        </Card.Text> */}
        {/* <Card.Text>
        Original_title: {aus.original_title}
        </Card.Text> */}
        <Card.Text>
        Original_language: {aus.original_language}
         </Card.Text>
         {/* <Card.Text style={{width:'80%',marginLeft:'1px'}}>
         Overview: {aus.overview}
          </Card.Text> */}
         {/* <Card.Text>
         Popularity: {aus.popularity}
         </Card.Text> */}
         <Card.Text>
         Release_date: {aus.release_date}
         </Card.Text>
         {/* <Card.Text>
         Vote_average: {aus.vote_average}
         </Card.Text>
         <Card.Text>
         Vote_count: {aus.vote_count}
         </Card.Text> */}
        <Button style={{marginTop:'20px'}} variant="info">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Link>
    </div>
    )
  )
}

export default Pm

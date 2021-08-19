import React from "react";
import { Link} from "react-router-dom"
import ReactPlayer from "react-player";




const Description =(props)=> {
  
    return (
        <div>
<div >
   <h1> Movie Details :</h1> 
  <h4 style={{padding: '50px 0 0 50px' , fontFamily:'sans-serif', fontSize:'30px'}}> {props.location.state.movie.description}</h4>
</div>
<div>
    <h1> Movie Trailer :</h1>
    <ReactPlayer style={{padding: '50px 0 0 50px' , fontFamily:'sans-serif', fontSize:'30px'}} url ={props.location.state.movie.trailer} />
</div>
<Link to="/">
<button style={{fontSize:'20px' , 
                fontWeight:'bolder', 
                color:'#21130d',
                backgroundColor:'#e28743 ',
                 margin:'5% 40%',
                 padding:'10px 10px'
                 }}>
  Go Back</button>
</Link>
</div>
    )
}

export default Description 
import React from 'react';
import Rating from '../components/Rating'
import '../css/Searching.css'


const Searching=({setSearchByName, setSearchByRate, searchByRate} )=> {
    return(
    <div >
        <div>
        <input className='search' type= 'text' placeholder='enter the movie name ' 
        onChange={(e) => setSearchByName(e.target.value)}>
        </input>
        </div>
        <div className='rating'  >
            <Rating setSearchByRate={setSearchByRate} rate={searchByRate}/>
        </div>
       
   
    </div>
    )
}

export default Searching
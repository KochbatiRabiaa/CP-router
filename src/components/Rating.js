import React from "react";


const Rating = ({ rate , setSearchByRate }) => {
  const Stars = (y) => {
    let starsArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= y) {
        starsArray.push(<span   style={{ color: 'gold',fontSize: '30px'}} onClick={()=>setSearchByRate(i) }>★</span>);
      } else {
        starsArray.push(<span  style={{ color: 'gold',fontSize: '30px'}} onClick={()=>setSearchByRate(i) }>☆</span>);
      }
    }
    return starsArray;
  };

  return <div>{Stars(rate)}</div>;
};
Rating.defaultProps ={
setSearchByRate: () => {}
}
export default Rating;

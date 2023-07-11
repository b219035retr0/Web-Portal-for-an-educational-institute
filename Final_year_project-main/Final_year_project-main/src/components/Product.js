import React from "react";

export default function Product(props) {
  return (
    <div className="cardss" >
     
      <img  src={props.url} alt="product image" /> 
      <h2>{props.name}</h2>
      {/* <p className="price">{props.price}</p> */}
      <a href={props.urls}>{props.urls}</a>
    </div>
  );
}
import React from 'react';

const Card = props => {
  return (
      <div className="card">
        <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=640:*" alt="Avatar"
        className="card-photo"
        onClick={(e) => {props.handleClick();}}
        />
        <div className="container">
         <h4><b>Mozzarella-Stuffed Turkey Meatballs</b></h4>
         <p>Jenny Su</p>
        </div>
      </div>
  )
}

export default Card;

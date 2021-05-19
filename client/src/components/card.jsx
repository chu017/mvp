import React from 'react';

const Card = props => {
  return (
      <div className="card">
        <img src="https://realfood.tesco.com/media/images/Souffle-omelette-b7cf7c9a-8ac1-4b94-a2bc-e7b3436f323c-0-636x418.jpg"
        className="card-photo"
        onClick={(e) => {props.handleClick();}}
        />
        <div className="container">
         <h4><b>Soufflé Omelette</b></h4>
         <div className="card-profile">
          <img src="https://www.the-happy-chef.com/assets/img/team/team-3.jpg" className="profile-card"/>
          <p>Jack Ross</p>
         </div>
        </div>
      </div>
  )
}

export default Card;

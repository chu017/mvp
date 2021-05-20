import React from 'react';

const Card = props => {
  const { item } = props;
  const { imageURL, name, user, userURL, like } = item;
  return (
      <div className="card">
        <img src={imageURL}
        className="card-photo"
        onClick={(e) => {props.handleClick();}}
        />
        <div className="container">
         <h4><b>{name}</b></h4>
         <div>like:{like}</div>
         <div className="card-profile">
          <img src={userURL} className="profile-card"/>
          <p>{user}</p>
         </div>
        </div>
      </div>
  )
}

export default Card;

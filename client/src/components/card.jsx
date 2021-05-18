import React from 'react';

const Card = props => {
  return (
      <div className="card">
        <img src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" alt="Avatar" />
        <div className="container">
         <h4><b>John Doe</b></h4>
         <p>Architect & Engineer</p>
        </div>
      </div>
  )
}

export default Card;

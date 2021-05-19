import React from 'react';
import Card from './Card.jsx';

const Gallery = props => {
  return (
    <div>
      <h3>Popular recipes</h3>
      <div className="cards">
       <Card handleClick={props.handleClick} />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
        <Card />
      </div>
    </div>

  )
}

export default Gallery;

import React from 'react';
import Card from './Card.jsx';

const Gallery = props => {

  const { recipes } = props;

  return (
    <div>
      <h3>Popular recipes</h3>
      <div className="cards">
      {recipes.map( (item, i) => {
        return <Card item={item} key={i}
        handleClick={props.handleClick}
        />
      })}
      </div>
    </div>

  )
}

export default Gallery;

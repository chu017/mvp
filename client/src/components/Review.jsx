import React from 'react';

const Review = props => {
  return (
    <div className="reviews">
      <h4><p>Reviews</p></h4>
      <div className="review">
        <h5><p>Peter Paker</p></h5>
        <p>One of the best dishes I cook.</p>
      </div>
      <div className="review">
        <h5><p>Jenny Su</p></h5>
        <p>I would love to try this dish!</p>
      </div>
    </div>
  )
}

export default Review;
import React from 'react';
import Card from './Card.jsx';

const Account = (props) => {
  var recipes = [];
  props.recipes.map( item => {
    if (item.user === 'Jack Ross') {
      recipes.push(item)
    }
  })


  return (
    <div>
      <div className="profile">
        <img src="https://www.the-happy-chef.com/assets/img/team/team-3.jpg" className="profile-photo"/>
        <div>
           <br></br>
           <h3>Jack Ross</h3>
           <div>Milan - Italy</div>
           <p>I love making Italian food.</p>
           <p>Posts: 6</p>
           <p>Followers: 120</p>
           <p>Following: 68</p>
        </div>
      </div>
      <br></br>
      <div className="cards">
      {recipes.map( (item, i) => {
        return <Card item={item} key={i}
        handleClick={props.handleClick}
        />
      })}
      </div>
    </div>
  );

};

export default Account;

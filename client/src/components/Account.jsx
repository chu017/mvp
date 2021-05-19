import React from 'react';
import Card from './Card.jsx';

const Account = (props) => {
  return (
    <div>
      <div className="profile">
        <img src="https://www.the-happy-chef.com/assets/img/team/team-3.jpg" className="profile-photo"/>
        <div>
           <br></br>
           <h3>Jack Ross</h3>
           <div>Milan - Italy</div>
           <p>I love making Italian food.</p>
        </div>
      </div>
      <br></br>
      <div className="cards">
       <Card  handleClick={props.handleClick} />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
      </div>
    </div>
  );

};

export default Account;

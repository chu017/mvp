import React from 'react';
import Card from './Card.jsx';
import AdminItem from './AdminItem.jsx';

const Admin = (props) => {
  return (
    <div>
      <div className="profile">
        <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=640:*" alt="Avatar" className="profile-photo"/>

        <h3>Calvin Hu</h3>

      </div>



      <div className="cards">
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
      </div>
    </div>
  );

};

export default Admin;

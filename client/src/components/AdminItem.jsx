import React from 'react';
import moment from 'moment';

const AdminItem = (props) => {
  return (
    <li className="post-list-entry">

      <div className="post-list-entry-title">{props.entry.title}</div>

      <div className="post-list-entry-byline">{props.entry.author + ' ' + moment(props.entry.createdAt).fromNow()}</div>

      <div className="stats-list-item-views">{'Views: ' + props.entry.views}</div>
    </li>
  );

};

export default AdminItem;

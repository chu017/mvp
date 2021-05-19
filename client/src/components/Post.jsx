import React from 'react';
import moment from 'moment';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <div className="post">
        {/* {console.log(this.props.recipe)}

        {this.props.update(this.props.recipes[0]._id)}


        <h1 className="post-title">{this.props.recipes[0].title}</h1>

        <div className="post-byline"><span className="post-byline-author">{this.props.posts[0].author}</span> {moment(this.props.posts[0].createdAt).fromNow()}</div>

        <img src={this.props.recipes[0].imageUrl} className="post-image"/>

        <div>{
          this.props.recipes[0].body.split('\n\n').map( (i, key) => {
            return <div key={key}>{i}</div>;
          })
        }</div> */}

      </div>
    );
  }
}

export default Post;

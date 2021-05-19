import React from 'react';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      title: '',
      url: '',
      body: ''
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    var post = e.target;
    console.log(post);

    var {name, value} = e.targe;
    this.setState({
      [name]: value
    });
  }

  createPost(e) {
    e.preventDefault();
    console.log(e.target);
    this.props.post(post);
  }

  render() {
    return (
      <div className="create">

        <div className="create-editor">
          <h2>AUTHOR</h2>

          <form>
            <input className="create-input" type="text"
              name="title"
              vaule={this.state.title}
              onChange={this.handleChange}
              placeholder="Post Title"></input>

            <input className="create-input" type="text"
              placeholder="Author"></input>

            <input className="create-input" type="text"
              placeholder="Image URL"></input>

            <textarea className="create-body-textarea"
              placeholder="Post Body"></textarea>

            <button className="create-submit-button" type="submit">
              Save post
            </button>

          </form>

        </div>

        <div className="create-preview">
          <h2>PREVIEW</h2>
          {/* <!-- you'll use your framework of choice to implement live preview here --> */}
        </div>

      </div>

    );
  }
}

export default Create;

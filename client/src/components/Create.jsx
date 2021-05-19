import React from 'react';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: '',
      ingredients: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  createPost(e) {
    e.preventDefault();
    const { recipe, ingredients, description } = this.state;

    console.log(recipe, ingredients, description);
    // this.props.post(post);
  }

  render() {
    return (
      <div className="create">

        <div className="create-editor">
          <h2>Add a Recipe</h2>

          <form onSubmit={this.createPost}>
            <h4>Step 1: Add a title</h4>
            <input className="create-input"
              name="recipe"
              type="text"
              vaule={this.state.recipe}
              onChange={this.handleChange}
              placeholder="Recipe Title"></input>
            <h4>Step 2: Upload the final image</h4>
            <input type="file" />

            <h4>Step 3: Add ingredients</h4>
            <input className="create-input"
              name="ingredients"
              type="text"
              vaule={this.state.ingredients}
              onChange={this.handleChange}
              placeholder="Ingredients"></input>

            <h4>Step 4: Descript method step by step</h4>

            <h5>Upload a image</h5>
            <input type="file" />

            <h5>Add description</h5>
            <textarea className="create-body-textarea"
              name="description"
              vaule={this.state.description}
              onChange={this.handleChange}
              placeholder="Method description"></textarea>

            <button className="create-submit-button" type="submit">
              Save recipe
            </button>
          </form>

        </div>

        <div className="create-preview">
          <h2>Preview</h2>
          {/* <!-- you'll use your framework of choice to implement live preview here --> */}
        </div>

      </div>

    );
  }
}

export default Create;

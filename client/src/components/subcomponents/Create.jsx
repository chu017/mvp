import React from 'react';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: '',
      imageURL: '',
      user: '',
      userURL: '',
      ingredients: '',
      description: '',
      fileArr: [],
      imgArr: [],
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleUpload = this.handleUpload.bind(this);
    this.postRecipe = this.postRecipe.bind(this);
    // this.fileInput = React.createRef();
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  // handleUpload(e) {
  //   const [file] = e.target.files;
  //   // console.log('inputed file: ', file);

  //   const newFileArr = this.state.fileArr;
  //   console.log(file, newFileArr);
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onlond = (e) => {
  //       file.src = e.target.result;
  //       newFileArr.push(file);
  //       this.setState({
  //         fileArr: newFileArr
  //       });
  //       console.log('lood:', fileArr);
  //     };
  //   }
  // }

  postRecipe(e) {
    e.preventDefault();
    const { recipe, imageURL, ingredients, description } = this.state;
    console.log(recipe, ingredients, description);
    const data = {
      name: recipe,
      imageURL: imageURL,
      description: description
    };
    this.props.postRecipe(data);

    // console.log(`File: ${this.fileInput.current.files[0].name}`);
    // const selectedFile = document.getElementById('input').files[0];
    // console.log('selected file: ', selectedFile);
  }

  render() {
    return (
      <div className="create">

        <div className="create-editor">
          <h2>Add a Recipe</h2>

          <form onSubmit={this.postRecipe}>
            <h4>Step 1: Add a title</h4>
            <input className="create-input"
              name="recipe"
              type="text"
              vaule={this.state.recipe}
              onChange={this.handleChange}
              placeholder="Recipe Title"></input>

            <input className="create-input"
              name="imageURL"
              type="text"
              vaule={this.state.imageURL}
              onChange={this.handleChange}
              placeholder="Image URL"></input>

            <h4>Step 2: Upload the final image</h4>
            <input type="file"
            id="input"
            // ref={this.fileInput}
            name="picture"
            accept="image/*"
            // onChange={this.handleUpload}
            />

            <h4>Step 3: Add ingredients</h4>
            <input className="create-input"
              name="ingredients"
              type="text"
              vaule={this.state.ingredients}
              onChange={this.handleChange}
              placeholder="Ingredients"></input>

            <h4>Step 4: Descript method step by step</h4>

            <h5>Upload a image</h5>
            <input type="file"
            id="input"
            // ref={this.fileInput}
            name="picture"
            accept="image/*"
            // onChange={this.handleUpload}
            />

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

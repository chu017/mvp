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
      cuisineType: '',
      mainIngredient: '',
      specialType: '',
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
              placeholder="Recipe Name"></input>

            <h4>Step 2: Upload the final image</h4>
            <input type="file"
            id="input"
            // ref={this.fileInput}
            name="picture"
            accept="image/*"
            // onChange={this.handleUpload}
            />

            <h4>Step 3: Pick the characteristics</h4>

            <label>Pick a cuisine type:
            <br />
            <select name='cuisineType' value={this.state.cuisineType} onChange={this.handleChange}>
                <option defaultValue="pick a cuisine type"></option>
                <option value="Italian">Italian</option>
                <option value="American">American</option>
                <option value="Mexican">Mexican</option>
                <option value="Chinese">Chinese</option>
                <option value="Japanese">Japanese</option>
                <option value="German">German</option>
                <option value="German">Indian</option>
            </select>
            </label>
            <br></br>
            <br></br>
            <label>Pick a main ingredient:
            <br />
            <select name='mainIngredient' value={this.state.mainIngredient} onChange={this.handleChange}>
                <option defaultValue="pick a main ingredient"></option>
                <option value="Beef">Beef</option>
                <option value="Chicken">Chicken</option>
                <option value="Pork">Pork</option>
                <option value="Fish">Fish</option>
                <option value="Lamb">Lamb</option>
                <option value="Lamb">Tofu</option>
            </select>
            </label>

            <br></br>
            <br></br>
            <label>Pick a special type:
            <br />
            <select name='specialType' value={this.state.specialType} onChange={this.handleChange}>
                <option defaultValue="pick a special type"></option>
                <option value="Health">Health</option>
                <option value="Spicy">Spicy</option>
                <option value="Sweet">Sweet</option>
                <option value="Viggie">Viggie</option>
                <option value="Family">Family</option>
                <option value="Holiday">Holiday</option>
                <option value="Creative">Creative</option>
            </select>
            </label>

            <h4>Step 4: Add ingredients</h4>
            <input className="create-input"
              name="ingredients"
              type="text"
              vaule={this.state.ingredients}
              onChange={this.handleChange}
              placeholder="Ingredients"></input>

            <h4>Step 5: Descript method step by step</h4>

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

          <br></br>
        </div>

        <div className="create-preview">
          {/* <h2>Preview</h2> */}
          {/* <!-- you'll use your framework of choice to implement live preview here --> */}
        </div>

      </div>

    );
  }
}

export default Create;

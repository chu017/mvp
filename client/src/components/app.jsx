import React from 'react';
import $ from 'jquery';
import Search from './subcomponents/Search.jsx';
import Gallery from './subcomponents/Gallery.jsx';
import Create from './subcomponents/Create.jsx';
import Account from './subcomponents/Account.jsx';
import Recipe from './subcomponents/Recipe.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'gallery',
      recipes: [],
      recipe:[]
    };
    this.postRecipe = this.postRecipe.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
  }

  componentDidMount() {
    this.getRecipes();
  }

  postRecipe(recipe) {
    $.ajax({
      url: '/recipes',
      type: 'POST',
      data: recipe,
      success: (e) => console.log(e),
      error: (e) => console.log(e)
    })
      .done(function() {
        console.log('Submitted');
      })
  }

  getRecipes() {
    $.ajax({
      url: '/recipes',
      type: 'GET',
      success: (recipes) => this.setState({recipes}),
      error: (e) => console.log(e)
    });
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

  renderView() {
    const {view} = this.state;

    if (view === 'gallery') {
      return <Gallery handleClick={() => {
        this.changeView('recipeview');
      }}
      recipes={this.state.recipes}
      recipe={this.state.recipe}
      getOne={this.getOne}/>;

    } else if (view === 'account') {

      return <Account handleClick={() => {
        this.changeView('recipeview');
      }}
      recipes={this.state.recipes}/>;

    } else if (view === 'create') {

      return <Create recipes={this.state.recipes}
      recipe={this.recipe}
      postRecipe={this.postRecipe}
      />;

    } else {
      return <Recipe
        recipes={this.state.recipes}
        recipe={this.state.recipe}
      />;
    }
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo"
            onClick={() => {
              // this.getAll();
              this.changeView('gallery');
            }}>
            Foodys
          </span>

          <div className="search">
           <Search
           recipes={this.state.recipes}
           />
          </div>

          <span className={this.state.view === 'gallery'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => {
            // this.getAll();
            this.changeView('gallery');
          }}>
            See all Recipes
          </span>

          <span className={this.state.view === 'create'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => this.changeView('create')}>
            Add a Recipe
          </span>

          <span className={this.state.view === 'account'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => this.changeView('account')}>
            <div className="card-profile">
               <img src="https://www.the-happy-chef.com/assets/img/team/team-3.jpg" className="profile-nav"/>
            </div>
          </span>

        </div>

        <div className="main">
          {this.renderView()}
        </div>

      </div>
    );
  }
}

export default App;

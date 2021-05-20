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
      show: false,
      view: 'gallery',
      recipes: [],
      recipe:[],
      searchedRecipes: [],
      searchTerm: ''
    };
    this.postRecipe = this.postRecipe.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchRecipes = this.searchRecipes.bind(this);
  }

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes() {
    $.ajax({
      url: '/recipes',
      type: 'GET',
    })
      .then ((recipes) => {
        this.setState({searchedRecipes: recipes})
        this.setState({recipes})
      })
      .then (() => {
        this.setState({ show: true })
      })
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

  changeView(option) {
    this.setState({
      view: option
    });
  }

  searchRecipes(term) {
    // console.log(term)
    var recipes = this.state.recipes;
    var newSearched = [];
    for (var i = 0; i < recipes.length; i++) {
      if (term === '') {
        this.setState({searchedRecipes: this.state.recipes})
      }
      if (recipes[i].name.toLowerCase().includes(term.toLowerCase())) {
        newSearched.push(recipes[i]);
        // var addRecipe = recipes[i];
      }

      this.setState({ searchedRecipes: newSearched });
    }
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  renderView() {
    const {view} = this.state;

    if (view === 'gallery') {
      return <Gallery handleClick={() => {
        this.changeView('recipeview');
      }}
      recipes={this.state.recipes}
      searchedRecipes={this.state.searchedRecipes}
      recipe={this.state.recipe}
      getOne={this.getOne}/>;

    } else if (view === 'account') {

      return <Account handleClick={() => {
        this.changeView('recipeview');
      }}
      recipes={this.state.recipes}
      searchedRecipes={this.state.searchedRecipes}
      />;

    } else if (view === 'create') {

      return <Create
      recipes={this.state.recipes}
      recipe={this.recipe}
      postRecipe={this.postRecipe}
      />;

    } else {
      return <Recipe handleClick={() => {
        this.changeView('account');
      }}
        recipes={this.state.recipes}
        searchedRecipes={this.state.searchedRecipes}
        recipe={this.state.recipe}
      />;
    }
  }

  render() {
    if (this.state.show === false) {
      return (
        <div className="loading">
          Loading ...
        </div>
      );
    }

    const { recipes, searchTerm, searchedItems } = this.state;

    return (
      <div>
        <div className="nav">
          <span className="logo"
            onClick={() => {
              this.getRecipes();
              this.changeView('gallery');
            }}>
            Foodys
          </span>


          <div className="search">
            <Search
            searchRecipes={this.searchRecipes}
            />
          </div>


          <span className={this.state.view === 'gallery'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => {
            this.getRecipes();
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

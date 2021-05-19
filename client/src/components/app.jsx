import React from 'react';
import $ from 'jquery';
import Search from './Search.jsx';
import Gallery from './Gallery.jsx';
import Create from './Create.jsx';
import Account from './Account.jsx';
import Post from './Post.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'gallery',
      recipes: [],
      recipe:[]
    };
  }

  componentDidMount() {

  }

  getAll() {
    $.ajax({
      url: 'http://localhost:3000/api/recipes',
      type: 'GET',
      success: (recipes) => this.setState({recipes}),
      error: (e) => console.log(e)
    });
  }

  post(recipe) {
    $.ajax({
      url: 'http://localhost:3000/api/recipes',
      type: 'POST',
      success: (e) => console.log(e),
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
      />;

    } else {
      return <Post
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
           <Search />
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

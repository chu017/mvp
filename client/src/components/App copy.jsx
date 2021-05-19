import React from 'react';
import $ from 'jquery';
import Search from './Search.jsx';
import Gallery from './Gallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="nav-bar">
          <h2>Foodys</h2>
          <Search />
          <br />
        </div>
        <br />
        <div className="gallery">
          <h3>Popular recipes</h3>
          <div>
            <Gallery />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

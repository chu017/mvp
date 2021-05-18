import React from 'react';
import $ from 'jquery';
import Search from './search.jsx';
import Gallery from './gallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
    render() {
      return (
        <div>
          <div>
            <Search />
          </div>
          <br />
          <div>
            <Gallery />
          </div>

        </div>
      );
    }
  }

  export default App;

import React from 'react';
import $ from 'jquery';
import Search from './search.jsx';

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

          <div>Hello World!!</div>
        </div>
      );
    }
  }

  export default App;

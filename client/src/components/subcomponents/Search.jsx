import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedTerm: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({searchedTerm: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert('A name was submitted: ' + this.state.searchMovie);
    const term = this.state.searchedTerm;
    console.log(term);
    this.props.searchRecipes(term);

  }

  render() {


    return (
      <div>

        <form onSubmit={this.handleSubmit}>

          <input
          type="text"
          value={this.state.searchedTerm}
          onChange={this.handleChange}
          placeholder="Search.." />
          <input type="submit" value="Go!" />

        </form>

      </div>
    );
  }
}

export default Search;

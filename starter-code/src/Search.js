import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    // this.handleSearch = this.handleSearch.bind(this);
  }
  // handleSearch(e) {
  //   console.log("handleSearch", e);
  //   // TODO: change the state searchText
  // }
  render() {
    return (
      <div>
        <h2>Search</h2>
        <input
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearch}
        />
      </div>
    );
  }
}

export default Search;

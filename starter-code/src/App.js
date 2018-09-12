import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import Search from "./Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }
  handleSearch(e) {
    console.log("this.state.searchText", e.target.value);
    this.setState({ searchText: e.target.value });

    // TODO: change the state searchText
  }
  render() {
    return (
      <div>
        <Search
          searchText={this.state.searchText}
          onSearch={e => this.handleSearch(e)}
        />
        {foods.map(food => (
          <FoodBox food={food} />
        ))}
      </div>
    );
  }
}
export default App;

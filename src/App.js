import React, { Component } from "react";
import "./App.css";
import AddItem from "./Components/AddItem/AddItem";
import ListItems from "./Components/ListItems/ListItems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["task1", "task2"],
    };
  }
  handleTask = (text) => {
    this.setState({ list: [...this.state.list, text] });
  };
  deleteTask = (index) => {
    this.setState({ list: this.state.list.filter((_, i) => i !== index) });
  };

  render() {
    return (
      <div>
        <AddItem handleTask={this.handleTask} />
        <ListItems list={this.state.list} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;

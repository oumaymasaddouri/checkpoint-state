import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handleText = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div className="Add">
        <input type="text" placeholder="Add text" onChange={this.handleText} />
        <button
          className="Button"
          onClick={() => this.props.handleTask(this.state.text)}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddItem;

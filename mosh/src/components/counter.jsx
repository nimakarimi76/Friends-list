import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 3,
    tags: ["tag 1", "tag 2", "tag 3"],
  };

  handleIncrement = () => {
    console.log(this.state);
  };

  style = {
    color: "green",
    padding: "1rem",
    textAlign: "center",
  };

  renderTags() {
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="container">
        <h1 style={this.style} className="card m-3">
          Counter App
        </h1>
        <button className="btn btn-primary m-3" onClick={this.handleIncrement}>
          increment
        </button>
        <h4 style={{ padding: "1rem" }} className={this.getCountClasses()}>
          {this.formatCount()}
        </h4>
        {this.state.tags.length == 0 && "Please create a tag"}
        {this.renderTags()}
      </div>
    );
  }
  formatCount() {
    let { count } = this.state;
    return count === 0 ? <h3 className="text-danger">Zero</h3> : count;
  }

  getCountClasses() {
    let classes = "m-2 text-";
    classes += this.state.count % 2 === 0 ? "info" : "success";
    return classes;
  }
}

export default Counter;

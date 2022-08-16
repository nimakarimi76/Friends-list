import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.initialValue,
    tags: ["tag 1", "tag 2", "tag 3"],
  };

  handleIncrement = () => {
    this.setState({ count: ++this.state.value });
  };
  handleDecrement = () => {
    this.setState({ count: --this.state.value });
  };

  style = {
    color: "green",
    padding: "1rem",
    textAlign: "center",
  };

  // renderTags() {
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}> {tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className="">
        {/* <h1 style={this.style} className="card m-3">
          Counter App
        </h1> */}
        <button className="btn btn-primary m-3" onClick={this.handleIncrement}>
          increment
        </button>
        <button className="btn btn-warning m-3" onClick={this.handleDecrement}>
          Decrement
        </button>
        <span style={{ padding: "1rem" }} className={this.getCountClasses()}>
          {this.formatCount()}
        </span>
        {/* {this.state.tags.length == 0 && "Please create a tag"}
        {this.renderTags()} */}
      </div>
    );
  }
  formatCount() {
    let { value: count } = this.state;
    return count === 0 ? (
      <span className="text-danger fw-bold fs-5 text-decoration-underline">
        Zero
      </span>
    ) : (
      count
    );
  }

  getCountClasses() {
    let classes = "m-2 text-";
    classes += this.state.value % 2 === 0 ? "info" : "success";
    return classes;
  }
}

export default Counter;

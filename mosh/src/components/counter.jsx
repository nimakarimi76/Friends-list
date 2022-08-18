import React, { Component } from "react";

class Counter extends Component {
  state = {
    tags: ["tag 1", "tag 2", "tag 3"],
  };

  // style = {
  //   color: "green",
  //   padding: "1rem",
  //   textAlign: "center",
  // };
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
    const { counterProps, onDecrement, onIncrement, onDelete } = this.props;
    return (
      <div className="row">
        {/* <h1 style={this.style} className="card m-3">
          Counter App
        </h1> */}
        <div className="col-2">
          <span
            style={{ padding: "0.8rem" }}
            className={this.getCountClasses()}
          >
            {this.formatCount()}
          </span>
        </div>

        <div className="col">
          <button
            className="btn btn-primary"
            onClick={() => onIncrement(counterProps)}
          >
            +
          </button>

          <button
            id="decrement"
            className={"btn btn-warning m-2"}
            onClick={() => onDecrement(counterProps)}
            disabled={counterProps.value === 0}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-small"
            onClick={() => onDelete(counterProps.id)}
          >
            x
          </button>
          {/* {this.state.tags.length == 0 && "Please create a tag"}
        {this.renderTags()} */}
        </div>
      </div>
    );
  }
  formatCount() {
    let { value: count } = this.props.counterProps;
    return count === 0 ? (
      <span className="text-danger text-decoration-underline">Zero</span>
    ) : (
      count
    );
  }

  getCountClasses() {
    let classes = "m-2 badge bg-";
    classes += this.props.counterProps.value % 2 === 0 ? "info" : "primary";
    return classes;
  }
}

export default Counter;

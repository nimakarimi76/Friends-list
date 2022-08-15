import React, { Component } from "react";

class Counter extends Component {
  // const [count, setCount] = useState(0)
  state = {
    count: 0,
  };
  handleIncrement = () => {
    this.state.count++;
    console.log(this.state.count);
  };
  render() {
    return (
      <div className="container">
        <h1 className="card m-3"> Counter App</h1>
        <button className="btn btn-primary m-3" onClick={this.handleIncrement}>
          increment
        </button>
        <span> {this.state.count}</span>
      </div>
    );
  }
}

export default Counter;

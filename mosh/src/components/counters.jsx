import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div className="pt-4">
        <button
          onClick={this.props.onReset}
          className="btn btn-outline-secondary m-2 btn-sm"
        >
          Reset
        </button>
        {this.props.counters.map((eachCounter) => (
          <Counter
            key={eachCounter.id} //! we don't have access to this because react use it internally
            counterProps={eachCounter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

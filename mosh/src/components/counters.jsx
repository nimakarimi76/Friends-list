import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onDecrement, onIncrement, onDelete, onReset } =
      this.props;
    return (
      <div className="pt-4">
        <button
          onClick={onReset}
          className="btn btn-outline-secondary m-2 btn-sm"
        >
          Reset
        </button>
        {counters.map((eachCounter) => (
          <Counter
            key={eachCounter.id} //! we don't have access to this because react use it internally
            counterProps={eachCounter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 1 },
      { id: 3, value: 1 },
      { id: 4, value: 3 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // this.setState({ counters: counters });
    //* or simpler
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.filter((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;

    this.setState({ counters });
  };

  render() {
    return (
      <div className="pt-4">
        <button
          onClick={this.handleReset}
          className="btn btn-outline-secondary m-2 btn-sm"
        >
          Reset
        </button>
        {this.state.counters.map((eachCounter) => (
          <Counter
            key={eachCounter.id} //! we don't have access to this because react use it internally
            counterProps={eachCounter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

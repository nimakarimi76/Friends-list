import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, initialValue: 1 },
      { id: 2, initialValue: 1 },
      { id: 3, initialValue: 1 },
      { id: 4, initialValue: 3 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // this.setState({ counters: counters });
    //* or simpler
    this.setState({ counters });
  };

  render() {
    return (
      <div className="pt-4">
        {this.state.counters.map((eachCounter) => (
          <Counter
            key={eachCounter.id} //! we don't have access to this because react use it internally
            counterProps={eachCounter}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

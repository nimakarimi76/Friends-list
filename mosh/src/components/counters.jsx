import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 3 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counters.map((eachCounter) => (
          <Counter key={eachCounter.id} initialValue={eachCounter.value} />
        ))}
      </div>
    );
  }
}

export default Counters;

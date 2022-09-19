import React, { Component } from "react";

class Habits extends Component {
  state = {
    habits: [
      { name: "reading", count: 0 },
      { name: "reading", count: 0 },
      { name: "reading", count: 0 },
    ],
  };
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => {
          <Habit />;
        })}
      </ul>
    );
  }
}

export default Habits;

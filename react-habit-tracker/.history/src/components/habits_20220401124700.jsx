import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { name: "reading", count: 0 },
      { name: "running", count: 0 },
      { name: "fishing", count: 0 },
    ],
  };
  render() {
    console.log(this.props.habit);
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit habit={habit} />
        ))}
      </ul>
    );
  }
}

export default Habits;

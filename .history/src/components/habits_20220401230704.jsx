import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  // habits 컴포넌트 안에 전체적인 데이터가 들어있기 때문에, 데이터가 변경되는 경우에
  // 이 컴포넌트 안에서 수정하는 로직을 가지고 있어야한다. 데이터를 가지고 있는 곳이 내가 데이터를 어떻게 다뤄야 하는지
  //알고 있는 최적의 장소이기 때문에 이곳에서 수정하는것이 좋다.
  state = {
    habits: [
      { id: 1, name: "reading", count: 0 },
      { id: 2, name: "running", count: 0 },
      { id: 3, name: "fishing", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    console.log(`handleIncrement ${habit}`);
  };
  handleDecrement = (habit) => {
    console.log(`handleDecrement ${habit}`);
  };
  handleDelete = (habit) => {
    console.log(`handleDelete ${habit}`);
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            OnDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;

import React, { Component } from "react";

class Habit extends Component {
  //결국 자체적으로 가지고 있는 state는 없고 외부적으로 받아오는 오브젝트를 보여주기만 하는 컴포넌트 가 되었따 !
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit); // this에 target과 같이 정보가 들어있는거네
  };
  handleDrecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fa solid fa-square-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDrecrement}
        >
          <i className="fa solid fa-solid fa-square-minus"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </li>
    );
  }
}

export default Habit;

import React, { Component } from "react";

class Habit extends Component {
  //결국 자체적으로 가지고 있는 state는 없고 외부적으로 받아오는 오브젝트를 보여주기만 하는 컴포넌트 가 되었따 !
  handleIncrement = (event) => {};
  handleDrecrement = () => {};
  handleDelete = () => {};
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

import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count : 0,

    };
    handleIncrement = (event) => {
        // state 오브젝트 안에 있는 count 증가 한뒤 state업데이트 해야 함.
        this.setState({count: this.state.count +1})
        //업데이트가 되었는지 확인하려면 setState를 사용해야 한다. 
    }
    handleDrecreation = () =>{
        const count = this.state.count -1;
        this.setState({count: count < 0 ? 0 :count});
    };
    render() {
        return (
        <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
            <button className="habit-button habit-increase" 
                    onClick = {this.handleIncrement}>
            <i className="fa solid fa-square-plus"></i>
            </button>
            <button className="habit-button habit-decrease" onClick = {this.handleDrecreation}>
            <i className="fa solid fa-solid fa-square-minus"></i>
            </button>
            <button className="habit-button habit-trash">
            <i class="fa-solid fa-trash-can"></i>
            </button>
        </li>
        );
    }
}




export default Habit;
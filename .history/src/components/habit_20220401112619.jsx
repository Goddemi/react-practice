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

class App extends Component {
    handleClick = event => {
        console.log(event);
    };
    
    render() {
        return <LikeButton title={'Like'} onClick={this.handleClick} />;
    }
}

// 이렇게  App 부모 컴포넌트에서 LikeButton 컴포넌트에 title과 onClick를 인자로 전달해주면


class LikeButton extends Component {
    state = {
        numberOfLikes :0,
    };

    render() {
        console.log(this.props);
        console.log(this.state);
        return <button>{this.state.numberOfLikes}</button>
    }
}


export default Habit;
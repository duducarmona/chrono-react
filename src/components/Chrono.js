import React, { Component } from 'react';

class Chrono extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0
        };
    }

    counter = () =>{
        this.setState((prevState) => {
            return { 
                count: prevState.count + 1 
            };
        })
    }

    componentDidMount() {
        this.timer = setInterval(this.counter, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    _convertToStringWithTwoDigits(number) {
        return (number / 100).toFixed(2).split('.')[1];
    }
    
    showTime() {
        const { count } = this.state;

        const seconds = this._convertToStringWithTwoDigits(count % 60); // remaining seconds 
        const minutes = this._convertToStringWithTwoDigits(Math.floor(count / 60) % 60); // remaining minutes
        const hours = this._convertToStringWithTwoDigits(Math.floor(count / 60 / 60)); // number of hours

        return `${hours}:${minutes}:${seconds}`;
    }

    render() {
        return (
            <div>
                <h1>My Chrono</h1>
                <h1> { this.showTime() }</h1>
            </div>
        );
    }
}

export default Chrono;
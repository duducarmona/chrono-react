import React, { Component } from 'react';
import './App.css';
import Chrono from './components/Chrono';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isRunning: true };
  }
 
  stopCounter = () => {
      this.setState({...this.state, isRunning: false })
  }

  render() {
    return this.state.isRunning ? (
      <div className="App">
        <Chrono />
        <button onClick={this.stopCounter}>Finish the counter</button>
      </div>
    ) : null;
  }
}

export default App;

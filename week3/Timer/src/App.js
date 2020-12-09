import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stopwatch</h1>
        <Stopwatch status={false} runningTime={0} />
      </div>
    );
  }
}
const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)
  
class Stopwatch extends Component {
  state = {
    status: false,
    runningTime: 0,
    laps: [],
  };
  handleChange = () => {
    this.setState((state) => {
      if (state.status) {
        clearInterval(this.timer);
      } else {
        const startTimer = Date.now() - this.state.runningTime;
        this.timer = setInterval(() => {
          this.setState({ runningTime: Date.now() - startTimer });
        });
      }
      return { status: !state.status };
    });
  };
  handleReset = () => {
    clearInterval(this.timer);
    this.setState({ runningTime: 0, running: false });
  };
  handleLabClick() {
    this.setState({
      laps: this.state.laps.concat([this.state.runningTime])
    })
  }
  // handleLap = () => {
  //   const savedLaps = this.state.laps
  //   this.setState({ laps: savedLaps });
  // };
  
  render() {
    const { status, runningTime, laps } = this.state;
    return (
      <div className="stopwatch">
        <div className="stopwatch-timer">
          <p>{runningTime}ms</p>
          <button onClick={this.handleChange}>
            {status ? "Stop" : "Start"}
          </button>
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleLabClick.bind(this)}>Lap</button>
        </div>
        <ul className="stopwatch-laps">
          { this.state.laps.map((lap, i) =>
              <li className="stopwatch-lap"><strong>{i + 1}</strong>/ {formattedSeconds(lap)}</li>)
          }
        </ul>
      </div>
    );
  }
  
}
export default App;

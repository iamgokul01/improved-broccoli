// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isStarted: false,
    liveCountdown: '00:00',
    min: 0,
    seconds: 0,
  }

  stopWatch = () => {
    const {timerId} = this.state
    clearInterval(timerId)
    this.setState({
      isStarted: false,
    })
  }

  startWatch = () => {
    let {min, seconds} = this.state

    const timerId = setInterval(() => {
      if (seconds === 60) {
        seconds = 0
        min += 1
      } else {
        seconds += 1
      }
      console.log(seconds)
      let formattedSeconds = seconds
      if (seconds < 10) {
        formattedSeconds = `0${seconds}`
      }
      const timerText = `${min}:${formattedSeconds}`
      this.setState({
        liveCountdown: timerText,
        min,
        seconds,
        timerId,
        isStarted: true,
      })
    }, 1000)
  }

  resetWatch = () =>
    this.setState({
      liveCountdown: '00:00',
      isStarted: false,
      seconds: 0,
      min: 0,
    })

  render() {
    const {liveCountdown, isStarted} = this.state
    return (
      <div className="app-container">
        <div className="stopwatch-flexbox">
          <h1 className="app-title">Stopwatch</h1>
          <div className="stopwatch">
            <div className="app-subtitle">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <div className="timer">
              <h1>{liveCountdown}</h1>
            </div>
            <div className="btns-controller">
              <button
                type="button"
                className="button start-btn"
                onClick={this.startWatch}
                disabled={isStarted}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-btn button"
                onClick={this.stopWatch}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-btn button"
                disabled={isStarted}
                onClick={this.resetWatch}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

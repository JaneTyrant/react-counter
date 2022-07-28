import React, { Component } from "react";
import styles from "./CountArticle.module.css";

class CountArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isAdded: true,
      time: 1000,
    };
    this.intervalId = null;
  }
  mode = () => {
    const { isAdded } = this.state;
    this.setState({
      isAdded: !isAdded,
    });
  };
  changeNumber = () => {
    const { isAdded } = this.state;
    this.setState((state) => {
      const { count } = state;
      const { step } = this.props;
      return { count: isAdded ? count + step : count - step };
    });
  };
  autoClick = () => {
    if (this.intervalId === null) {
      const { time } = this.state;
      this.intervalId = setInterval(this.changeNumber, time);
    }
  };
  handlerInput = ({ target: { value } }) => {
    const valueToNumber = Number(value);
    this.setState({ time: valueToNumber });
  };
  componentDidMount() {
    this.autoClick();
  }
  render() {
    const { count, time } = this.state;
    const { step } = this.props;
    return (
      <>
        <article className={styles.article}>
          <h2 className={styles.counter}>Counter: {count}</h2>
          <button className={styles.input} onClick={this.mode}>
            MODE
          </button>
          <button className={styles.input} onClick={this.changeNumber}>
            ADD/SUBTRACT
          </button>
          <button className={styles.input} onClick={this.autoClick}>
            autoClick
          </button>
          <label>
            <p>Time in milliseconds:</p>
            <input
              className={styles["time-input"]}
              name="time"
              onChange={this.handlerInput}
              value={time}
              type="number"
              step="500"
              min="500"
            />
          </label>  
          <p>Step: {step}</p>
        </article>
      </>
    );
  }
}

export default CountArticle;
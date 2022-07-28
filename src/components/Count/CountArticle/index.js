import React, { Component } from "react";

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
      const { number } = this.props;
      return { count: isAdded ? count + number : count - number };
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
  componentDidMount(){
    this.autoClick();
  }
  render() {
    const { count, time } = this.state;
    const { number } = this.props;
    console.log(count);
    return (
      <>
        <article>
          <h2>Counter: {count}</h2>
          <button onClick={this.mode}>MODE</button>
          <br></br>
          <button onClick={this.changeNumber}>ADD/SUBTRACT</button>
          <button onClick={this.autoClick}>autoClick</button>
          <input
            name="time"
            onChange={this.handlerInput}
            value={time}
            type="number"
            step="500"
            min="500"
          />
          <p>Number: {number}</p>
        </article>
      </>
    );
  }
}

export default CountArticle;

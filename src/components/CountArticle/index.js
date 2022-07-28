import React, { Component } from "react";

class CountArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isAdded: true,
    };
  }
  mode = () => {
    const { isAdded } = this.state;
    //isAdded ? this.add() : this.subtract()
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
  render() {
    const { count } = this.state;
    const { number } = this.props;
    return (
      <>
        <article>
          <h2>Counter: {count}</h2>
          <button onClick={this.mode}>MODE</button>
          <br></br>
          <button onClick={this.changeNumber}>ADD/SUBTRACT</button>
          <p>Number: {number}</p>
        </article>
      </>
    );
  }
}

export default CountArticle;

import React, {Component} from "react";

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
  }
  changeNumber = () => {
    const { isAdded } = this.state;
    isAdded ? this.add() : this.subtract()
  }
  add = () => {
    this.setState((state) => {
        const { count } = state;
        const { number } = this.props;
        const newCount = count + number;
        return {count: newCount}
    });
  };
  subtract = () => {
    this.setState((state) => {
        const { count } = state;
        const { number } = this.props;
        const newCount = count - number;
        return {count: newCount}
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
          {/* <button onClick={this.add}>ADD/SUBTRACT</button> */}
          <button onClick={this.changeNumber}>ADD/SUBTRACT</button>
          <p>Number: {number}</p>
        </article>
      </>
    );
  }
}

// const CountArticle = (props) => {
//   const { count } = props;
//   return (
//     <article>
//       <h2>{count}</h2>
//       <button>MODE</button>
//       <button>ADD/SUBTRACT</button>
//       <p>NUMBER</p>
//     </article>
//   );
// };

export default CountArticle;

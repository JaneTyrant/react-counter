import React, { Component } from "react";
import CountArticle from "../CountArticle";

class CountSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
  }
  handlerInput = ({ target: { value } }) => {
    const valueToNumber = Number(value);
    if (valueToNumber >= 1 && valueToNumber <= 1000000) {
      this.setState({ number: valueToNumber });
    }
  };
  render() {
    const { number } = this.state;
    return (
      <>
        <section>
          <article>
            <h2>STEP</h2>
            <input
              name="number"
              onChange={this.handlerInput}
              value={number}
              type="number"
              min="1"
              max="1000000"
            />
          </article>
          <CountArticle number={number} />
        </section>
      </>
    );
  }
}

export default CountSection;

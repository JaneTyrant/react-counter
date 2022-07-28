import React, { Component } from "react";
import CountArticle from "../CountArticle";
import styles from "./CountSection.module.css";

class CountSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }
  handlerInput = ({ target: { value } }) => {
    const valueToNumber = Number(value);
    if (valueToNumber >= 1 && valueToNumber <= 1000000) {
      this.setState({ step: valueToNumber });
    }
  };
  render() {
    const { step } = this.state;
    return (
      <>
        <section className={styles["count-section"]}>
          <article className={styles["step-article"]}>
            <h2 className={styles.step}>step</h2>
            <input
              className={styles["step-input"]}
              name="step"
              onChange={this.handlerInput}
              value={step}
              type="number"
              min="1"
              max="1000000"
            />
          </article>
          <CountArticle step={step} />
        </section>
      </>
    );
  }
}

export default CountSection;

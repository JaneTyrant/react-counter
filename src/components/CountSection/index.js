import React, { Component } from 'react';
import CountArticle from "../CountArticle";

class CountSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
        };
    }
    handlerInput = ({ target: { value } }) => {
        this.setState({ number: Number(value) })
    }
    render() {
        const {number} = this.state;
        return (
            <>
                <section>
                    <article>
                        <h2>STEP</h2>
                        <input 
                        name="number"
                        onChange={this.handlerInput}
                        value={number}
                        placeholder="password"
                        type='number' />
                    </article>
                    <CountArticle number={number}/>
                </section>
            </>
        );
    }
}

export default CountSection;

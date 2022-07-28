import React, { Component } from 'react';
import CountArticle from "./../CountArticle";

class CountSection extends Component {
    render() {
        return (
            <>
                <section>
                    <article>
                        <h2>STEP</h2>
                        <input type='number' />
                    </article>
                    <CountArticle />
                </section>
            </>
        );
    }
}

export default CountSection;

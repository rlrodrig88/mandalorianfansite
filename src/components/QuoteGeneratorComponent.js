import React, { Component } from 'react';
import { QUOTES } from '../shared/Quotes';

class QuoteGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: QUOTES,
            quoteId: 4
        };
        this.RandomQuoteId = this.RandomQuoteId.bind(this);
    }   
    
    RandomQuoteId() {
        this.setState({
            quoteId: Math.ceil(Math.random()*(this.state.quotes.length-1))
        });
        return;
    }
    
    render() {
        return (
            <div >
                <div class="text quote-text">"{this.state.quotes[this.state.quoteId].text}"</div>                
                <button class="btn btn-secondary text quote-button" onClick={this.RandomQuoteId}>Random Quote</button>
            </div>
        );
    }
}

export default QuoteGenerator;
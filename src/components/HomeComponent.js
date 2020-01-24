import React, { Component } from 'react';
import QuoteGenerator from './QuoteGeneratorComponent';
import Header from './HeaderComponent.js';
import Navigation from './NavigationComponent.js';

class Home extends Component {
    render() {
        return(
            <div>
                Homepage Content
                <QuoteGenerator />
            </div>
        );
      }
  }

export default Home;
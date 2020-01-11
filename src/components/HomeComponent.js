import React, { Component } from 'react';
import Header from './HeaderComponent.js';
import Navigation from './NavigationComponent.js';

class Home extends Component {
    render() {
        return(
            <div>
                <Header />
                <Navigation />
            </div>
        );
      }
  }

export default Home;
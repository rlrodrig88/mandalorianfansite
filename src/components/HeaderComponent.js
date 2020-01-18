import React, { Component } from 'react';
import Navigation from './NavigationComponent';

class Header extends Component {
    render() {
        return(
          <React.Fragment>
            <div className="center"><img src="/assets/images/logo.jpg" className="img-fluid" alt="Mandolorian Logo"></img></div>
            <Navigation />
          </React.Fragment>
        );
      }
  }

export default Header;

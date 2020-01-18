import React, { Component } from 'react';
import Navigation from './NavigationComponent';

class Header extends Component {
    render() {
        return(
          <React.Fragment>
            <div className="container center"><img src="/assets/images/logo.jpg" className="img-fluid logo center" alt="Mandolorian Logo"></img></div>
            <Navigation />
          </React.Fragment>
        );
      }
  }

export default Header;

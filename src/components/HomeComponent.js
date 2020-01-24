import React, { Component } from 'react';
import QuoteGenerator from './QuoteGeneratorComponent';
import Header from './HeaderComponent.js';
import Navigation from './NavigationComponent.js';

class Home extends Component {
    render() {
        return(
            <div>
                <div class="summary-text text">After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. The Mandalorian is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic.</div>
                <div class="home-background"></div>
                <iframe width="90%" height="auto" max-width="600px" src="https://www.youtube.com/embed/XmI7WKrAtqs?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <footer>
                    <QuoteGenerator />
                </footer>
            </div>
        );
      }
  }

export default Home;
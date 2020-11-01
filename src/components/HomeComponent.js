import React, { Component } from 'react';
import QuoteGenerator from './QuoteGeneratorComponent';

class Home extends Component {
  render() {
    return (
      <div>
        <div class="home-background"></div>
        <div class="summary-text">After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. The Mandalorian is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic.</div>
        <div class="video-background">
          <iframe title="trailer" width="100%" height="100%" src="https://www.youtube.com/embed/XmI7WKrAtqs?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <footer>
          <QuoteGenerator />
        </footer>
      </div>
    );
  }
}

export default Home;
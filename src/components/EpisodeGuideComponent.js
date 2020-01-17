import React, { Component } from 'react';
import { EPISODES } from '../shared/Episodes';

function EpisodeCard(props) {
  return(
    <Col sm={12} md={6}>
      <h1>{episodes.name}</h1>
    </Col>
  );
}

class EpisodeGuide extends Component {
    render() {
        return(
          <div>
            <h1>Episode Guide</h1>
          </div>
        ); 
      }
  }

export default EpisodeGuide;
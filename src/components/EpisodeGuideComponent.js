import React, { Component } from 'react';
import { Col, Card, Row, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { EPISODES } from '../shared/Episodes';
import { Link } from 'react-router-dom';

function RenderEpisode({ep}) {
  return (
    <Col key={ep.id} xs={6} md={4} lg={3}>
    <Card>
      <CardBody>
        <CardImg src={ep.image} />
        
          <CardTitle className="eptitle">{ep.name}</CardTitle>
        
        <CardText>{ep.sum_short}</CardText>
        <CardText className="credits"><strong>Directed by:</strong> {ep.director}</CardText>
        <CardText className="credits"><strong>Written by:</strong> {ep.writer}</CardText>
      </CardBody>
    </Card>
    </Col>
  );
}



class EpisodeGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: EPISODES,
      selectedEpisode: null
    };
  }
    render() {
      const episodesList = this.state.episodes.map(ep => {
        return (
            <RenderEpisode ep={ep} />
        );
      });
        return(
          <Row>
            {episodesList}
          </Row>
        ); 
      }
  }

export default EpisodeGuide;
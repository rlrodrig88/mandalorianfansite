import React, { Component } from 'react';
import { Container, Col, Card, Row, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { EPISODES } from '../shared/Episodes';
import { Link } from 'react-router-dom';


function RenderEpisode({ep}) {
  return (
    
    <Col className={ep.color2} key={ep.id} lg={6}>
    <Card>
      
      <CardBody className={ep.colorcard}>
        
        <img src={ep.imagescn} className="floatleft" />
        <CardText className={ep.color}>{ep.name}</CardText>
      
        <CardText >{ep.sum_short}</CardText>
        <CardText ><strong>Directed by:</strong> {ep.director}<br /><strong>Written by:</strong> {ep.writer}</CardText>

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
          <Container>
          <Row>
            {episodesList}
            </Row>
            </Container>
        ); 
      }
  }

export default EpisodeGuide;
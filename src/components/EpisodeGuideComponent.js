import React, { Component } from 'react';
import { Container, Col, Card, Row, CardText, Media } from 'reactstrap';
import { EPISODES } from '../shared/Episodes';
import { Link } from 'react-router-dom';
import './EpisodeGuide.css';

function RenderEpisodeCard({ ep }) {
  return (

    <Col className={ep.color2} key={ep.id} lg={6}>

      <Card className="epcard">


        <Media body className={ep.colorcard}>
          <Link to={`/episodes/${ep.id}`}><img src={ep.imagescn} className="floatleft" alt="episode" /> </Link>

          <CardText className={ep.color}>
            {ep.name}
          </CardText>

          <CardText >{ep.sum_short}</CardText>
          <CardText ><strong>Directed by:</strong> {ep.director}<br /><strong>Written by:</strong> {ep.writer}</CardText>

        </Media >

      </Card>

    </Col>

  );
}





class EpisodeGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: EPISODES,
    };
  }
  render() {
    const episodesCardList = this.state.episodes.map(ep => {
      return (
        <RenderEpisodeCard ep={ep} />
      );
    });
    return (
      <Container>
        <Row>
          {episodesCardList}
        </Row>
      </Container>
    );
  }
}

export default EpisodeGuide;
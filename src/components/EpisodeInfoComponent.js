import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './EpisodeInfo.css';

function RenderEpisodePage({ episode }) {
  return (
    <div className="col m-1">
      <Card>
        <CardImg top src={episode.image} alt={episode.name} />
        <CardBody>
          <CardText><strong>{episode.name}</strong></CardText>
          <CardText>{episode.sum_long}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function EpisodeInfo(props) {

  if (props.episode) {


    return (
      <div className="container">
        <div className="row">
          <div className="col">

            <h2><Link to="/episodes">Episodes</Link> / {props.episode.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderEpisodePage episode={props.episode} />
        </div>
      </div>
    );
  }
  return (
    <div />
  );
}

export default EpisodeInfo;
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import './EpisodeInfo.css';

function RenderEpisode({episode}) {
    return(
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

function NextEpisodeLink({episodeId}) {
    return
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
                    <RenderEpisode episode={props.episode} />
                </div>
            </div>
        );
    }
return (
    <div />
);
}

export default EpisodeInfo;
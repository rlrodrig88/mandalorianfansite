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
    return(
        
    );
}

function EpisodeInfo(props) {
    
    if (props.episode) {
        
        console.log(epnext);
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        
                        <h2><Link to="/episodes">Episode List</Link> / {props.episode.name}</h2>
                        <hr />
                        <h1><Link to="/episodes">Previous</Link></h1>
                        <h1><Link to="/episodes">Next</Link></h1>
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
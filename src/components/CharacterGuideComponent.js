import React, { Component } from 'react';
import {
  Container, Col, Row,
  CardText, CardBody, Media,
} from 'reactstrap';
import Fade from 'react-reveal/Bounce';
import { Card, Image, Reveal } from 'semantic-ui-react'
import { CHARACTERS } from '../shared/Characters';
import './CharacterGuides.css';

const Hidden = () => (
  <Reveal animated='move'>
    <Reveal.Content visible>
      <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='https://react.semantic-ui.com/images/avatar/large/chris.jpg' size='small' />
    </Reveal.Content>
  </Reveal>
)

function RenderCharacter({ ch }) {
  return (

    <Col className={ch.color2} lg={6}>

      <Card className="chcard">

        <Media body  >
          <CardText className={ch.color}>
            {ch.name}
          </CardText>

          <CardText >{ch.sum}</CardText>
          <CardBody>
            <CardText className="text-left">
              <Fade left cascade>
                <div>
                  <img src={ch.imagescn} style={{ padding: '0.1rem' }} alt="image1" /> < em>-- </em>
                  <img src={ch.imagescn2} style={{ padding: '0.1rem' }} alt="image1" />  < em>-- </em>
                  <img src={ch.imagescn3} style={{ padding: '0.1rem' }} alt="image1" />
                </div>
              </Fade>
              <strong>Species: </strong> {ch.Species}
              <br />
              <strong>Gender :</strong> {ch.gender}
              <br />
              <strong>Eye Color :</strong> {ch.eye}
              <br />
              <strong>Skin Color :</strong> {ch.skin}
              <br />
              <strong> Home World: </strong> {ch.home}
            </CardText>
          </CardBody>

        </Media >

      </Card>

    </Col>

  );
}


class CharacterGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: CHARACTERS,
    };
  }
  render() {
    const characterList = this.state.characters.map(ch => {
      return (
        <RenderCharacter ch={ch} />
      );
    });
    return (
      <Container>
        <Row>
          {characterList}
        </Row>
      </Container>

    );
  }
}


export default CharacterGuide;
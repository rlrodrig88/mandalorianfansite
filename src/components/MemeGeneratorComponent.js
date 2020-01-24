import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Label } from 'reactstrap';

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state ={
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/3gu5sy.jpg",
            allMemesImg: [
                {
                    id: 0,
                    url: 'https://i.imgflip.com/3hohdt.png',
                },
                {
                    id: 1,
                    url: 'https://i.imgflip.com/3g94gh.png',
                },
                {
                    id: 2,
                    url: 'https://i.imgflip.com/3glvu4.jpg',
                },
                {
                    id: 3,
                    url: 'https://i.imgflip.com/3gt6cz.jpg',
                },
                {
                    id: 4,
                    url: 'https://i.imgflip.com/3hy8aj.jpg',
                },
                {
                    id: 5,
                    url: 'https://i.imgflip.com/3ioz47.jpg',
                },
                {
                    id: 5,
                    url: 'https://i.imgflip.com/3gvth5.png',
                },
            ]
        }

        this.handleChange = this.handleChange.bind(this);
        this.chooseRandom = this.chooseRandom.bind(this);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    chooseRandom(){
        let length = this.state.allMemesImg.length;
        let arrayIndex = this.getRandomInt(length - 1);
        this.setState({
            randomImage : this.state.allMemesImg[arrayIndex].url
        })
    }

    render(){
        return(
            <div>
                <h1>Baby Yoda Meme Generator</h1>
                <div className="meme-form">
                    <input 
                        name="topText"
                        placeholder= "Enter top text"
                        value={this.state.topText}
                        onChange= {this.handleChange}
                    />
                    <input 
                        name="bottomText"
                        placeholder= "Enter bottom text"
                        value={this.state.bottomText}
                        onChange= {this.handleChange}
                    />
                    <Button color="info" onClick={this.chooseRandom}>Go!</Button>
                    </div>
                    
                <div className="meme">
                    <img src={this.state.randomImage} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>

                </div>
            </div>
        )
    }
}

export default MemeGenerator;
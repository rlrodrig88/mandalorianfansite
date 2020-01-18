import React, { Component } from 'react';

import Home from './HomeComponent';
import QuoteGenerator from './QuoteGeneratorComponent';
import ImageGallery from './ImageGalleryComponent';
import Countdown from './CountdownComponent';
import Header from './HeaderComponent';
import Navigation from './NavigationComponent';
import Footer from './FooterComponent';
import CharacterGuide from './CharacterGuideComponent';
import EpisodeGuide from './EpisodeGuideComponent';
import SliderPuzzle from './SliderPuzzleComponent';
import MemeGenerator from './MemeGeneratorComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { ModalFooter } from 'reactstrap';







class Main extends Component {
    
      render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        const Episodes = () => {
            return (
                <EpisodeGuide />
            );
        }

        
            return (
                <div>
                    <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route path='/episodes' component={Episodes} />
                        <Redirect to='/home' />
                    </Switch>
                </div>
            );
        }
    }

export default Main;

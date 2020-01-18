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






class Main extends Component {
      render() {
            return (
                <React.Fragment>
                    <Home />
                    <EpisodeGuide />
                </React.Fragment>
            );
        }
    }

export default Main;

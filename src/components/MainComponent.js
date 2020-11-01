import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import CharacterGuide from './CharacterGuideComponent';
import EpisodeGuide from './EpisodeGuideComponent';
import EpisodeInfo from './EpisodeInfoComponent';
import SliderPuzzle from './SliderPuzzleComponent';
import MemeGenerator from './MemeGeneratorComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { EPISODES } from '../shared/Episodes';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: EPISODES,
    };
  }

  render() {

    const HomePage = () => {
      return (
        <Home />
      );
    }

    const Characters = () => {
      return (
        <CharacterGuide />
      );
    }

    const Episodes = () => {
      return (
        <EpisodeGuide />
      );
    }

    const EpisodeWithId = ({ match }) => {
      return (
        <EpisodeInfo episode={this.state.episodes.filter(episode => episode.id === +match.params.episodeId)[0]} />
      );
    }


    const Puzzle = () => {
      return (
        <SliderPuzzle />
      );
    }

    const Meme = () => {
      return (
        <MemeGenerator />

      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/characters' component={Characters} />
          <Route exact path='/episodes' component={Episodes} />
          <Route exact path='/puzzle' component={Puzzle} />
          <Route exact path='/meme' component={Meme} />
          <Route exact path='/puzzle' component={Puzzle} />
          <Route path='/episodes/:episodeId' component={EpisodeWithId} />
          <Redirect to='/home' />
        </Switch>
      </div>
    );
  }
}

export default Main;

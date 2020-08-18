import React from 'react';
import './App.css';
import Navigation from '../Nav/Nav';
import Home from '../Home/Home';
import Features from '../Features/Features';
import Community from '../Community/Community';
import Start from '../Start/Start';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Features />
      <div className="community-padding">
        <Community />
      </div>
      <Start />
      <div className="end-icons-container">
        <a href="##"><img className="end-icons" src="https://jasonkim-media.s3-us-west-1.amazonaws.com/Projects/images/ShowTrackr/twitter.png"/></a>
        <a href="##"><img className="end-icons" src="https://jasonkim-media.s3-us-west-1.amazonaws.com/Projects/images/ShowTrackr/facebook.png"/></a>
        <a href="##"><img className="end-icons" src="https://jasonkim-media.s3-us-west-1.amazonaws.com/Projects/images/ShowTrackr/youtube.png"/></a>
        <p className="end-text">Copyright 2020</p>
      </div>
    </div>
  );
}




export default App;

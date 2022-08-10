import React from 'react';
import '../App.css';
import { Button } from './Button';
import YoutubeEmbed from './embedded';

import './HeroSection.css';
import './embedded.css'

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Hubmind</h1>
      <YoutubeEmbed embedId='o1LQBhICXVQ'/>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         Live Meeting <i className='far fa-play-circle' />
        </Button>
      
    
   

      </div>
      <br/>
      <h2 className='Script-AI'>Welcome this is a place holder for AI script...</h2>
    </div>
  );
}

export default HeroSection;

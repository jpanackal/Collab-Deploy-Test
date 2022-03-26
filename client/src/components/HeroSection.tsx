import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video autoPlay loop muted >
          <source
            src='/videos/video-6.mp4'
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h1>COLLAB 4</h1>
        <p>Coming soon</p>
        <div className='hero-btns'>
            <Button className='btns' type={undefined} onClick={undefined} buttonStyle='btn--outline' buttonSize='btn--large'>
                <a 
                href='https://open.spotify.com/playlist/6GrqUYo1UBg1TW7OoxCENX?si=78994f1aa6c34d62' 
                target="_blank" 
                rel="noreferrer">
                  Get Started
                </a>
            </Button>
            <Button className='btns' type={undefined} onClick={undefined} buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection;
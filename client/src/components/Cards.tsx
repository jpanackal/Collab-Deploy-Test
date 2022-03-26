import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out the old Collab™ Versions</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src='/images/Collab-1-Art.jpg' 
                        text='Collab 1'
                        label='Add any music on Fridays'
                        path='/about' 
                        playlist="https://open.spotify.com/embed/playlist/6VdYCgZD2r2ENtF6LmMkOz"
                    />
                    <CardItem 
                        src='/images/Collab-2-Art.jpg' 
                        text='Collab 2'
                        label='Add themed music on Fridays'
                        path='/about' 
                        playlist="https://open.spotify.com/embed/playlist/0CdriOcIheSxbXWAsL4toe"
                    />
                    <CardItem 
                        src='/images/Collab-3-Art.jpg' 
                        text='Collab 3'
                        label='Add any music on user-specific day'
                        path='/about' 
                        playlist="https://open.spotify.com/embed/playlist/2kyVNIXkQ29cNx6fLuJpYJ"
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;

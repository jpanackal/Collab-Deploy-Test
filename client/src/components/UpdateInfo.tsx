import React from 'react'
import './UpdateInfo.css';

function UpdateInfo() {
  return (
    <div className='update-container'>
        <video autoPlay loop muted >
          <source
            src='/videos/video-5.mp4'
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h1>Latest News</h1>
        <div className="body">
            <div className="card card1 ">
                <h2> Launch Date </h2>
            </div>
            <div className="card card2 ">
                <h2> Main Idea </h2>
            </div>
            <div className="card card3 ">
                <h2> Schedule </h2>
            </div>
        </div>
    </div>
  )
}

export default UpdateInfo
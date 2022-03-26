import React from 'react'
import './AboutInfo.css';
import 'spotify-web-api-node';


function AboutInfo() {
  return (
    <div className='about-container'>
        <video autoPlay loop muted >
          <source
            src='/videos/video-3.mp4'
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h1>Collab Stats</h1>
        <div className="body">
            <div className="carousel_wrapper">
                <div className="carousel">
                    <div className="slide one">
                        <img src="./images/Collab-1-Art.jpg" alt='Collab 1'/>
                        <div className="image-info">
                            <h1>Collab 1</h1>
                            <p>Created: Jul 14 2020</p>
                            <p>Song Count: 105</p>
                            <p>Members: 12</p>  
                        </div>
                    </div>
                    <div className="slide two">
                        <img src="./images/Collab-2-Art.jpg" alt='Collab 2' />
                        <div className="image-info">
                            <h1>Collab 2</h1>
                            <p>Created: Jan 22 2021</p>
                            <p>Song Count: 148</p>
                            <p>Members: 12</p>  
                        </div>
                    </div>
                    <div className="slide three">
                        <img src="./images/Collab-3-Art.jpg" alt='Collab 3' />
                        <div className="image-info">
                            <h1>Collab 3</h1>
                            <p>Created: Sep 7 2021</p>
                            <p>Song Count: 121</p>
                            <p>Members: 12</p>  
                        </div>
                    </div>
                    <div className="slide four">
                    <img src="./images/Collab-logo-space.png" alt='Collab 4' />
                        <div className="image-info">
                            <h1>Collab 4</h1>
                            <p>Created: ?</p>
                            <p>Song Count: ?</p>
                            <p>Members: ?</p>  
                        </div>
                    </div>
                    {/* <div className="slide five">
                        <h1>Collab 5</h1>
                    </div>
                    <div className="slide six">
                        <h1>Collab 6</h1>
                    </div>
                    <div className="slide seven">
                        <h1>Collab 7</h1>
                    </div>
                    <div className="slide eight">
                        <h1>Collab 8</h1>
                    </div>
                    <div className="slide nine">
                        <h1>Collab 9</h1>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutInfo
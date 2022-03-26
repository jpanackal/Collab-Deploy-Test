import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>
                        About
                    </h2>
                    <Link to='/'>Members</Link>
                    <Link to='/'>Info</Link>
                </div>
                <div className="footer-link-items">
                    <h2>
                        Contact
                    </h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
                COLLAB
                <img src="/images/Collab-logos_white-notext.png" alt='logo' width='54px' height='44px' padding-left='5px'/>
            </Link>
          </div>
          <small className='website-rights'>COLLAB © 2022</small>
          <div className='social-icons'>
            <a
              className='social-icon-link spotify'
              href='https://open.spotify.com/user/jmpanackal?si=2739dcaf8a614e28'
              target='_blank'
              rel="noreferrer"
              aria-label='Spotify'
            >
              <i className="fab fa-spotify"></i>
            </a>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
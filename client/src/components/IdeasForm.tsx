import React from 'react'
import './IdeasForm.css';
import './CommentBox'
import CommentBox from './CommentBox';

function IdeasForm(props) {
  // const comments = [
  //   {id: 1, author: "Jacob", body: "Woah nice website who made this"},
  //   {id: 2, author: "Anon", body: "Each person gets x minutes of song to put that week"},
  //   {id: 2, author: "Anon", body: "Next person puts song within +/-15 secs of last song duration"},
  //   {id: 2, author: "Anon", body: "Alternate between fast tempo song and slow tempo song"},
  //   {id: 2, author: "Anon", body: "Alphabet order with Album Name or Artist"},
  //   {id: 2, author: "Anon", body: "Choose song with synonym of word in last song"},
  //   {id: 2, author: "Anon", body: "choose song with antonym of word in last song"},
  //   {id: 2, author: "Anon", body: "flip flop male and female artists"},
  //   {id: 2, author: "Anon", body: "Choose song with album art that contains main color of last songs album art"},
  // ];
  
  // let commentNodes = <div className="comment-list">{comments}</div>;
  
  return (
    <div className='idea-container'>
        <video autoPlay loop muted >
          <source
            src='/videos/video-7.mp4'
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h1>Collab Ideas</h1>
        <div className='comment-area'>
          <CommentBox />
        </div>
    </div>
  )
}

export default IdeasForm
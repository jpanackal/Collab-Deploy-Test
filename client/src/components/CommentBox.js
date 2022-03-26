import React from 'react';
import ReactDOM from 'react-dom'
import './IdeasForm.css';

class CommentBox extends React.Component {
    constructor() {
      super();
      
      this.state = {
        showComments: false,
        comments: [
          {id: 2, author: "Anon", body: "Each person gets x minutes of song to put that week"},
          {id: 2, author: "Anon", body: "Next person puts song within +/-15 secs of last song duration"},
          {id: 2, author: "Anon", body: "Alternate between fast tempo song and slow tempo song"},
          {id: 2, author: "Anon", body: "Alphabet order with Album Name or Artist"},
          {id: 2, author: "Anon", body: "Choose song with synonym of word in last song"},
          {id: 2, author: "Anon", body: "choose song with antonym of word in last song"},
          {id: 2, author: "Anon", body: "flip flop male and female artists"},
          {id: 2, author: "Anon", body: "Choose song with album art that contains main color of last songs album art"},
        ]
      };
    }
    
    render () {
      const comments = this._getComments();
      let commentNodes;
      let buttonText = 'Show Comments';
      
      if (this.state.showComments || true) {
        // buttonText = 'Hide Comments';
        commentNodes = <div className="comment-list">{comments}</div>;
      }
      
      return(
        <div className="comment-box">
          {/* <h2>Post an Idea</h2>
          <CommentForm addComment={this._addComment.bind(this)}/>
          <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
            {buttonText}
          </button>
          <h3>Ideas</h3>
          <h4 className="comment-count">
            {this._getCommentsTitle(comments.length)}
          </h4> */}
          {commentNodes}
        </div>  
      );
    } // end render
    
    _addComment(author, body) {
      const comment = {
        id: this.state.comments.length + 1,
        author,
        body
      };
      this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
    }
    
    _handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
    }
    
    _getComments() {    
      return this.state.comments.map((comment) => { 
        return (
          <Comment 
            author={comment.author} 
            body={comment.body} 
            key={comment.id} />
        ); 
      });
    }
    
    _getCommentsTitle(commentCount) {
      if (commentCount === 0) {
        return 'No comments yet';
      } else if (commentCount === 1) {
        return "1 comment";
      } else {
        return `${commentCount} comments`;
      }
    }
  } // end CommentBox component
  
  class CommentForm extends React.Component {
    render() {
      return (
        <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
          <div className="comment-form-fields">
            <input placeholder="Name" required ref={(input) => this._author = input}></input><br />
            <textarea placeholder="Comment" rows="4" required ref={(textarea) => this._body = textarea}></textarea>
          </div>
          <div className="comment-form-actions">
            <button type="submit" >Post Idea</button>
          </div>
        </form>
      );
    } // end render
    
    _handleSubmit(event) { 
      event.preventDefault();   // prevents page from reloading on submit
      let author = this._author;
      let body = this._body;
      this.props.addComment(author.value, body.value);
    }
  } // end CommentForm component
  
  class Comment extends React.Component {
    render () {
      return(
        <div className="comment">
          <p className="comment-header">{this.props.author}</p>
          <p className="comment-body">- {this.props.body}</p>
          <div className="comment-footer">
            {/* <a href="#" className="comment-footer-delete" onClick={this._deleteComment}>Delete Idea</a> */}
          </div>
        </div>
      );
    }
    _deleteComment() {
      alert("-- DELETE Comment Functionality COMMING SOON...");
    }
  }
  
  // function fun() {    
  //   var div1 = document.getElementById("comment-area");
  //   if (div1.style.height >= "1000px") {
  //       var h = div1.style.height;
  //       div1.style.height = "600px";
  //   }
  //   else {
  //     div1.style.height = "1200px";
  //   }
  //   return false;
  // }
  
export default CommentBox
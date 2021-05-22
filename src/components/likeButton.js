import React from 'react'
import './like.css'
class likeButton extends React.Component {
    constructor() {
      super();
      this.state = {
        liked: false
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick() {
      this.setState({
        liked: !this.state.liked
      });
    }
    
    render() {
      const text = this.state.liked ? 'liked' : 'haven\'t liked';
      const label = this.state.liked ? 'Unlike' : 'Like'
      return (
        <div className="customContainer">
        <img src="https://source.unsplash.com/weekly?nature"  width="100%" height="100%" alt="" /><br></br>
          <button className="btn btn-primary" onClick={this.handleClick}>
            {label}</button>
          <p>
            you {text} this
          </p>
        </div>
      );
    }
  }
export default likeButton
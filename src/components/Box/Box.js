import React from 'react';
import './Box.css';

class Box extends React.Component{
  render(){
    return(
      <div className="box">
        <img className="box-image" src={this.props.image}/>
        <p className="box-header">{this.props.header}</p>
        <p className="box-text">{this.props.text}</p>
        <a className="box-cta">Learn more <span className="box-arrow">&#8594;</span></a>
      </div>
    );
  }
}

export default Box;

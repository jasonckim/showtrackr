import React from 'react';
import './Community.css';
import { Container, Row, Col } from 'react-bootstrap';

class Community extends React.Component{
  render(){
    return(
      <div className="community" id="community">
        <Container>
          <Row className="justify-content-center">
            <Col xs={10} md={8} lg={6} className="community-text">
            <div className="community-content">
              <div className="community-title">
                <p>Community</p>
              </div>
              <div className="community-header">
                <h1>We believe in the power of community</h1>
              </div>
              <div className="community-paragraph">
                <p>Our goal is to create a product and service that you're satisfied with and use it everyday. This is why we're constantly working on our services to make it better every day and really listen to what our users have to say.</p>
              </div>
              <div className="community-button-container">
                <button className="community-button">Read more testimonials</button>
              </div>
              </div>
            </Col>
            <Col xs={10} md={8} lg={6}>
              <div className="images-community-container">
                <img className="images-community" src="https://jasonkim-media.s3-us-west-1.amazonaws.com/Projects/images/ShowTrackr/community.png"/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Community;

//
// <div className="images-community-container">
//   <img className="images-community" src={community}/>
// </div>
// <div className="community-container">
//   <div className="community-title">
//     <p>Community</p>
//   </div>
//   <div className="community-header">
//     <h1>We believe in the power of community</h1>
//   </div>
//   <div className="community-paragraph">
//     <p>Our goal is to create a product and service that you're satisfied with and use it everyday. This is why we're constantly working on our services to make it better every day and really listen to what our users have to say.</p>
//   </div>
//   <div className="community-button-container">
//     <button className="community-button">Read more testimonials</button>
//   </div>
// </div>
// <div>
// </div>

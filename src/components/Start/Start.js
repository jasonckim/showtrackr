import React from 'react';
import './Start.css';
import Email from '../Email/Email';
import { Container, Row, Col } from 'react-bootstrap';

class Start extends React.Component{
  render(){
    return(
      <div className="start" id="start">
        <Container className="pt-5">
          <Row className="justify-content-center">
            <Col xs={10} sm={8}>
              <div className="start-title">
                <p>Get Started</p>
              </div>
              <div className="start-header">
                <h1 className="header">Start tracking your TV shows for free</h1>
              </div>
              <div className="start-paragraph">
                <p>In order to start tracking your TV shows, all you have to do is enter your email address. Everything else will be taken care of by us. All you have to do is sit back, relax and enjoy your TV shows.</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={11} sm={10} md={8}>
              <div className="start-email-component">
                <Email />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Start;

//
// <div className="start-container">
//   <div className="start-title">
//     <p>Get Started</p>
//   </div>
//   <div className="start-header">
//     <h1>Start tracking your TV shows for free</h1>
//   </div>
//   <div className="start-paragraph">
//     <p>In order to start tracking your TV shows, all you have to do is enter your email address. Everything else will be taken care of by us. All you have to do is sit back, relax and enjoy your TV shows.</p>
//   </div>
//   <div className="start-email-component">
//     <Email />
//   </div>
// </div>

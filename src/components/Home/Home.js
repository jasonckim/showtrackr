import React from 'react';
import './Home.css';
import Email from '../Email/Email'
import { Container, Row, Col } from 'react-bootstrap';

class Home extends React.Component{
  render(){
    return(
      <div className="home" id="home">
        <Container className="pt-3">
          <Row className="justify-content-center">
            <Col sm={12} md={6} className="home-content">
              <Row>
                <Col>
                  <h1 className="home-header">Track your shows automatically</h1>
                  <p className="home-paragraph">With ShowTrackr you can track your favorite TV shows automatically, so you never lose track of your TV shows ever again.</p>
                </Col>
              </Row>
              <Row>
                <Col>
                <div className="email-form-component">
                  <Email />
                </div>
                </Col>
              </Row>
              <Row className="py-5">
                <Col>
                <div className="companies-images-parent">
                  <p className="home-compatible">Compatible with</p>
                  <img src="https://jasonkim-media.s3-us-west-1.amazonaws.com/Projects/images/ShowTrackr/companies2.png" className="companies-image"/>
                </div>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4}>
            <img src="https://jasonkim-media.s3-us-west-1.amazonaws.com/Projects/images/ShowTrackr/iphone2.png" className="phone-image"/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;


//
//
// <div className="home" id="home">
//   <div className="box1">&nbsp;</div>
//   <div className="box2">&nbsp;</div>
//   <div>
//     <img src={phone} className="phone-image"/>
//   </div>
//   <div className="home-content">
//     <div className="home-header">
//       <h1>Track your shows automatically</h1>
//     </div>
//     <div className="home-paragraph">
//       <p>With ShowTrackr you can track your favorite TV shows automatically, so you never lose track of your TV shows ever again.</p>
//     </div>
//     <div className="email-form-component">
//       <Email />
//     </div>
//     <div>
//       <p className="home-compatible">Compatible with</p>
//       <img src={companies} className="companies-image"/>
//     </div>
//   </div>
// </div>

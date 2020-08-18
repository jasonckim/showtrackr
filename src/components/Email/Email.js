import React from 'react';
import './Email.css';
import { Container, Row, Col } from 'react-bootstrap';

class Email extends React.Component{
  render(){
    return(
      <div className="Email">
        <Container>
          <Row className="justify-content-center">
            <Col xs={7} sm={7} className="email-padding">
              <form className="email-form">
                 <span id="email_button"><input type="text" className="email-input" placeholder="you@email.com" /></span>
              </form>
            </Col>
            <Col xs={5} sm={5}  className="email-padding text-left">
              <button className="email-submit">Start Tracking</button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Email;


// <form className="email-form">
//    <button className="email-submit">Start Tracking</button>
//    <span id="email_button"><input type="text" className="email-input" placeholder="you@email.com" /></span>
// </form>

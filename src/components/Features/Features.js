import React from 'react';
import './Features.css';
import Box from '../Box/Box';
import { Container, Row, Col } from 'react-bootstrap';

const box1 = {
  img: 'https://jasonkim-media.s3-us-west-1.amazonaws.com/Projects/images/ShowTrackr/image1.jpg',
  header: 'Automated tracking',
  text: 'Track your favorite shows automatically without switching between apps.'
}

const box2 = {
  img: 'https://jasonkim-media.s3-us-west-1.amazonaws.com/Projects/images/ShowTrackr/image2.jpg',
  header: 'Machine learning',
  text: 'Get recommendations like never before, which are truly customized for your taste.'
}

const box3 = {
  img: 'https://jasonkim-media.s3-us-west-1.amazonaws.com/Projects/images/ShowTrackr/image3.jpg',
  header: 'Smart notifications',
  text: 'Receive smart notifications exactly at the right moments when you need them.'
}

class Features extends React.Component{

  render(){
    return(
      <div className="features" id="features">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col xs={10} sm={8}>
              <div className="features-title">
                <p>Features</p>
              </div>
              <div className="features-header">
                <h1 className="header">Built and customized for your habits</h1>
              </div>
              <div className="features-paragraph">
                <p>ShowTrackr's built-in machine learning and context-aware features guaratnee that all notifications and recommendations are always delivered to you in the perfect moment.</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={8} sm={7} md={3} className="pt-5">
              <div className="box-component">
                <Box image={box1.img} header={box1.header} text={box1.text} />
              </div>
            </Col>
            <Col xs={8} sm={7} md={3} className="pt-5">
              <div className="box-component">
                <Box image={box2.img} header={box2.header} text={box2.text} />
              </div>
            </Col>
            <Col xs={8} sm={7} md={3} className="pt-5">
              <div className="box-component">
                <Box image={box3.img} header={box3.header} text={box3.text} />
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col className="py-5 px-0">
              <div className="show-carousel">
                <img className="images-tvshows" src="https://jasonkim-media.s3-us-west-1.amazonaws.com/Projects/images/ShowTrackr/tvshows.png"/>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center pt-5">
            <Col xs={10} sm={8} md={6}>
              <Row>
                <Col>
                <div className="morefeatures-header">
                  <h1 className="header">Easy-to-use interfaces on every platform</h1>
                </div>
                <div className="morefeatures-paragraph">
                  <p>Since most of our features work in a completely automated way, you will mainly use our apps to discover new TV shows recommended for you and discuss the most intertesting episodes with like-minded people.</p>
                </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="icon">
                    <img src="https://jasonkim-media.s3-us-west-1.amazonaws.com/Projects/images/ShowTrackr/dash.png" className="icon-images"/>
                    <p className="icon-text">Customized Dashboard</p>
                  </div>
                  <div className="icon">
                    <img src="https://jasonkim-media.s3-us-west-1.amazonaws.com/Projects/images/ShowTrackr/night.png" className="icon-images"/>
                    <p className="icon-text">Automatic Day & Night Modes</p>
                  </div>
                  <div className="icon">
                    <img src="https://jasonkim-media.s3-us-west-1.amazonaws.com/Projects/images/ShowTrackr/chat.png" className="icon-images"/>
                    <p className="icon-text">Integrated Chat Platform</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={10} sm={8} md={6} className="demo-image-column">
              <div className="demo-container">
                <img src="https://jasonkim-media.s3-us-west-1.amazonaws.com/Projects/images/ShowTrackr/appdemo.png" className="images-demo"/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Features;

//
//
// <div className="features-section">
//   <p className="features-title">Features</p>
// </div>
// <div className="features-container">
//   <div className="features-header">
//     <h1 className="header">Built and customized for your habits</h1>
//   </div>
//   <div className="features-paragraph">
//     <p>ShowTrackr's built-in machine learning and context-aware features guaratnee that all notifications and recommendations are always delivered to you in the perfect moment.</p>
//   </div>
// </div>
// <div className="box-components">
//   <div className="box-component-1">
//     <Box image={box1.img} header={box1.header} text={box1.text} />
//   </div>
//   <div className="box-component-3">
//     <Box image={box3.img} header={box3.header} text={box3.text} />
//   </div>
//   <div className="box-component-2">
//     <Box image={box2.img} header={box2.header} text={box2.text} />
//   </div>
// </div>
// <div className="show-carousel">
//   <img className="images-tvshows" src={shows}/>
// </div>
// <div className="morefeatures">
//   <div className="demo-container">
//     <img src={demo} className="images-demo"/>
//   </div>
//   <div className="morefeatures-container">
//     <div className="morefeatures-header">
//       <h1>Easy-to-use interfaces on every platform</h1>
//     </div>
//     <div className="morefeatures-paragraph">
//       <p>Since most of our features work in a completely automated way, you will mainly use our apps to discover new TV shows recommended for you and discuss the most intertesting episodes with like-minded people.</p>
//     </div>
//     <div className="morefeatures-images">
//       <div>
//         <img src={dash} className="icon-images"/>
//         <p className="icon-text">Customized Dashboard</p>
//       </div>
//       <div>
//         <img src={night} className="icon-images"/>
//         <p className="icon-text">Automatic Day & Night Modes</p>
//       </div>
//       <div>
//         <img src={chat} className="icon-images"/>
//         <p className="icon-text">Integrated Chat Platform</p>
//       </div>
//     </div>
//   </div>
// </div>

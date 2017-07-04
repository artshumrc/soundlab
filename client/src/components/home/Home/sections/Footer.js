import React from 'react';
import {
  Grid,
  Row,
  Col,
  Button,
  Checkbox,
  NavItem,
  Navbar,
  Nav
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <div className="footerContent">
          <Grid>
            <Row>
              <Col lg={4}>
                <h4 className="invert">ORPHEUS</h4>
                <p>
                  HUGE Website Builder is a big library of pre-designed web elements which help you create website in few minutes.
                  <div>
                    <Button className="btn-contact">Contact</Button>
                  </div>
                </p>
              </Col>
              <Col lg={4}>
                <h4 className="invert">Need a project done</h4>
                <p>Need help with designing your brand new website or you have any idea and thinking of getting it’s branding done then get a FREE quote today.
                  <div>
                    <Button className="btn-contact blue">Free quote</Button>
                  </div>
                </p>

              </Col>
              <Col lg={4}>
                <h4 className="invert">Contact us today</h4>
                <p>Call Us 666 777 888 OR 111 222 333
                  Send an Email on contact@orphe.us
                  Visit Us 123 Fake Street- London 12358
                  United Kingdom
                  <div>
                    <Button className="btn-contact socialIcon"><FontAwesome name="facebook"/></Button>
                    <Button className="btn-contact socialIcon"><FontAwesome name="twitter"/></Button>
                    <Button className="btn-contact socialIcon"><FontAwesome name="google-plus"/></Button>
                    <Button className="btn-contact socialIcon"><FontAwesome name="dribbble"/></Button>
                  </div>

                </p>
              </Col>
            </Row>
          </Grid>
        </div>
        <Navbar className="footerNav">
          <Grid>
            <Row>
              <Col lg={4}>
                <Navbar.Header>
                  <Navbar.Brand>
                    © Orpheus
                  </Navbar.Brand>
                </Navbar.Header>
              </Col>
              <Col lg={8}>
                <Nav>
                  <NavItem eventKey={1} href="#">Home</NavItem>
                  <NavItem eventKey={2} href="#">About</NavItem>
                  <NavItem eventKey={3} href="#">Features</NavItem>
                  <NavItem eventKey={4} href="#">Portfolio</NavItem>
                  <NavItem eventKey={5} href="#">Testimonials</NavItem>
                  <NavItem eventKey={6} href="#">Pricing</NavItem>
                  <NavItem eventKey={7} href="#">Contact</NavItem>
                </Nav>
              </Col>
            </Row>
          </Grid>
        </Navbar>
      </section>
    );
  }
}

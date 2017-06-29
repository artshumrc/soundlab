import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import './Home.css';
import Header from '../../navigation/Header';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className="header-jumbotron">
          <div className="jumbotron-content">
            <h1>Build your digital archive</h1>
            <p>Be visually striking or highly appealing to succeed</p>
            <p>
              <Button bsStyle="secondary">Get started</Button>
              <Button bsStyle="primary">Learn more</Button>
            </p>
          </div>
          <div className="layer">
          </div>
        </Jumbotron>
        <div className="home">
          <Header />

          Home View
        </div>
      </div>
    );
  }
}

export default Home;

import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Image, Row, Col} from 'react-bootstrap';

export default class UserProfileTimeline extends React.Component {
  render() {
    return (
      <div className="content">
        <div id="userProfileTimeline">
          <Row>
            <Col lg={12}>
              <div className="profileTimeline">
                <div className="timelineHeader">
                  <div className="userDetails">
                    <Image src="/images/timeline1.png" circle/>
                    <div className="text">
                      <h2>Ricardo P. Smith</h2>
                      <h3>admin</h3>
                    </div>
                  </div>
                  <div className="socialLinks">
                    <FontAwesome name="twitter" className="twitter"/>
                    <FontAwesome name="facebook" className="facebook"/>
                    <FontAwesome name="google-plus" className="google"/>
                    <FontAwesome name="ellipsis-h" className="more"/>
                  </div>
                </div>
                <hr />
                <div className="timelineContent">
                  <div className="item">
                    <div className="image">
                      <div className="insideImage">
                        <img src="/images/timeline1.png"/>
                      </div>
                    </div>
                    <div className="details">
                      <div>
                        <h2>Victor Ranold</h2>
                        <p>Far curiosity incommode now led smallness allowance. Favour bed assure son things yet.</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="image">
                      <div className="insideImage">
                        <img src="http://lorempixel.com/400/400/people/3/"/>
                      </div>
                    </div>
                    <div className="details">
                      <div>
                        <h2>Mark Tompson</h2>
                        <p>Far curiosity incommode now led smallness allowance. Favour bed assure son things yet.</p>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="image">
                      <div className="insideImage">
                        <img src="http://lorempixel.com/400/400/people/8/"/>
                      </div>
                    </div>
                    <div className="details">
                      <div>
                        <h2>Duis porta urna</h2>
                        <p>Far curiosity incommode now led smallness allowance. Favour bed assure son things yet.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3}/>
          </Row>
        </div>
      </div>
    );
  }
}

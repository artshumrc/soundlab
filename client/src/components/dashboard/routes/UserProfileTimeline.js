import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Image, Row, Col} from 'react-bootstrap';

export default class UserProfileTimeline extends React.Component {
  render() {
    return (
      <div className="content">
        <div id="userProfileTimeline">
          <Row>
            <Col lg={9}>
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
                        <Image src="/images/timeline1.png" circle/>
                      </div>
                    </div>
                    <div className="details">
                      <div>
                        <h2>Victor Ranold</h2>
                        <p>Far curiosity incommode now led smallness allowance. Favour bed assure son things yet.</p>
                      </div>
                      <div className="comment">
                        <Row className="commentContent">
                          <Col lg={1}>
                            <Image src="http://lorempixel.com/60/60/people/3/" circle/>
                          </Col>
                          <Col lg={11}>
                            Far curiosity incommode now allowance. Favour bed assure son things yet.
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="image">
                      <div className="insideImage">
                        <img src="http://lorempixel.com/400/400/people/1/"/>
                      </div>
                    </div>
                    <div className="detailsBorder">
                      <div>
                        <h2>Mark Tompson</h2>
                        <p>Far curiosity incommode now led smallness allowance. Favour bed assure son things yet.</p>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="image">
                      <div className="insideImage">
                        <img src="http://lorempixel.com/400/400/people/2/"/>
                      </div>
                    </div>
                    <div className="details">
                      <div>
                        <h2>Duis porta urna</h2>
                        <p>Far curiosity incommode now led smallness allowance. Favour bed assure son things yet.</p>
                      </div>
                      <Image src="/images/timeline2.png" className="detailImage" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="image">
                      <div className="insideImage">
                        <img src="http://lorempixel.com/400/400/people/4/"/>
                      </div>
                    </div>
                    <div className="details">
                      <div>
                        <h2>Duis porta urna</h2>
                        <p>Far curiosity incommode now led smallness allowance. Favour bed assure son things yet.</p>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <textarea>
                            Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She
consisted consulted elsewhere happiness disposing household any old the.  Widow downs an
you new shade drift hopes small.
                          </textarea>
                        </div>
                        <div className="panel-footer">
                          <FontAwesome name="camera-retro" />

                          <FontAwesome name="expand" />
                          <div className="pull-right">
                            <a href="#">send</a>
                          </div>
                        </div>
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

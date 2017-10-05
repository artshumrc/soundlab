import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import Page from '../pages/page';
import styles from '../pages/page.scss';

@CSSModules(styles, {allowMultiple: true})
class NotFoundLayout extends Component {
  render() {
    return (
      <Page>
        <div styleName="hero">
  				<div styleName="wrapper tight">
            <h2 styleName="title">404 - Page Not Found</h2>
  				</div>
  			</div>

  			<div styleName="content">
  				<div styleName="wrapper tight">

  				</div>
  			</div>
      </Page>
    );
  }
}

export default NotFoundLayout;

import React, {Component} from 'react'
import styles from './footer.scss'
import CSSModules from 'react-css-modules'


@CSSModules(styles, {allowMultiple: true})


class Footer extends Component {
  render() {
    return (
      <header styleName="footer">
        <div>
          <h4>Footer</h4>
        </div>
      </header>
    )
  }
}

export default Footer

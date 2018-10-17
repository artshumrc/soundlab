import React from 'react'
import Helmet from 'react-helmet'

class Head extends React.Component {
	render() {
		return (
			<Helmet
				title="Sound Lab | Harvard University Department of Music"
				titleTemplate="%s | Sound Lab"
				meta={[
              {'name': 'description', 'content': 'Sound Lab at the Harvard University Department of Music'},
              {'property': 'og:title', 'content': 'Sound Lab'},
              {'property': 'og:type', 'content': 'website'},
              {'property': 'og:description', 'content': 'Sound Lab at the Harvard University Department of Music'},
				]}
				link={[
              {'rel': 'canonical', 'href': 'http://soundlab.fas.harvard.edu'},
				]}
				onChangeClientState={(newState) => console.log(newState)}
      />
		)
	}
}

export default Head

import React from 'react';
import { gql, graphql } from 'react-apollo';

const Mirador = window.Mirador;

class MiradorViewer extends React.Component {
	componentDidUpdate() {
		setTimeout(() => {
			const {manifest, manifestUri} = this.props;
			let miradorManifestUri = manifestUri;

			if (manifest) {
				miradorManifestUri = manifest.remoteUri;
			}

			console.log(miradorManifestUri);

			if (!miradorManifestUri) {
				return null;
			}

			Mirador({
				id: 'miradorViewer',
				layout: '1x1',

				data: [
					{
						manifestUri: miradorManifestUri,
						location: 'Harvard University'
					}
				],

				windowObjects: [{
					loadedManifest: miradorManifestUri,
				}],

				windowSettings: {
					sidePanel: false,
					canvasControls: {
						annotations: {
							annotationLayer: false
						},
						imageManipulation: {
							manipulationLayer: false
						},
					},
					displayLayout: false,
				},

				mainMenuSettings: {
					show: false
				},
			});
		}, 1000);
	}

	render() {
		console.log(' LOG', );
		const {manifest, manifestUri} = this.props;

		if (!manifest && !manifestUri) {
      // TODO: Return 404
			return null;
		}

		return (
			<div
				id="miradorViewer"
				className="miradorViewer"
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100vw',
					height: '100vh',
				}}
			/>
		);
	}
}

MiradorViewer.propTypes = {
	manifest: React.PropTypes.object,
	manifestUri: React.PropTypes.string,
};


const MiradorDetailsQuery = gql`query getMirador($id: String!) {
  miradorById(_id: $id) {
    title, 
    label, 
    abbr, 
    author, 
    seeAlso, 
    attribution, 
    slug, 
    images {
      name
      type
      path
      thumbPath
    }
  }
}`;

const MiradorWithData = graphql(MiradorDetailsQuery, {
	options: ownProps => ({
		variables: {
			id: ownProps.params.id
		}
	})})(MiradorViewer);

export default MiradorWithData;

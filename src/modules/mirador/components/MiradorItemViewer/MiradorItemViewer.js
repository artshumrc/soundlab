import React from 'react';
import PropTypes from 'prop-types';


const Mirador = window.Mirador;


class MiradorItemViewer extends React.Component {

	componentDidUpdate() {

		setTimeout(() => {
			Mirador({
				id: 'miradorItemViewer',
				layout: '1x1',

				data: [
					{
						manifestUri: 'https://s3-us-west-2.amazonaws.com/archimedes-data003/iiif/manifests/zyHGnoWYyoLgwP4dX/manifest.json',
						location: 'orphe.us'
					}
				],

				windowObjects: [{
					loadedManifest: 'https://s3-us-west-2.amazonaws.com/archimedes-data003/iiif/manifests/zyHGnoWYyoLgwP4dX/manifest.json',
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
		const { file } = this.props;

		if (!file) {
			return null;
		}

		return (
			<div
				id="miradorItemViewer"
				className="miradorItemViewer"
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


MiradorItemViewer.propTypes = {
	file: PropTypes.object,
};


export default MiradorItemViewer;

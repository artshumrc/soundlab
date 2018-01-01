import React from 'react';
import PropTypes from 'prop-types';


const Mirador = window.Mirador;


class MiradorFileViewer extends React.Component {

	componentDidUpdate() {

		setTimeout(() => {
			Mirador({
				id: 'miradorFileViewer',
				layout: '1x1',

				data: [
					{
						manifestUri: 'http://iiif.orphe.us/protest%2F1TitleGraffiti.jpg/info.json',
						location: 'orphe.us'
					}
				],

				windowObjects: [{
					loadedManifest: 'http://iiif.orphe.us/protest%2F1TitleGraffiti.jpg/info.json',
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
				id="miradorFileViewer"
				className="miradorFileViewer"
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


MiradorFileViewer.propTypes = {
	file: PropTypes.object,
};


export default MiradorFileViewer;

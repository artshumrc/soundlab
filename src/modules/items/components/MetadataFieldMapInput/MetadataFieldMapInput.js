import React from 'react';
import autoBind from 'react-autobind';
import Map, { Marker, GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';


import './MetadataFieldMapInput.css';

class MetadataFieldMapInput extends React.Component {

	constructor(props) {
		super(props);

		autoBind(this);
		this.state = {
			place: null,
			position: null,
			zoom: 1,
		};
	}

	onSubmit(e) {
		e.preventDefault();
	}

	async onSelectAutocompletePlace(address) {
		const results = await geocodeByAddress(this.state.address);
		const latLng = await getLatLng(results[0]);

		this.setState({
			marker: {
				position: latLng,
			},
			position: latLng,
			zoom: 17,
		});
	}

	handleChangeAutocomplete(address) {
		this.setState({
			address,
		});
	}

	onMapClicked(map, _, e) {
		this.setState({
			marker: {
				position: {
					lat: e.latLng.lat(),
					lng: e.latLng.lng(),
				},
			},
		});
	}

	render() {
		const { google } = this.props;
		const { position, marker } = this.state;

		return (
			<div className="metadataFieldMapInput">
				<div className="placesAutocompleteInput">
					<i className="mdi mdi-magnify" />
					{google &&
						<PlacesAutocomplete
							inputProps={{
								onChange: this.handleChangeAutocomplete,
								value: this.state.address,
							}}
							onSelect={this.onSelectAutocompletePlace}
						/>
					}
				</div>
				<Map
					google={this.props.google}
					containerStyle={{
	    			position: 'relative',
	    			height: '290px',
	    			width: '100%'
	    		}}
					center={position}
					centerAroundCurrentLocation={false}
					zoom={this.state.zoom}
					onClick={this.onMapClicked}
	    	>
					{marker ?
						<Marker
							position={marker.position}
	          />
	        : ''}
				</Map>
				{position &&
					<div className="latitudeAndLongitude">
						<h5>Selected Point</h5>
						<span>
							<label>Latitude:</label> {marker && marker.position.lat}
						</span>
						<span>
							<label>Longitude:</label> {marker && marker.position.lng}
						</span>
					</div>
				}
			</div>
		)
	}
}


export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
	libraries: ['places', 'visualization'],
})(MetadataFieldMapInput);

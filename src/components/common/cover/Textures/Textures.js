import React from 'react';
import * as d3 from 'd3';
import textures from 'textures';



class Textures extends React.Component {

	componentDidMount() {
		const svg = d3
			.select('#textures')
			.append('svg')
			.attr('width', window.innerWidth * 1.2)
			.attr('height', window.innerHeight * 1.2)
			;

		const texture = textures
			.lines()
			.thinner()
			.lighter()
			.orientation('vertical')
			.stroke('#ddd')
			;

		svg.call(texture);

		svg
			.append('rect')
			.attr('width', window.innerWidth * 1.2)
			.attr('height', window.innerHeight * 1.2)
			.style('fill', texture.url());
	}

	render() {
		return (
			<div
				id="textures"
			/>
		);
	}
}

export default Textures;

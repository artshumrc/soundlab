import React from 'react';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.renderChildren = this.renderChildren.bind(this);
	}

	renderChildren() {
		return React.Children.map(this.props.children, child => React.cloneElement(child, {
			form: this.props.store
		}));
	}

	render() {
		return (
			<form>
				{this.renderChildren()}
			</form>
		);
	}
}

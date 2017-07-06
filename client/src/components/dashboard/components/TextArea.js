import React from 'react';
import FontAwesome from 'react-fontawesome';
import './stylesheets/TextArea.css';

export default class TextArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: false
		};
		this.countCharacters = this.countCharacters.bind(this);
	}

	countCharacters(event) {
		if (this.props.min && this.props.min > event.target.value.length) {
			this.setState({error: true, charactersCount: event.target.value.length});
		} else {
			this.setState({error: false, charactersCount: event.target.value.length});
		}
	}

	render() {
		const min = this.props.min ? this.state.error ? <span className="min pull-right"><small
			className="error"
		>{this.state.charactersCount - this.props.min}</small></span> : <span className="min pull-right"><small>min. {this.props.min} characters</small></span> : '';
		const label = this.props.label ? <label>{this.props.label} {min}</label> : '';
		const style = this.state.error ? 'error' : '';
		const required = this.props.required ?
			<div className="required"><FontAwesome name="info-circle" /> This is required value</div> : '';

		return (
			<div className="textArea">
				{label}
				<textarea
					rows={this.props.rows} disabled={this.props.disabled} onKeyUp={this.countCharacters}
					className={style} placeholder={this.props.placeholder} value={this.props.value}
          onChange={this.props.changeCb}
				>
        </textarea>
				{required}
			</div>
		);
	}
}

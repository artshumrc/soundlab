import React from 'react';
import {FormGroup, InputGroup, FormControl, DropdownButton, MenuItem} from 'react-bootstrap';
import './stylesheets/InputAction.css';

export default class InputAction extends React.Component {
	render() {
		return (
			<div className="inputAction">
				<FormGroup>
					<InputGroup>
						<FormControl type="text" />
						<DropdownButton
							componentClass={InputGroup.Button}
							id="input-dropdown-addon"
							title={this.props.options[0].name}
						>
							{
                this.props.options.map((option, index) => <MenuItem key={index}>{option.name}</MenuItem>)
              }
						</DropdownButton>
					</InputGroup>
				</FormGroup>
			</div>
		);
	}
}

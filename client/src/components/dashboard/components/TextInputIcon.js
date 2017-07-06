import React from 'react';
import {FormGroup, InputGroup, FormControl} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import './stylesheets/TextInputIcon.css';

export default class NumberInput extends React.Component {
  render() {
    return (
      <FormGroup className="textInputIcon">
        <InputGroup>
          <InputGroup.Addon>
            <FontAwesome name={this.props.icon}/>
          </InputGroup.Addon>
          <FormControl type="text" placeholder="Username" value={this.props.value} onChange={this.changeCb}/>
        </InputGroup>
      </FormGroup>
    );
  }
}
NumberInput.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string,
  changeCb: PropTypes.func.isRequired

};

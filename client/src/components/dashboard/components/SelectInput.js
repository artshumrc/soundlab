import React from 'react';
import './stylesheets/SelectInput.css';

export default class SelectInput extends React.Component {
  render() {
    return (
      <div className="selectInput">
        <select placeholder="Placeholder">
          <option disabled selected>Placeholder</option>
          {this.props.options.map((option) => {
            return <option value={option.value}>{option.name}</option>
          })}
        </select>
      </div>
    )
  }
}

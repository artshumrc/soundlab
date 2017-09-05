import React from 'react';
import PropTypes from 'prop-types';

const Settings = ({ submit }) => (
  <div>
    <p>Settings go here</p>
  </div>
);

Settings.propTypes = {
  submit: PropTypes.func.isRequired
}

export default Settings;

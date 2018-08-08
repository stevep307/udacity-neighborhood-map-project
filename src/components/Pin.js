import React from 'react';
import PropTypes from 'prop-types';

import './Pin.css';
import { NavLink } from 'react-router-dom';

function Pin({ bridgeName, id }) {
  return <NavLink to={`/bridge/${id}`} className="Pin" title={bridgeName}/>;
}

export default Pin;

Pin.propTypes = {
  bridgeName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

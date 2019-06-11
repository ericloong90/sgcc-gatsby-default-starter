import React from 'react';
import PropTypes from 'prop-types';

const LayoutComponent = ({ children }) => (
  <div>
    <h1>Welcome to SGCC Gatsby Default Starter</h1>
    {children}
  </div>
);

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutComponent;

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import PropTypes from 'prop-types';
import rootReducer from '../reducers';

const Root = ({ element, initialState }) => {
  const store = createStore(rootReducer, initialState || {}, applyMiddleware(reduxPromise));

  return <Provider store={store}>{element}</Provider>;
};

Root.defaultProps = {
  element: <></>,
  initialState: {},
};

Root.propTypes = {
  element: PropTypes.element,
  initialState: PropTypes.objectOf(PropTypes.array, PropTypes.object),
};

export default Root;

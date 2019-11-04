/*eslint-disable */

import React from 'react';

import Root from './src/components/Root';
import Layout from './src/components/Layout';
import './src/styles/reset.css';
import './src/styles/global.css';
import './src/styles/fonts.css';

const wrapRootElement = Root;

const wrapPageElement = ({ element: page }) => {
  return <Layout>{page}</Layout>;
};

export default {};

export { wrapRootElement, wrapPageElement };

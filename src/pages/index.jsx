import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useSelector, useDispatch } from 'react-redux';

import SEO from '../components/seo';
import { defaultAction } from '../actions';

const IndexPage = ({ location }) => {
  const obj = useSelector(({ defaultReducer }) => defaultReducer);
  const dispatch = useDispatch();

  const defaultDispatch = payload => dispatch(defaultAction(payload));

  return (
    <>
      <SEO
        title="Leading coding school for kids and youths 7-19"
        description="Learn Scratch, Python, JavaScript, Java, C++. Singapore's largest qualified full-time instructional team. Structured coding curriculum."
        keywords={[
          'coding for kids',
          'kids coding school',
          'coding for kids Scratch',
          'coding for kids Singapore',
          'coding classes for kids',
          'coding lessons Singapore',
          'programming courses Singapore',
          'coding courses Singapore',
          'coding bootcamp Singapore',
          'holiday coding camp Singapore',
          'coding enrichment classes',
          'python programming for kids',
          'python coding Singapore',
          'learn python coding Singapore',
          'python for kids',
          'coding for kids python',
          'ib computer science tuition Singapore',
          'beginner java courses Singapore',
        ]}
        location={location}
      />
      Hello from main page
      <h1>{obj.value}</h1>
      <button
        type="button"
        onClick={() => {
          defaultDispatch({ value: 'Goodbye World' });
        }}
      >
        Trigger Action
      </button>
      <Link to="/level2">Go to Level 2</Link>
      <Link to="/level3">Go to Level 3</Link>
    </>
  );
};

IndexPage.defaultProps = {
  location: {},
};

IndexPage.propTypes = {
  location: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  ),
};

export default IndexPage;

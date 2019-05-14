import React, { useEffect } from 'react';
import shortid from 'shortid';
import { Link } from 'gatsby';

import $ from '../styles/global';

/**
 * Retrieves 1 absolute path to the Webpack processed image from the assets/image folder.
 * @param {string} pathToImage
 * @return {string}
 */
const importOneImage = pathToImage => require.context('../assets/images', true)(`./${pathToImage}`);

/**
 * Retrieves 1 SVG image as React Component from assets/image.
 * @param {string} pathToSVG
 * @param {object} props - Extra attribute you wish to add to the SVG component.
 * @returns {React.Component}
 */
const importOneSVG = (pathToSVG, props = {}) => {
  const svgImage = importOneImage(pathToSVG);
  const { defaultProps } = svgImage;

  return svgImage({ ...props, ...defaultProps });
};

/**
 * Returns true if screen is mobile size. False if otherwise.
 * @returns {bool}
 */
const isMobile = () => window.matchMedia($.device.mobile).matches;

/**
 * Returns true if screen is tablet size. False if otherwise.
 * @returns {bool}
 */
const isTablet = () => window.matchMedia($.device.tablet).matches;

/**
 * Returns true if screen is desktop size. False if otherwise.
 * @returns {bool}
 */
const isDesktop = () => window.matchMedia($.device.desktop).matches;

/**
 * Informs if a click outside the given ref is done.
 * @param {React.reference} ref - Reference to the component
 * @param {func} callback - A callback function to run if user clicked outside the component
 */
const useOutsideClick = (ref, callback) => {
  const handleOutsideClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback(event);
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('mousedown', handleOutsideClick);
      }
    };
  }, []);
};

/**
 * Takes in 1 array of objects, and add keys to them.
 * @param {array} items - 1 array of objects.
 * @returns {array}
 */
const addKeys = items => items.map(item => ({ ...item, key: shortid.generate() }));

/**
 * Takes in a string, and convert internal link strings to actual Gatsby link components
 * Returns an array of the string with the link components spliced in it.
 * You can directly use the results of this util function into a JSX component.
 * @param {string} subject - String with <Link><linkURL>|<linkText></Link> in it.
 * Even if there aren't any matching substrings in it, it will just return an array of one item
 * You can still use it directly as a children of a component.
 * @param {React.Component} [ LinkComponent ] - Optional parameter to use your own
 * Link component instead. If not passed in, it will use the default styled Link component here
 * @returns {array} - returns an array of spliced in original string and Gatsby Link components
 */
const parseStringToGatsbyLink = (subject, LinkComponent = Link) => subject.split(/<Link>|<\/Link>/).map((ele) => {
  if (/\/.+?\|.+/.test(ele)) {
    const key = shortid.generate();
    return (
      <LinkComponent key={key} to={ele.split('|')[0]}>
        {ele.split('|')[1]}
      </LinkComponent>
    );
  }
  return ele;
});

const parseTimeToDayMonth = (item) => {
  const date = new Date(item);
  const day = date.getDate();
  const month = date.toLocaleString('en-us', { month: 'short' });

  return `${day} ${month}`;
};

const parseTimeToDayName = (item) => {
  const date = new Date(item);

  return date.toLocaleString('en-us', { weekday: 'short' });
};

export default {
  isMobile,
  isDesktop,
  isTablet,
  importOneImage,
  importOneSVG,
  useOutsideClick,
  addKeys,
  parseStringToGatsbyLink,
  parseTimeToDayMonth,
  parseTimeToDayName,
};

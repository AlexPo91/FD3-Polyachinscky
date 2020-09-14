import React from 'react';
import PropTypes from 'prop-types';

const RainbowFrame = (props) => {
  const { colors, children } = props;
  const arrElem = [children, ...colors];
  const elem = arrElem.reduce((result, el) => (<div style={{ border: `5px solid ${el}`, padding: '5px' }}>{result}</div>));
  return (
    <div style={{ display: 'inline-block' }}>{elem}</div>
  );
};
RainbowFrame.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.string.isRequired,
};
export default RainbowFrame;

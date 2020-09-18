/* eslint-disable react/display-name */
import React from 'react';

// eslint-disable-next-line no-unused-vars
const withRainbowFrame = (colors) => (Component) => (props) => {
  // eslint-disable-next-line react/prop-types
  let { children } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  children = <Component {...props} />;
  for (let i = 0; i < colors.length; i += 1) {
    children = <div style={{ border: `5px solid ${colors[i]}`, padding: '5px' }}>{children}</div>;
  }
  return (
    <div style={{ display: 'inline-block' }}>
      {children}
    </div>
  );
};

export default withRainbowFrame;

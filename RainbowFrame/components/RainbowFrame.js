import React from 'react';
import PropTypes from 'prop-types';

const RainbowFrame = (props) => {
  const { colors } = props;
  let { children } = props;
  for (let i = 0; i < colors.length; i += 1) {
    children = (
      <div style={{ border: `5px solid ${colors[i]}`, padding: '5px' }}>
        {children}
      </div>
    );
  }
  return (
    <div style={{ display: 'inline-block' }}>{children}</div>
  );
};

// const RainbowFrame = (props) => {
//   const { colors, children } = props;
//   const arrElem = [children, ...colors];
//   const elem = arrElem.reduce((result, el) => (
//     <div style={{ border: `5px solid ${el}`, padding: '5px' }}>
//       {result}
//     </div>
//   ));
//   return (
//     <div style={{ display: 'inline-block' }}>{elem}</div>
//   );
// };
RainbowFrame.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.string.isRequired,
};
export default RainbowFrame;

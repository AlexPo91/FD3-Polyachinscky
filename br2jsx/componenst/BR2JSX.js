/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './BR2JSX.css';

const BR2JSX = (props) => {
  const { text } = props;
  const textJsx = text.split(/<br ?\/?>/).map((el, index) => (
    <Fragment key={index}>
      {index ? <br /> : null}
      {el}
    </Fragment>
  ));
  return (<div className="br2jsx">{textJsx}</div>);
};
BR2JSX.propTypes = {
  text: PropTypes.string.isRequired,
};
export default BR2JSX;

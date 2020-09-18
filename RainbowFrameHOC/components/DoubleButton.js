import React from 'react';
import PropTypes from 'prop-types';

class DoubleButton extends React.Component {
  pressed1 = () => {
    const { cbPressed } = this.props;
    cbPressed(1);
  }

  pressed2 = () => {
    const { cbPressed } = this.props;
    cbPressed(2);
  }

  render() {
    const { caption1, caption2, children } = this.props;
    return (
      <div>
        <input type="button" value={caption1} onClick={this.pressed1} />
        {children}
        <input type="button" value={caption2} onClick={this.pressed2} />
      </div>
    );
  }
}
DoubleButton.propTypes = {
  cbPressed: PropTypes.func.isRequired,
  caption1: PropTypes.string.isRequired,
  caption2: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
export default DoubleButton;

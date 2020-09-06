import React from 'react';
import PropTypes from 'prop-types';
import './CardProduct.scss';

class CardProduct extends React.Component {
  render() {
    const { product, selectProductStr, workmode } = this.props;
    if (selectProductStr && workmode === 0) {
      const selectProduct = product.find((el) => el.code === selectProductStr);
      return (
        <div className="CardProduct">
          <div className="Product">
            {selectProduct.category.slice(0, 1).toUpperCase() + selectProduct.category.slice(1)}
            {' '}
            {selectProduct.model}
          </div>
          <div className="PriceCard">
            Price:
            {' '}
            {selectProduct.price}
          </div>
          <div className="BalanceCard">
            Balance:
            {' '}
            {selectProduct.balance}
          </div>
        </div>
      );
    }
    return null;
  }
}
CardProduct.defaultProps = {
  selectProductStr: null,
};
CardProduct.propTypes = {
  workmode: PropTypes.number.isRequired,
  selectProductStr: PropTypes.string,
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CardProduct;

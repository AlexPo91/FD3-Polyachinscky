import React from 'react';
import PropTypes from 'prop-types';

class ProductBlock extends React.Component {
  productClicked = () => {
    const { cbSelectProduct, code } = this.props;
    cbSelectProduct(code);
  }

  render() {
    const {
      model, category, image, price, balance, code,
      cbDeleteProduct, isSelected, cbEditProduct, workmode, isEditedProduct,
    } = this.props;
    const isDisabletBtnDelete = workmode !== 0;
    return (
      <tr className={isSelected ? 'ProductInfo active' : 'ProductInfo'} onClick={this.productClicked}>
        <td className="ProductTd">{category.slice(0, 1).toUpperCase() + category.slice(1)}</td>
        <td className="ModelTd">{model}</td>
        <td className="ImageTd">
          <img src={image} alt={image} />
        </td>
        <td className="PriceTd">{price}</td>
        <td className="BalanceTd">{balance}</td>
        <td className="CodeTd">{code}</td>
        <td className="ControlTd">
          <input type="button" className="btn btn-edit" value="Edit" onClick={cbEditProduct} disabled={workmode === 2 ? true : isEditedProduct} />
          <input type="button" className="btn btn-delete" value="Delete" onClick={cbDeleteProduct} disabled={isDisabletBtnDelete} />
        </td>
      </tr>
    );
  }
}
ProductBlock.propTypes = {
  isEditedProduct: PropTypes.bool.isRequired,
  workmode: PropTypes.number.isRequired,
  cbEditProduct: PropTypes.func.isRequired,
  cbSelectProduct: PropTypes.func.isRequired,
  cbDeleteProduct: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};
export default ProductBlock;

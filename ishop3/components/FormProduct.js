/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import './FormProduct.scss';

class FormProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: props.workmode === 1 ? props.editableProduct.model : '',
      image: props.workmode === 1 ? props.editableProduct.image : '',
      price: props.workmode === 1 ? props.editableProduct.price : '',
      balance: props.workmode === 1 ? props.editableProduct.balance : '',
      category: '',
      code: '',
      isValidCategory: false,
      isValidCode: false,
      isValidModel: props.workmode === 1,
      isValidImage: props.workmode === 1,
      isValidPrice: props.workmode === 1,
      isValidBalance: props.workmode === 1,
    };
  }

  saveProduct = () => {
    const { cbSaveProduct, editableProduct, cbChangeEditedProduct } = this.props;
    const {
      model, image, price, balance,
    } = this.state;
    cbSaveProduct({
      ...editableProduct,
      model,
      image,
      price,
      balance,
    });
    cbChangeEditedProduct(false);
  }

addProduct = () => {
  const { cbAddProduct, cbChangeEditedProduct } = this.props;
  const {
    category, code, model, image, price, balance,
  } = this.state;
  cbAddProduct({
    category, code, model, image, price, balance,
  });
  cbChangeEditedProduct(false);
}

cancelProduct = () => {
  const { cbChangeEditedProduct, cbCancelEdit } = this.props;
  cbChangeEditedProduct(false);
  cbCancelEdit();
}

  handlerChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const { cbChangeEditedProduct, codes } = this.props;
    if (name === 'category') {
      this.setState({
        isValidCategory: value !== '',
        category: value,
      });
    }
    if (name === 'code') {
      this.setState({
        isValidCode: value !== '' && !codes.includes(value.toLowerCase()),
        code: value,
      });
    }
    if (name === 'model') {
      this.setState({
        isValidModel: value !== '' && !Number(value),
        model: value,
      });
    }
    if (name === 'image') {
      this.setState({
        isValidImage: value !== '' && /^[a-z]+:\/\//i.test(value),
        image: value,
      });
    }
    if (name === 'price') {
      this.setState({
        isValidPrice: value !== '' && Number(value),
        price: isNaN(value) ? value : Number(value),
      });
    }
    if (name === 'balance') {
      this.setState({
        isValidBalance: value !== '' && Number.isInteger(+value),
        balance: isNaN(value) ? value : Number(value),
      });
    }
    cbChangeEditedProduct(true);
  };

  validateForm = () => {
    const {
      isValidModel, isValidImage, isValidPrice, isValidBalance, isValidCode, isValidCategory,
    } = this.state;
    const { workmode } = this.props;
    if (workmode === 1
      && isValidModel
      && isValidImage
      && isValidPrice
      && isValidBalance
    ) {
      return true;
    } if (workmode === 2
      && isValidModel
      && isValidImage
      && isValidPrice
      && isValidBalance
      && isValidCode
      && isValidCategory
    ) {
      return true;
    } return false;
  }

  render() {
    const { workmode } = this.props;
    const {
      model, image, price, balance, code,
      isValidModel, isValidImage, isValidPrice, isValidBalance, isValidCategory, isValidCode,
    } = this.state;
    return (
      <div className="FormProduct">
        <div className="TitleForm">{workmode === 1 ? 'Edit existing Product' : 'Add new product'}</div>
        <div className="PosProduct">1</div>
        {workmode === 2 && (
          <>
            <div className="divRow">
              <span className="nameField">Category</span>
              <select name="category" onChange={this.handlerChange}>
                <option value="">Select Category</option>
                <option value="tv">TV</option>
                <option value="phone">Phone</option>
                <option value="notebook">Notebook</option>
              </select>
              {!isValidCategory && (
              <span className="errorMessage">
                Please, select category.
              </span>
              )}
            </div>
            <div className="divRow">
              <span className="nameField">Code</span>
              <input type="text" value={code} name="code" onChange={this.handlerChange} />
              {!isValidCode && (
              <span className="errorMessage">
                Please fill in the field. The value should be unique code.
              </span>
              )}
            </div>
          </>
        )}
        <div className="divRow">
          <span className="nameField">Model</span>
          <input type="text" value={model} name="model" onChange={this.handlerChange} />
          {!isValidModel && <span className="errorMessage">Please, fill the field. Value must be a string.</span>}
        </div>
        <div className="divRow">
          <span className="nameField">Url Image</span>
          <input type="text" value={image} name="image" onChange={this.handlerChange} />
          {!isValidImage && <span className="errorMessage">Please, fill the field. Value must be a valid URL</span>}
        </div>
        <div className="divRow">
          <span className="nameField">Price</span>
          <input type="text" value={price} name="price" onChange={this.handlerChange} />
          {!isValidPrice && <span className="errorMessage">Please, fill the field. Value must be a positive number.</span>}
        </div>
        <div className="divRow">
          <span className="nameField">Balance</span>
          <input type="text" value={balance} name="balance" onChange={this.handlerChange} />
          {!isValidBalance && <span className="errorMessage">Please, fill the field. Value must be a positive integer.</span>}
        </div>
        <div className="buttonControl">
          <input type="button" value={workmode === 1 ? 'Save' : 'Add'} onClick={workmode === 1 ? this.saveProduct : this.addProduct} disabled={!this.validateForm()} />
          <input type="button" value="Cancel" onClick={this.cancelProduct} />
        </div>
      </div>
    );
  }
}
FormProduct.defaultProps = {
  editableProduct: null,
  codes: null,
};
FormProduct.propTypes = {
  codes: PropTypes.arrayOf(PropTypes.string),
  workmode: PropTypes.number.isRequired,
  cbAddProduct: PropTypes.func.isRequired,
  cbCancelEdit: PropTypes.func.isRequired,
  cbChangeEditedProduct: PropTypes.func.isRequired,
  cbSaveProduct: PropTypes.func.isRequired,
  editableProduct: PropTypes.oneOfType([
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      balance: PropTypes.number.isRequired,
      code: PropTypes.string.isRequired,
    }),
    PropTypes.string,
  ]),
};
export default FormProduct;

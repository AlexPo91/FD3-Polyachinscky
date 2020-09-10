/* eslint-disable no-restricted-globals */
import React from 'react';
import './ShopBlock.scss';
import ProductBlock from './ProductBlock';
import dataShop from '../product.json';
import CardProduct from './CardProduct';
import FormProduct from './FormProduct';

class ShopBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameShop: dataShop.nameShop,
      product: dataShop.product,
      selectedProduct: null,
      editableProduct: null,
      workmode: 0, // 0 ничего не открыто, 1 режим редактирования, 2 режим добавления
      isEditedProduct: false,
    };
  }

  deleteProduct = (code) => {
    const { product } = this.state;
    // eslint-disable-next-line no-alert
    const boolAnswer = confirm('Delete?');
    if (boolAnswer) {
      const index = product.findIndex((el) => el.code === code);
      const newProductArr = [
        ...product.slice(0, index),
        ...product.slice(index + 1),
      ];
      this.setState({ product: newProductArr });
    }
  }

  selectProduct = (code) => {
    const { selectedProduct, isEditedProduct, workmode } = this.state;
    if (!isEditedProduct && workmode !== 2) {
      this.setState({
        workmode: 0,
      });
      if (code === selectedProduct) {
        this.setState({ selectedProduct: null });
      } else {
        this.setState({ selectedProduct: code });
      }
    }
  }

  editProduct = (code) => {
    const { isEditedProduct, product } = this.state;
    if (!isEditedProduct) {
      this.setState({
        workmode: 1,
        selectedProduct: code,
        editableProduct: product.find((el) => el.code === code),
      });
    }
  }

  saveProduct = (items) => {
    const { selectedProduct, product } = this.state;
    const newProduct = product.map((item) => (item.code === selectedProduct ? items : item));
    this.setState({ workmode: 0, product: newProduct });
  }

  addProduct = (items) => {
    const { product } = this.state;
    const newProduct = [...product, items];
    this.setState({ workmode: 0, product: newProduct, selectedProduct: null });
  }

  cancelEdit = () => {
    this.setState({
      workmode: 0,
      selectedProduct: null,
    });
  }

changeEditedProduct = (bool) => {
  this.setState({
    isEditedProduct: bool,
  });
}

render() {
  const {
    nameShop, product, selectedProduct, workmode, editableProduct, isEditedProduct,
  } = this.state;
  const arrTitleProduct = Object.keys(dataShop.product[0]);
  arrTitleProduct.push('control');
  const titleProduct = arrTitleProduct.map((el, index) => (
    <th key={(index.toString())}>{el.slice(0, 1).toUpperCase() + el.slice(1)}</th>
  ));
  const codes = workmode === 2 ? product.map((el) => el.code.toLowerCase()) : null;
  const productList = product.map((elem) => (
    <ProductBlock
      key={elem.code}
      model={elem.model}
      category={elem.category}
      image={elem.image}
      price={elem.price}
      balance={elem.balance}
      code={elem.code}
      cbDeleteProduct={(e) => {
        e.stopPropagation();
        this.deleteProduct(elem.code);
      }}
      isSelected={workmode !== 2 && selectedProduct === elem.code}
      isEditedProduct={isEditedProduct}
      cbSelectProduct={() => {
        this.selectProduct(elem.code);
      }}
      cbEditProduct={
          (e) => {
            e.stopPropagation();
            this.editProduct(elem.code);
          }
        }
      workmode={workmode}
    />
  ));
  return (
    <div className="ShopBlock">
      <table className="TableProduct">
        <caption className="NameShop">
          {nameShop}
        </caption>
        <thead>
          <tr className="ProductTitle">{titleProduct}</tr>
        </thead>
        <tbody>
          {productList}
        </tbody>
      </table>
      {workmode === 0
      && (
      <input
        type="button"
        className="btn btn-newProduct"
        value="New Product"
        onClick={() => {
          this.setState(
            {
              workmode: 2,
            },
          );
        }}
      />
      )}
      {selectedProduct && workmode === 0 && (
      <CardProduct selectedProduct={product.find((el) => el.code === selectedProduct)} />
      )}
      {workmode !== 0
      && (
      <FormProduct
        editableProduct={editableProduct}
        key={workmode === 1 ? editableProduct.code : null}
        workmode={workmode}
        cbSaveProduct={this.saveProduct}
        cbAddProduct={this.addProduct}
        cbChangeEditedProduct={this.changeEditedProduct}
        cbCancelEdit={this.cancelEdit}
        codes={codes}
      />
      )}
    </div>
  );
}
}

export default ShopBlock;

const ShopBlock = React.createClass({
  getInitialState: function () {
    return { productArr: this.props.productArr };
  },
  propTypes: {
    productArr: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        category: React.PropTypes.string.isRequired,
        model: React.PropTypes.string.isRequired,
        image: React.PropTypes.string,
        price: React.PropTypes.number.isRequired,
        balance: React.PropTypes.number.isRequired,
        code: React.PropTypes.string.isRequired,
      })
    ),
  },
  selectProduct: function (e) {
    e.target.parentElement.classList.toggle("active");
  },
  deleteProduct: function (code) {
    const index = this.state.productArr.findIndex((el) => el.code === code);
    const newProductArr = [
      ...this.state.productArr.slice(0, index),
      ...this.state.productArr.slice(index + 1),
    ];
    this.setState({ productArr: newProductArr });
  },
  render() {
    const tableItem = [];
    this.props.titleTable.forEach((el, index) => {
      tableItem.push(
        React.DOM.th({ key: index }, el.slice(0, 1).toUpperCase() + el.slice(1))
      );
    });
    const productList = this.state.productArr.map((elem) => {
      return React.createElement(ProductBlock, {
        key: elem.code,
        model: elem.model,
        category: elem.category,
        image: elem.image,
        price: elem.price,
        balance: elem.balance,
        code: elem.code,
        deleteProduct: (e) => {
          e.stopPropagation();
          this.deleteProduct(elem.code);
        },
      });
    });
    return React.DOM.div(
      { className: "ShopBlock" },
      React.DOM.table(
        { className: "TableProduct" },
        React.DOM.caption({ className: "NameShop" }, this.props.nameShop),
        React.DOM.thead(
          null,
          React.DOM.tr({ className: "ProductTitle" }, tableItem)
        ),
        React.DOM.tbody({ onClick: this.selectProduct }, productList)
      )
    );
  },
});

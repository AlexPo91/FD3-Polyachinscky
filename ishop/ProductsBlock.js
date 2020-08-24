var ProductsBlock = React.createClass({
  render: function () {
    const tableItem = [];
    this.props.titleTable.forEach((el, index) => {
      tableItem.push(React.DOM.th({ key: index }, el.slice(0,1).toUpperCase() + el.slice(1)));
    });
    const keyItem = this.props.productArr.map((el) => {
      return React.DOM.tr(
        { key: el.code, className: "ProductInfo" },
        React.DOM.td({ className: "ProductTd" }, el.category.slice(0,1).toUpperCase() + el.category.slice(1)),
        React.DOM.td({ className: "ModelTd" }, el.model),
        React.DOM.td(
          { className: "ImageTd" },
          React.DOM.img({ src: el.image })
        ),
        React.DOM.td({ className: "PriceTd" }, el.price),
        React.DOM.td({ className: "BalanceTd" }, el.balance),
        React.DOM.td({ className: "CodeTd" }, el.code),
      );
    });

    return React.DOM.div(
      { className: "ProductsBlock" },
      React.DOM.table(
        { className: "TableProduct" },
        React.DOM.caption({ className: "NameShop" }, this.props.nameShop),
        React.DOM.thead(
          null,
          React.DOM.tr({ className: "ProductTitle" }, tableItem)
        ),
        React.DOM.tbody(null, keyItem)
      )
    );
  },
});

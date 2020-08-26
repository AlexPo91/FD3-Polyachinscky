const Filter = React.createClass({
  displayName: "Filter",

  propTypes: {
    wordsArr: React.PropTypes.arrayOf(React.PropTypes.string),
  },

  getInitialState: function () {
    return {
      wordsArr: this.props.wordsArr,
      search: "",
      isSortWords: false,
    };
  },

  changeSort: function () {
    this.setState({
      isSortWords: !this.state.isSortWords,
    });
  },
  
  sortWords: function () {
    let elem = this.state.isSortWords
      ? [...this.state.wordsArr].sort()
      : this.state.wordsArr;
    return elem
      .filter((elem) => elem.toLowerCase().includes(this.state.search.toLowerCase()))
      .map((el, index) => React.DOM.option({ key: index }, el));
  },

  searchWords: function (e) {
    this.setState({ search: e.target.value });
  },
  
  resetSearch: function () {
    this.setState({
      wordsArr: this.props.wordsArr,
      search: "",
      isSortWords: false,
    });
  },

  render() {
    let list = this.sortWords();
    return React.DOM.div(
      { className: "FilterBlock" },
      React.DOM.div(
        { className: "ControlPanel" },
        React.DOM.input({
          type: "checkbox",
          checked: this.state.isSortWords,
          onChange: this.changeSort,
        }),
        React.DOM.input({
          type: "text",
          onChange: this.searchWords,
          value: this.state.search,
        }),
        React.DOM.input({
          type: "button",
          value: "сброс",
          onClick: this.resetSearch,
        })
      ),
      React.DOM.div(
        { className: "ListWords" },
        React.DOM.select({ multiple: true, size: 5 }, list)
      )
    );
  },
});

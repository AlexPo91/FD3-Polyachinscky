const Filter = React.createClass({
  displayName: "Filter",

  propTypes: {
    wordsArr: React.PropTypes.arrayOf(React.PropTypes.string),
  },

  getInitialState: function () {
    return {
      propcessWordsArr: this.props.wordsArr,
      search: "",
      ischangeListWords: false,
    };
  },

  processList: function () {
    let result = this.props.wordsArr;
    if (this.state.search) {
      result = result.filter((elem) =>
        elem.toLowerCase().includes(this.state.search.toLowerCase())
      );
    } else {
        result = result.slice()
    }
    if (this.state.ischangeListWords) {
      result = result.slice().sort();
    }
    this.setState({ propcessWordsArr: result });
  },

  changeSort: function (e) {
    this.setState(
      {
        ischangeListWords: e.target.checked,
      },
      this.processList
    );
  },

  searchWords: function (e) {
    this.setState({ search: e.target.value }, this.processList);
  },

  resetSearch: function () {
    this.setState({
      propcessWordsArr: this.props.wordsArr,
      search: "",
      ischangeListWords: false,
    });
  },

  render() {
    let list = this.state.propcessWordsArr.map((el, index) =>
      React.DOM.option({ key: index }, el)
    );
    return React.DOM.div(
      { className: "FilterBlock" },
      React.DOM.div(
        { className: "ControlPanel" },
        React.DOM.input({
          type: "checkbox",
          checked: this.state.ischangeListWords,
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

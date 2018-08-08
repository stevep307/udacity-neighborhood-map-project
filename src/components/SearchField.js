import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchField extends Component {
  componentDidMount() {
    this.searchInput.focus();
  }
  onInputChange = (event) => {
    let { onSearch } = this.props;
    onSearch(event.target.value);
  };
  render() {
    let { searchString } = this.props;
    return <input value={searchString} className="LocationsFilter" type="text"
                  placeholder='Enter location name' name='filter' onChange={this.onInputChange}
                  ref={(input) => { this.searchInput = input; }} />
  }
}

SearchField.propTypes = {
  searchString: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default SearchField;
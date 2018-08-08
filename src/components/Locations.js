import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';

import './Locations.css';
import LocationInfo from './LocationInfo';
import SearchField from './SearchField';

class Locations extends Component {
  state = {
    searchString: ''
  };

  onSearch = (searchString) => {
    const { onSearch } = this.props;
    this.setState({searchString});
    onSearch(searchString);
  };

  render() {
    const { bridges, searchString } = this.props;

    return <div className="Locations">
      <Route path='/' exact component={() => <Fragment>
        <SearchField searchString={searchString} onSearch={this.onSearch}/>
        <div className="LocationsList">
          {bridges.map(({ id, title }) => <Link to={`/bridge/${id}`} className="LocationsListItem" key={id}>{title}</Link>)}
        </div>
      </Fragment>} />

      <Route path='/bridge/:id' component={({ match }) =>
        <LocationInfo id={match.params.id} />
      } />
    </div>
  }
}

Locations.propTypes = {
  bridges: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default Locations;
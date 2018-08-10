import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link, Route} from 'react-router-dom';

import './Locations.css';
import LocationInfo from './LocationInfo';
import SearchField from './SearchField';

function Locations({bridges, searchString, onSearch}) {
  return <div className="Locations">
    <Route path='/' exact render={() => <Fragment>
      <SearchField searchString={searchString} onSearch={onSearch}/>
      <div className="LocationsList">
        {bridges.map(({id, title}) => <Link to={`/bridge/${id}`} className="LocationsListItem" key={id}>{title}</Link>)}
      </div>
    </Fragment>}/>

    <Route path='/bridge/:id' render={({match}) =>
      <LocationInfo id={match.params.id}/>
    }/>
  </div>
}

Locations.propTypes = {
  bridges: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default Locations;
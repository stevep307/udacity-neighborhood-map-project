/* global AbortController */

import React, {Component, Fragment} from 'react';
import './LocationInfo.css';

import { getInfo } from '../api/wikimapiaApi';
import { getInfoById } from '../api/localData';
import { Link } from 'react-router-dom';

const EXTERNAL_DATA_LOADING = 'EXTERNAL_DATA_LOADING';
const EXTERNAL_DATA_LOAD_SUCCESS = 'EXTERNAL_DATA_LOAD_SUCCESS';
const EXTERNAL_DATA_LOAD_ERROR = 'EXTERNAL_DATA_LOAD_ERROR';

const DEFAULT_ERROR_MESSAGE = `Application problem.
May be it's connection problems or WikiMap API key limit reached.`;

class LocationInfo extends Component {
  state = {
    locationInfo: {},
    loadingExternalDataState: EXTERNAL_DATA_LOADING,
    errorMessage: ''
  };

  // https://developers.google.com/web/updates/2017/09/abortable-fetch
  controller = new AbortController();

  componentDidMount() {
    const { id } = this.props;
    getInfoById(id).then((localData) => this.setState({ locationInfo: localData }));

    getInfo(id, this.controller.signal)
      .then(locationInfo => {
        if (locationInfo.debug) {
          this.setState({
            errorMessage: locationInfo.debug.message,
            loadingExternalDataState: EXTERNAL_DATA_LOAD_ERROR
          })
        } else {
          this.setState({
            locationInfo: Object.assign(this.state.locationInfo, locationInfo),
            loadingExternalDataState: EXTERNAL_DATA_LOAD_SUCCESS
          })
        }
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          this.setState({ loadingExternalDataState: EXTERNAL_DATA_LOAD_ERROR })
        }
      });
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  render() {
    const { loadingExternalDataState, errorMessage = DEFAULT_ERROR_MESSAGE, locationInfo } = this.state;
    const { title, description, photos = [], urlhtml = '', wikipedia = '' } = locationInfo;
    const hasPhotos = photos.length > 0;

    return <div className="LocationInfo">
      <nav aria-label='Breadcrumb'>
        <Link to='/' className='LocationInfoBackBtn'>Back to list</Link>
      </nav>
      <h2 className="LocationInfoTitle">{title}</h2>
      <div className="LocationInfoDescription">
        {loadingExternalDataState === EXTERNAL_DATA_LOAD_ERROR ?
          <Fragment>
            <h3>Error</h3>
            <p>{errorMessage}</p>
          </Fragment> :
          <Fragment>
            <h3>Bridge info:</h3>
            {description && <p>{description}</p>}
            {wikipedia && <p>
              <br />
              Read on wikipedia about <a href={wikipedia} target="_blank">{title}</a>
            </p>}
            {urlhtml && <p>
              <br />
              Wikimapia cc-by-sa  <span dangerouslySetInnerHTML={{__html: urlhtml}}/>
            </p>}
          </Fragment>
        }
        </div>
      {hasPhotos && <div className="LocationInfoPhotos">
        { photos.map((photo, id) => <img className="LocationInfoPhoto" src={photo.big_url}
            alt={`${title} from wikimapia #${id + 1} of ${photos.length}`} key={photo.id}/>) }
      </div>}
    </div>
  }
}

export default LocationInfo;

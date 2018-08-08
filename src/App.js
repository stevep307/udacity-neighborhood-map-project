import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import Locations from './components/Locations';
import Header from './components/Header';
import { getBridges, searchBridges } from './api/localData';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    bridges: [],
    searchString: ''
  };

  componentDidMount() {
    getBridges().then((bridges) => this.setState({bridges, allBridges: bridges}));

  }

  onSearch = (searchString) => {
    this.setState({searchString});
    searchBridges(searchString).then((bridges) => this.setState({bridges}));
  };

  render() {
    const { bridges, searchString } = this.state;
    return (
      <div className="App">
        <Header />
        <Route component={({location}) =>
          location.hash !== '#sidebar-hidden' && <Locations bridges={bridges} onSearch={this.onSearch} searchString={searchString}/>
        }/>
        <Map bridges={bridges} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './Header.css';
import { Link, Route } from 'react-router-dom';

function Header() {
  return <div className="Header">
    <Route component={({location}) =>
      <Link className="HeaderIcon" to={{hash: (location.hash !== '#sidebar-hidden' ? '#sidebar-hidden' : '')}} />
    }/>
    <h1 className="HeaderTitle">Spb bridges</h1>
  </div>
}

export default Header;
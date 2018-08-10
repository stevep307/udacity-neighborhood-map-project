import React from 'react';
import './Header.css';
import { Link, Route } from 'react-router-dom';

function Header() {
  return <div className='Header'>
    <Route render={({location}) =>
      <Link className='HeaderIcon' to={{hash: (location.hash !== '#sidebar-hidden' ? '#sidebar-hidden' : '')}}
            aria-controls='locationList' aria-expanded={(location.hash !== '#sidebar-hidden' ? 'true' : 'false')}
            aria-label={(location.hash !== '#sidebar-hidden' ? 'Close to expand space for map' : 'Open to see bridges list')}/>
    }/>
    <h1 className="HeaderTitle">Spb bridges</h1>
  </div>
}

export default Header;
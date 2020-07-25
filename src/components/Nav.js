import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Nav = () => {
  return (
    <header>
      <nav className="nav">
        <NavLink
          exact
          to={routes.home}
          className="nav-link"
          activeClassName="active"
        >
          Home
        </NavLink>
        <NavLink
          to={routes.movies}
          className="nav-link"
          activeClassName="active"
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;

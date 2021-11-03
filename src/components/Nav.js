import React from 'react';
import Cookies from 'universal-cookie';
import { NavLink } from 'react-router-dom';
import EV from '../assets/EV.png';
import './Nav.css';

const cookies = new Cookies();

const Nav = () => (
  <nav className="nav-panel">
    <div className="nav-panel-logo">
      <img className="mx-auto" src={EV} alt="EV-in" />
    </div>
    <ul>
      <li>
        <NavLink to="/home" className="nav-link" activeClassName="active-nav-link" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/appointments" className="nav-link" activeClassName="active-nav-link" exact>
          Test-Drive
        </NavLink>
      </li>
      <li>
        <NavLink to="/shop" className="nav-link" activeClassName="active-nav-link" exact>
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-car" className="nav-link" activeClassName="active-nav-link" exact>
          Add Car
        </NavLink>
      </li>
      <li>
        <NavLink to="/remove-car" className="nav-link" activeClassName="active-nav-link" exact>
          Remove Car
        </NavLink>
      </li>
      <li>
        <NavLink
          type="button"
          className="nav-link"
          onClick={() => {
            localStorage.clear();
            delete window.localStorage.token;
            cookies.set('username', '');
          }}
          to="/"
        >
          Logout
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;

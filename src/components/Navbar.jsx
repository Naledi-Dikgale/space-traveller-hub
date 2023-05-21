import React from 'react';
import {
  NavLink,
  Routes,
  Route,
} from 'react-router-dom';
import Profile from '../features/Profile/Profile';
import Missions from '../features/Missions/Missions';
import Rockets from '../features/Rockets/Rockets';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav">

        <ul className="navlist">
          <div className="navtitle">
            <img className="logo" src="planet.png" alt="" />
            <li className="navitems">Space Travelers&apos; Hub</li>
          </div>

          <div className="menu">
            <li className="navitems home"><NavLink to="/rockets">Rockets</NavLink></li>
            <li className="navitems">
              <NavLink to="/missions">Missions</NavLink>
              {' '}
            </li>
            <li className="navitems"><NavLink to="/profile">My Profile</NavLink></li>
          </div>
        </ul>
        <div>
          <Routes>
            <Route path="/rockets" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;

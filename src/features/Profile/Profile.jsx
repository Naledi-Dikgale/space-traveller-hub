import React from 'react';
import './Profile.css';
import { useSelector } from 'react-redux';

function Profile() {
  const rockets = useSelector((state) => state.rockets.rockets.filter((elem) => elem.reserved));
  const missions = useSelector((state) => state.missions.missions.filter((elem) => elem.joined));
  return (
    <div className="profile">
      <div className="listbox">
        <h2 className="listtitle">My Missions</h2>
        <ul className="itemlist">
          {
            missions.map((elem) => (<li key={elem.id} className="listitems">{elem.mission_name}</li>))
          }
        </ul>
      </div>
      <div className="listbox">
        <h2 className="listtitle">My Rockets</h2>
        <ul className="itemlist">
          {
            rockets.map((elem) => <li key={elem.id} className="listitems">{elem.rocket_name}</li>)
            }
        </ul>
      </div>
    </div>
  );
}

export default Profile;

import React, { useEffect } from 'react';
import './Missions.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, join } from './missionSlice';

function Missions() {
  const missions = useSelector((state) => state.missions.missions);
  const loading = useSelector((state) => state.missions.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) dispatch(fetchMissions());
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  } return (
    <div className="missions">
      <table cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((elem) => (
              <tr key={elem.mission_id}>
                <td>{elem.mission_name}</td>
                <td>
                  {' '}
                  <p>
                    {' '}
                    {elem.mission_description}
                    {' '}
                  </p>
                </td>
                <td>
                  {
                elem.joined ? <p className="mstat member">A member</p> : <p className="mstat notmember">Not a member</p>
                }

                </td>
                <td>
                  <button className={elem.joined ? 'leavebtn' : 'joinbtn'} type="button" onClick={() => dispatch(join(elem.mission_id))}>
                    {elem.joined ? 'Leave Mission' : 'Join Mission'}
                  </button>

                </td>
              </tr>
            ))
          }
        </tbody>

      </table>
    </div>
  );
}

export default Missions;

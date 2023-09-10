import React, { useEffect } from 'react';
import './Rockets.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, reserve } from './rocketSlice';

function Rockets() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const loading = useSelector((state) => state.rockets.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) dispatch(fetchRockets());
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  } return (
    <div className="rockets">
      {
      rockets.map((elem) => (
        <div key={elem.rocket_id} className="rocketTile">
          <img src={elem.rocket_img} alt="" className="rocketimg" />
          <div className="rocketDetails">
            <h2 className="rocketName">{elem.rocket_name}</h2>
            <p className="rocketDescription">
              <span className={elem.reserved ? 'reserved' : 'notReserved'}>Reserved</span>
              {elem.rocket_description}

            </p>
            <button onClick={() => { dispatch(reserve(elem.rocket_id)); }} type="button" className={elem.reserved ? 'reserveButton cancel' : 'reserveButton reserve'}>
              {elem.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </div>
      ))
      }
    </div>
  );
}

export default Rockets;

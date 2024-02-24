import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchConcerts } from '../http/concertsApi';
import { fetchInitialData, fetchShows } from '../store/showReducer';

export const Header = () => {

  return (
    <div className='header'>
        <div className="wrapper">
            <div className="logo">
                <span>EuroSkills Concerts</span>
            </div>
            <div className="headerButton">
                <p>Already booked? </p>
                <button>Get Tickets</button>
            </div>
        </div>

    </div>
  )
}

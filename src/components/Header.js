import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { HOME_ROUTE, TICKETS_ROUTE } from '../consts';
import { setBookedOn, setName, setTickets } from '../store/ticketReducer';
import { useDispatch } from 'react-redux';

export const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleNavigate = () => {
    navigate(TICKETS_ROUTE)
    dispatch(setTickets([]))
    dispatch(setName(''))
    dispatch(setBookedOn(''))
  }

  return (
    <div className='header'>
        <div className="wrapper">
            <div className="logo">
                <Link to={HOME_ROUTE}>EuroSkills Concerts</Link>
                
            </div>
            <div className="headerButton">
                <p>Already booked? </p>
                <button onClick={handleNavigate}>Get Tickets</button>
            </div>
        </div>

    </div>
  )
}

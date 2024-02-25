import React from 'react'
// import { Main } from './MainPage'
import {Routes, Route } from 'react-router-dom'
import { ReservationSeats } from './ReservationSeats'
import { BOOKING_ROUTE, HOME_ROUTE, SEATS_ROUTE, SHOW_SEATS_ROUTE } from '../consts'
import { Main } from './MainPage'
import { ShowSeatings } from './ShowSeatingsPage'
import { Booking } from './Booking'

export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path={HOME_ROUTE} element={ <Main /> } exact/>
            <Route path={SHOW_SEATS_ROUTE + '/:id'} element={ <ShowSeatings /> } />
            <Route path={BOOKING_ROUTE} element={ <Booking /> } />
            {/* <Route path="/contact" component={Contact} />   */}
        </Routes>
    </div>
  )
}

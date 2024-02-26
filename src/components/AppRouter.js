import React from 'react'
import {Routes, Route } from 'react-router-dom'
import { BOOKING_ROUTE, HOME_ROUTE, SEATS_ROUTE, SHOW_SEATS_ROUTE } from '../consts'
import { Main } from './MainPage'
import { ShowSeatings } from './ShowSeatingsPage'
import { Booking } from './BookingPage'


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

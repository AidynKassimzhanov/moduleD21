import React from 'react'
import { Main } from './Main'
import {Routes, Route, Router } from 'react-router-dom'
import { ReservationSeats } from './ReservationSeats'

export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={ <Main /> } exact/>
            <Route path="/seats" element={ <ReservationSeats /> } />
            {/* <Route path="/contact" component={Contact} />   */}
        </Routes>
    </div>
  )
}

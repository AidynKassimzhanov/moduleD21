import React from 'react'
import { useSelector } from 'react-redux'

export const TicketDetails = () => {

    const ticketData = useSelector(state => state.tickets)

  return (
    <div>
        <h2>Your Tickets are ready</h2>
        <div className="details">
            <h4>Your Details</h4>
            <div className='detailData'>
                <div className="detailName">
                    <p>Name</p>
                    <span>
                        <b>
                            {ticketData.name}
                        </b>
                    </span>
                </div>
                <div className="detailBookedOn">
                    <p>Booked on</p>
                    <span>
                        <b>
                            {ticketData.booked_on.slice(0,10)}
                        </b>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

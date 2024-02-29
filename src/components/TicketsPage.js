import React from 'react'
import { TicketDetails } from './TicketDetails'
import { Ticket } from './Ticket'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { TicketForm } from './TicketForm'

export const TicketsPage = (props) => {

  const ticketData = useSelector(state => state.tickets)
  const [formView, setFormView] = useState(true)

  useEffect(() =>{
    if (ticketData.tickets.length === 0 && ticketData.name === '') 
      setFormView(true)
    else setFormView(false)
  },[ticketData.tickets])

  return (
    <div className='ticketsPage'>

      {formView 
        ? <TicketForm />
        : <div>
            <TicketDetails />
            <div className="tickets">
              
              { ticketData.tickets.length !== 0
                  ? ticketData.tickets.map(ticket => (
                      <Ticket key={ticket.id} ticket={ticket}/> 
                    ))
                  : <div className="notFindTickets">
                      <p>Could not find tickets with these details.</p>
                    </div>
              }
            </div>
          </div>
      }
    </div>
  )
}

